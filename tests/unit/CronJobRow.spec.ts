import type { CronjobResponse } from '@/types/kubernetes';
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
  cronJobSpecFactory,
  jobResponseFactory,
  cronJobResponseFactory,
  createTimeFromDate,
} from '@/../tests/fg.ts';

import StatusProp from '@/components/StatusProp.vue';

describe('CronjobRow', () => {
  let exampleUncountedTerminatedPods: Awaited<ReturnType<typeof uncountedTerminatedPodsFactory.build>>;
  let exampleJobConditionComplete: Awaited<ReturnType<typeof jobConditionCompleteFactory.build>>;
  let exampleJobConditionRunning: Awaited<ReturnType<typeof jobConditionRunningFactory.build>>;
  let exampleJobConditionFailed: Awaited<ReturnType<typeof jobConditionFailedFactory.build>>;
  let jobStatusCompleted: Awaited<ReturnType<typeof jobStatusCompletedFactory.build>>;
  let jobStatusRunning: Awaited<ReturnType<typeof jobStatusRunningFactory.build>>;
  let myJobSpec: Awaited<ReturnType<typeof jobSpecFactory.build>>;
  let cronJobSpec: Awaited<ReturnType<typeof cronJobSpecFactory.build>>;
  let cronJobResponse: CronjobResponse;
  let job1: Awaited<ReturnType<typeof jobResponseFactory.build>>;
  let job2: Awaited<ReturnType<typeof jobResponseFactory.build>>;

  beforeAll(async () => {
    exampleUncountedTerminatedPods = await uncountedTerminatedPodsFactory.build();

    exampleJobConditionComplete = await jobConditionCompleteFactory.build();
    exampleJobConditionRunning = await jobConditionRunningFactory.build();
    exampleJobConditionFailed = await jobConditionFailedFactory.build();

    jobStatusCompleted = await jobStatusCompletedFactory.build();
    jobStatusRunning = await jobStatusRunningFactory.build();

    myJobSpec = await jobSpecFactory.build();

    cronJobSpec = await cronJobSpecFactory.build({
      schedule: '0 2 * * *',
      concurrencyPolicy: 'Forbid',
      suspend: false,
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
    }) as CronjobResponse;
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

describe('CronJobRow unschedulable status', () => {
  it('renders Unschedulable status and attention label when active with no running pods and an Unschedulable pod', async () => {
    const activeJob = await jobResponseFactory.build({
      name: 'active-unsched-job',
      succeeded: false,
      failed: false,
      failureCondition: undefined,
      status: await jobStatusRunningFactory.build(),
    });
    const cronJob = await cronJobResponseFactory.build({
      name: 'unsched-cj',
      namespace: 'sk8l',
      jobs: [activeJob],
      active: true,
      failed: false,
      runningJobsPods: [],
      jobsPods: [
        {
          metadata: { name: 'unsched-pod', namespace: 'sk8l' },
          phase: 'Pending',
          status: {
            conditions: [
              {
                type: 'PodScheduled',
                status: 'False',
                reason: 'Unschedulable',
                message: '0/1 nodes are available: 1 Insufficient cpu.',
              },
            ],
          },
        },
      ],
    }) as CronjobResponse;

    const wrapper = mount(CronJobRow, {
      props: { cronJob },
      global: { plugins: [router] },
    });

    expect(wrapper.find('.status-row').text()).toBe('Unschedulable');
    expect(wrapper.find('.item-pop--attention').exists()).toBe(true);
    expect(wrapper.find('.Label--attention').text()).toBe('Unschedulable');
  });

  it('keeps Pending status when no jobs exist yet', async () => {
    const cronJob = await cronJobResponseFactory.build({
      name: 'idle-cj',
      namespace: 'sk8l',
      jobs: [],
      active: false,
      failed: false,
    }) as CronjobResponse;

    const wrapper = mount(CronJobRow, {
      props: { cronJob },
      global: { plugins: [router] },
    });

    expect(wrapper.find('.status-row').text()).toBe('Pending');
  });

  it('keeps Active status when runningJobsPods is non-empty', async () => {
    const activeJob = await jobResponseFactory.build({
      name: 'active-running-job',
      succeeded: false,
      failed: false,
      failureCondition: undefined,
      status: await jobStatusRunningFactory.build(),
    });
    const cronJob = await cronJobResponseFactory.build({
      name: 'running-cj',
      namespace: 'sk8l',
      jobs: [activeJob],
      active: true,
      failed: false,
      runningJobsPods: [{ metadata: { name: 'running-pod' }, phase: 'Running' }],
      jobsPods: [{ metadata: { name: 'running-pod' }, phase: 'Running' }],
    }) as CronjobResponse;

    const wrapper = mount(CronJobRow, {
      props: { cronJob },
      global: { plugins: [router] },
    });

    expect(wrapper.find('.status-row').text()).toBe('Active');
    expect(wrapper.find('.Label--accent').text()).toBe('Active');
  });
});
