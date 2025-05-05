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
        suspend: false,
        template: {
          spec: {
              initContainers: [1,2],
          },
        }
      },
      status: {
        active: 1,
        succeeded: true,
        startTime: { seconds: 1620211200 },
        completionTime: { seconds: 1620211300 },
      },
      pods: [],
      durationInS: 100,
      succeeded: false,
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
