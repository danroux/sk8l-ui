import { shallowMount, mount } from '@vue/test-utils';
import { render, screen } from '@testing-library/vue'
import CronjobList from '@/components/CronjobList.vue';

import CronjobsTimeline from '@/components/CronjobsTimeline.vue';
import CronjobActivityProgressBar from '@/components/CronjobActivityProgressBar.vue';
import CronJobRow from '@/components/CronJobRow.vue';
import router from '@/router';

describe('CronjobList', () => {
  const myJobSpec: JobSpec = {
    parallelism: 2,
    completions: 5,
    activeDeadlineSeconds: BigInt(3600),
    backoffLimit: 6,
    backoffLimitPerIndex: 3,
    maxFailedIndexes: 1,
    manualSelector: false,
    ttlSecondsAfterFinished: 100,
    completionMode: "Indexed",
    suspend: false,
    podReplacementPolicy: "Failed",
    managedBy: "job-controller"
  };

  const jobTemplateSpec: JobTemplateSpec = {
    metadata: {
      name: "daily-job",
      namespace: "default",
      labels: {
        app: "batch-processor"
      }
    },
    spec: myJobSpec
  };

  const cronJobSpec: CronJobSpec = {
    schedule: "0 2 * * *",
    timeZone: "UTC",
    startingDeadlineSeconds: BigInt(60),
    concurrencyPolicy: "Forbid",
    suspend: false,
    jobTemplate: jobTemplateSpec,
    successfulJobsHistoryLimit: 3,
    failedJobsHistoryLimit: 1
  };

  const cronjob: CronjobResponse = {
    name: "nightly-backup",
    namespace: "production",
    uid: "550e8400-e29b-41d4-a716-446655440000",
    containerCommands: {},
    creationTimestamp: "2025-01-01T00:00:00Z",
    definition: "0 0 * * *",
    lastSuccessfulTime: "2025-01-01T00:00:00Z",
    lastScheduleTime: "2025-01-01T00:00:00Z",
    active: true,
    jobs: [],
    runningJobs: [],
    runningJobsPods: [],
    jobsPods: [],
    lastDuration: BigInt(3600_000_000_000),
    currentDuration: BigInt(1800_000_000_000),
    spec: cronJobSpec,
    failed: false
  };

  const cronJobs: CronjobResponse[] = [cronjob, cronjob];
  let container: ReturnType<typeof mount>;

  beforeEach(() => {
    container = mount(CronjobList, { props: { cronJobs }, global: { plugins: [router] } });
  });

  // it('renders counter with accessible text', () => {
  //     let counter = container.querySelector('#cronjob-counter');
  //     expect(counter).not.toBeNull();
  //     expect(counter.textContent).toMatch('Cronjobs 2');
  // });

  it('renders correctly', () => {
    // let header = container.querySelector('#cronjob-activity h2');
    // expect(header).not.toBeNull();
    // expect(header.textContent).toMatch('Cronjob activity');

    // let el = container.querySelectorAll('#cronjob-rows .cronjob-row');
    // expect(el).toHaveLength(2);

    // el = container.querySelectorAll('#cronjob-activity-progress-bar span');
    // expect(el).toHaveLength(2);

    // el = container.querySelector('#cronjobs-timeline h2#timeline-header');
    // expect(el).not.toBeNull();
    // expect(el.textContent).toMatch('Latest completions');

    expect(container.find('#cronjob-counter').text()).toBe('Cronjobs 2');
    expect(container.find('#cronjob-activity').text()).toMatch('Cronjob activity');
    expect(container.findComponent(CronjobActivityProgressBar).exists()).toBe(true)
    expect(container.findComponent(CronjobsTimeline).exists()).toBe(true)

    const childComponents = container.findAllComponents(CronJobRow)
    expect(childComponents).toHaveLength(2)

    childComponents.forEach((comp, index) => {
      expect(comp.props('cronJob')).toStrictEqual(cronJobs[index])
    });
  });
});
