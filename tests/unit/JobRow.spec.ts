import { shallowMount, mount } from '@vue/test-utils';
// import { render } from '@testing-library/vue'
import JobRow from '@/components/JobRow.vue';
import { DateTime, Duration } from 'luxon';
import StatusProp from '@/components/StatusProp.vue';

describe('JobRow', () => {
  let wrapper: any;

  beforeEach(() => {
    const job = {
      name: 'test-job',
      Uuid: 'abc123',
      failed: false,
      terminationReasons: [],
      failureCondition: null,
      spec: {
        completions: 1,
        parallelism: 1,
        suspend: false
      },
      status: {
        active: 1,
        succeeded: true,
        startTime: DateTime.fromSeconds(1620211200).toISO(),
        completionTime: DateTime.fromSeconds(1620211300).toISO(),
      },
      pods: [],
      durationInS: 100,
      succeeded: false,
      withSidecarContainers: false
    };

    wrapper = mount(JobRow, {
      props: {
        job,
      },
    });
  });

  it('should render the job name', () => {
    expect(wrapper.find('.job-name').text()).toBe('test-job');
  });

  it('should render the job UUID', () => {
    expect(wrapper.find('.job-uuid').text()).toContain('Uuid: abc123');
  });

  it('should render the job status', () => {
    // expect(wrapper.find(StatusProp).props().propText).toBe('Active');
      expect(wrapper.find('.status-row').text()).toBe('Active');
  });

  it('should render the job completions', () => {
    expect(wrapper.find('.job-completions').text()).toContain('1');
  });

  it('should render the job parallelism', () => {
    expect(wrapper.find('.job-parallelism').text()).toContain('1');
  });

  it('should render the job duration', () => {
    expect(wrapper.find('.job-duration-time').text()).toContain('1 min, 40 sec');
  });

  it('should render the job start time', () => {
    expect(wrapper.find('.job-start-time').text()).toContain(
      DateTime.fromSeconds(1620211200).toRelative()
    );
  });

  it('should render the job completion time', () => {
    expect(wrapper.find('.job-completion-time').text()).toContain(
        DateTime.fromSeconds(1620211300).toRelative()
    );
  });
});

describe('JobRow unschedulable pods', () => {
  const baseJob = {
    name: 'unsched-job',
    Uuid: 'job-uid-1',
    failed: false,
    succeeded: false,
    terminationReasons: [],
    failureCondition: null,
    spec: {
      completions: 1,
      parallelism: 1,
      suspend: false,
    },
    status: {
      active: 1,
      failed: 0,
      startTime: DateTime.fromSeconds(1620211200).toISO(),
      completionTime: '',
    },
    durationInS: 30,
    withSidecarContainers: false,
  };

  it('renders Unschedulable status, attention label, and scheduler message when active pods cannot schedule', () => {
    const job = {
      ...baseJob,
      pods: [
        {
          metadata: { name: 'unsched-pod', namespace: 'sk8l', uid: 'pod-1' },
          phase: 'Pending',
          status: {
            phase: 'Pending',
            podIPs: [],
            containerStatuses: [],
            conditions: [
              {
                type: 'PodScheduled',
                status: 'False',
                reason: 'Unschedulable',
                message: '0/1 nodes are available: 1 Insufficient cpu.',
              },
            ],
          },
          spec: { initContainers: [] },
          failed: false,
          terminationReasons: [],
        },
      ],
    };

    const wrapper = mount(JobRow, { props: { job } });

    expect(wrapper.find('li').classes()).toContain('Box-row--attention');
    expect(wrapper.find('.status-row').text()).toBe('Unschedulable');
    expect(wrapper.find('.Label--attention').text()).toBe('Unschedulable');
    expect(wrapper.find('.job-unschedulable-condition').text()).toContain(
      'Unschedulable: 0/1 nodes are available: 1 Insufficient cpu.'
    );
  });

  it('keeps Active status when at least one pod is running alongside an unschedulable pod', () => {
    const job = {
      ...baseJob,
      pods: [
        {
          metadata: { name: 'running-pod', namespace: 'sk8l', uid: 'pod-1' },
          phase: 'Running',
          status: {
            phase: 'Running',
            podIPs: [],
            containerStatuses: [{ state: { running: { startedAt: '2026-11-18T12:00:00Z' } } }],
            conditions: [],
          },
          spec: { initContainers: [] },
          failed: false,
          terminationReasons: [],
        },
        {
          metadata: { name: 'unsched-pod', namespace: 'sk8l', uid: 'pod-2' },
          phase: 'Pending',
          status: {
            phase: 'Pending',
            podIPs: [],
            containerStatuses: [],
            conditions: [
              {
                type: 'PodScheduled',
                status: 'False',
                reason: 'Unschedulable',
                message: '0/1 nodes are available: 1 Insufficient cpu.',
              },
            ],
          },
          spec: { initContainers: [] },
          failed: false,
          terminationReasons: [],
        },
      ],
    };

    const wrapper = mount(JobRow, { props: { job } });

    expect(wrapper.find('li').classes()).toContain('Box-row--active');
    expect(wrapper.find('.status-row').text()).toBe('Active');
  });
});
