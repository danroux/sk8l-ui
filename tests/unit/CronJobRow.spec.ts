import { shallowMount, mount } from '@vue/test-utils';
import { render, screen } from '@testing-library/vue'
import CronJobRow from '@/components/CronJobRow.vue';
import router from '@/router';

import {
  uncountedTerminatedPodsFactory,
  jobConditionCompleteFactory,
  jobConditionRunningFactory,
  jobConditionFailedFactory,
  jobStatusCompletedFactory,
  jobStatusRunningFactory,
  jobSpecFactory,
  jobFactory,
  jobTemplateSpecFactory,
  cronJobSpecFactory,
  jobResponseFactory,
  cronJobResponseFactory,
  createTimeFromDate,
} from '@/../tests/fg.ts';

import StatusProp from '@/components/StatusProp.vue';

describe('CronjobRow', () => {
  let exampleUncountedTerminatedPods: ReturnType<typeof uncountedTerminatedPodsFactory.build>;
  let exampleJobConditionComplete: ReturnType<typeof jobConditionCompleteFactory.build>;
  let exampleJobConditionRunning: ReturnType<typeof jobConditionRunningFactory.build>;
  let exampleJobConditionFailed: ReturnType<typeof jobConditionFailedFactory.build>;
  let jobStatusCompleted: ReturnType<typeof jobStatusCompletedFactory.build>;
  let jobStatusRunning: ReturnType<typeof jobStatusRunningFactory.build>;
  let myJobSpec: ReturnType<typeof jobSpecFactory.build>;
  let jobTemplateSpec: ReturnType<typeof jobTemplateSpecFactory.build>;
  let cronJobSpec: ReturnType<typeof cronJobSpecFactory.build>;
  let cronJobResponse: ReturnType<typeof cronJobResponseFactory.build>;
  let job1: ReturnType<typeof jobResponseFactory.build>;
  let job2: ReturnType<typeof jobResponseFactory.build>;

  beforeAll(async () => {
    exampleUncountedTerminatedPods = await uncountedTerminatedPodsFactory.build();

    exampleJobConditionComplete = await jobConditionCompleteFactory.build();
    exampleJobConditionRunning = await jobConditionRunningFactory.build();
    exampleJobConditionFailed = await jobConditionFailedFactory.build();

    jobStatusCompleted = await jobStatusCompletedFactory.build();
    jobStatusRunning = await jobStatusRunningFactory.build();

    myJobSpec = await jobSpecFactory.build();

    jobTemplateSpec = await jobTemplateSpecFactory.build({
      metadata: { name: 'daily-job', namespace: 'sk8l', labels: { app: 'batch-processor' } },
      spec: myJobSpec,
    });

    cronJobSpec = await cronJobSpecFactory.build({
      schedule: '0 2 * * *',
      timeZone: 'UTC',
      startingDeadlineSeconds: BigInt(60),
      concurrencyPolicy: 'Forbid',
      suspend: false,
      jobTemplate: jobTemplateSpec,
      successfulJobsHistoryLimit: 3,
      failedJobsHistoryLimit: 1,
    });

    job1 = await jobResponseFactory.build({
      name: 'job-001',
      namespace: 'production',
      succeeded: true,
      failed: false,
      failureCondition: undefined,
      jobStatus: await jobStatusCompletedFactory.build(),
      status: await jobStatusCompletedFactory.build({
        completionTime: createTimeFromDate(eightDaysAgoDate),
      }),
    });

    job2 = await jobResponseFactory.build({
      name: 'job-002',
      namespace: 'production',
      succeeded: false,
      failed: true,
      failureCondition: await jobConditionFailedFactory.build(),
      jobStatus: await jobStatusCompletedFactory.build(),
    });

    cronJobResponse = await cronJobResponseFactory.build({
      name: 'nightly-backup',
      namespace: 'sk8l',
      jobs: [job1, job2],
      failed: false,
      active: true,
    });
  });

  let container: ReturnType<typeof mount>;
  // Date Wed Apr 23 2025 14:14:05 GMT+0200 (Central European Summer Time)
  const eightDaysAgoDate = new Date(new Date().setDate(new Date().getDate() - 8));
  // 2025-04-23T00:00:00.000Z
  const eightDaysAgoISO = eightDaysAgoDate.toISOString().replace(/T.+/, 'T00:00:00.000Z');

  beforeEach(() => {
    container = mount(CronJobRow, { props: { cronJob: cronJobResponse }, global: { plugins: [router] } });
  });

  it('renders correctly', () => {
    expect(container.findComponent(StatusProp).exists()).toBe(true)

    let header = container.find(`#cronjob-${cronJobResponse.name} #cronjob-rendered-definition`);
    expect(header).not.toBeNull();
    expect(header.text()).toMatch('At 12:00 AM');

    let elm = container.find('.cronjob-namespace');
    expect(elm).not.toBeNull();
    expect(elm.text()).toMatch('sk8l');

    elm = container.find('.cronjob-completions');
    expect(elm).not.toBeNull();
    expect(elm.text()).toMatch('5');

    elm = container.find('.cronjob-parallelism');
    expect(elm).not.toBeNull();
    expect(elm.text()).toMatch('2');

    elm = container.find('.cronjob-creation-time');
    expect(elm).not.toBeNull();
    expect(elm.text()).toMatch(eightDaysAgoISO);

    elm = container.find('.cronjob-successful-time');
    expect(elm).not.toBeNull();
    expect(elm.text()).toMatch('8 days ago');

    elm = container.find('.cronjob-completion-time');
    expect(elm).not.toBeNull();
    expect(elm.text()).toMatch('8 days ago');

    // let el = container.querySelectorAll('#cronjob-rows .cronjob-row');
    // expect(el).toHaveLength(2);

    // el = container.querySelectorAll('#cronjob-activity-progress-bar span');
    // expect(el).toHaveLength(2);

    // el = container.querySelector('#cronjobs-timeline h2#timeline-header');
    // expect(el).not.toBeNull();
    // expect(el.textContent).toMatch('Latest completions');
  })
});
