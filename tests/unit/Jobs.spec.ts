import { shallowMount } from '@vue/test-utils';
import Jobs from '@/components/Jobs.vue';
import JobRow from '@/components/JobRow.vue';

describe('Jobs', () => {
  it('renders "No Job info available yet" when jobs is empty', () => {
    const wrapper = shallowMount(Jobs, {
      props: {
        jobs: [],
      },
    });
    expect(wrapper.text()).toContain('No Job info available yet');
  });

  it('renders active jobs on top before completed jobs', () => {
    const completedOld = {
      name: 'job-completed-old',
      status: {
        active: 0,
        startTime: '2026-10-24T10:00:00Z',
        completionTime: '2026-10-24T10:05:00Z',
      },
    };

    const completedRecent = {
      name: 'job-completed-recent',
      status: {
        active: 0,
        startTime: '2026-10-24T11:00:00Z',
        completionTime: '2026-10-24T11:05:00Z',
      },
    };

    const activeJob = {
      name: 'job-active-running',
      status: {
        active: 1,
        startTime: '2026-10-24T11:10:00Z',
        completionTime: '',
      },
    };

    const wrapper = shallowMount(Jobs, {
      props: {
        jobs: [completedOld, completedRecent, activeJob],
      },
    });

    const rows = wrapper.findAllComponents(JobRow);
    expect(rows).toHaveLength(3);
    const renderedNames = rows.map((r: any) => r.props('job').name);
    expect(renderedNames).toEqual([
      'job-active-running',
      'job-completed-recent',
      'job-completed-old',
    ]);
  });

  it('sorts multiple active jobs by startTime descending (newest first)', () => {
    const activeOlder = {
      name: 'job-active-older',
      status: {
        active: 1,
        startTime: '2026-10-24T11:00:00Z',
      },
    };

    const activeNewer = {
      name: 'job-active-newer',
      status: {
        active: 1,
        startTime: '2026-10-24T11:15:00Z',
      },
    };

    const wrapper = shallowMount(Jobs, {
      props: {
        jobs: [activeOlder, activeNewer],
      },
    });

    const rows = wrapper.findAllComponents(JobRow);
    const renderedNames = rows.map((r: any) => r.props('job').name);
    expect(renderedNames).toEqual(['job-active-newer', 'job-active-older']);
  });
});
