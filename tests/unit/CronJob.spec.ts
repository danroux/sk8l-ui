import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import CronJob from '@/components/CronJob.vue';
import Sk8lCronjobClient from '@/components/Sk8lCronjobClient.ts';

vi.mock('@/components/Sk8lCronjobClient.ts', () => ({
  default: {
    getCronjob: vi.fn(),
  },
}));

const baseCronJob = () => ({
  name: 'unsched-cj',
  namespace: 'sk8l',
  definition: '*/5 * * * *',
  containerCommands: {
    InitContainers: { commands: [] },
    Containers: { commands: ['/bin/sh -c echo hi'] },
    EphemeralContainers: { commands: [] },
  },
  spec: {
    concurrencyPolicy: 'Forbid',
    startingDeadlineSeconds: 0,
    suspend: false,
    successfulJobsHistoryLimit: 3,
    failedJobsHistoryLimit: 1,
  },
  jobs: [],
  jobsPods: [],
  runningJobs: [],
  runningJobsPods: [],
});

describe('CronJob sidebar podSpec details', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders Resources and nodeSelector from cronJob.podSpec', async () => {
    const cronJobPayload = {
      ...baseCronJob(),
      podSpec: {
        nodeSelector: { disktype: 'ssd' },
        initContainers: [
          {
            name: 'init-check',
            resources: {
              requests: { cpu: '100m' },
              limits: {},
            },
          },
        ],
        containers: [
          {
            name: 'worker',
            resources: {
              requests: { cpu: '500m', memory: '256Mi' },
              limits: { cpu: '1', memory: '512Mi' },
            },
          },
        ],
      },
    };

    (Sk8lCronjobClient.getCronjob as ReturnType<typeof vi.fn>).mockImplementation(
      (_req: unknown, cb: (resp: unknown, err: unknown) => void) => {
        cb(cronJobPayload, null);
        return vi.fn();
      },
    );

    const wrapper = mount(CronJob, {
      props: { namespace: 'sk8l', name: 'unsched-cj' },
      global: {
        stubs: {
          LogoHeader: true,
          WiderHeader: true,
          Overview: true,
          Jobs: true,
        },
      },
    });
    await nextTick();

    expect(wrapper.text()).toContain('nodeSelector:');
    expect(wrapper.text()).toContain('disktype=ssd');
    expect(wrapper.text()).toContain('Resources');
    expect(wrapper.text()).toContain('init-check');
    expect(wrapper.text()).toContain('cpu=100m');
    expect(wrapper.text()).toContain('worker');
    expect(wrapper.text()).toContain('cpu=500m');
    expect(wrapper.text()).toContain('memory=256Mi');
    expect(wrapper.text()).toContain('cpu=1');
    expect(wrapper.text()).toContain('memory=512Mi');
  });

  it('omits Resources and nodeSelector when podSpec is missing', async () => {
    const cronJobPayload = baseCronJob();

    (Sk8lCronjobClient.getCronjob as ReturnType<typeof vi.fn>).mockImplementation(
      (_req: unknown, cb: (resp: unknown, err: unknown) => void) => {
        cb(cronJobPayload, null);
        return vi.fn();
      },
    );

    const wrapper = mount(CronJob, {
      props: { namespace: 'sk8l', name: 'unsched-cj' },
      global: {
        stubs: {
          LogoHeader: true,
          WiderHeader: true,
          Overview: true,
          Jobs: true,
        },
      },
    });
    await nextTick();

    expect(wrapper.text()).toContain('Spec');
    expect(wrapper.text()).not.toContain('Resources');
    expect(wrapper.text()).not.toContain('nodeSelector:');
  });
});
