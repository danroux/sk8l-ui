import PodsGenerator from '@/components/PodsGenerator';

describe('PodsGenerator', () => {
  it('preserves phase, PodScheduled=False condition, and batch job-name label for unscheduled pods', () => {
    const pendingPod = {
      metadata: {
        name: 'unsched-pod-1',
        namespace: 'sk8l',
        uid: 'pod-uid-1',
        labels: {
          'batch.kubernetes.io/job-name': 'unsched-job',
        },
      },
      phase: 'Pending',
      status: {
        phase: 'Pending',
        startTime: '',
        podIPs: [],
        containerStatuses: [],
        initContainerStatuses: [],
        ephemeralContainerStatuses: [],
        conditions: [
          {
            type: 'PodScheduled',
            status: 'False',
            reason: 'Unschedulable',
            message: '0/1 nodes are available: 1 Insufficient cpu.',
          },
        ],
      },
      spec: {
        nodeName: '',
        initContainers: [],
      },
      failed: false,
      terminationReasons: [],
    };

    const runningPod = {
      metadata: {
        name: 'running-pod-1',
        namespace: 'sk8l',
        uid: 'pod-uid-2',
        labels: {
          'job-name': 'running-job',
        },
      },
      phase: 'Running',
      status: {
        phase: 'Running',
        startTime: '2026-11-18T12:00:00Z',
        podIPs: ['10.0.0.2'],
        containerStatuses: [
          {
            name: 'worker',
            state: {
              running: { startedAt: '2026-11-18T12:00:01Z' },
            },
          },
        ],
        initContainerStatuses: [],
        ephemeralContainerStatuses: [],
        conditions: [
          {
            type: 'PodScheduled',
            status: 'True',
          },
        ],
      },
      spec: {
        nodeName: 'node-1',
        initContainers: [],
      },
      failed: false,
      terminationReasons: [],
    };

    const result = PodsGenerator.pods([pendingPod, runningPod]);

    expect(result).toHaveLength(2);
    expect(result[0].jobName).toBe('unsched-job');
    expect(result[0].phase).toBe('Pending');
    expect(result[0].containerStatuses).toEqual([]);
    expect(result[0].started).toEqual([]);
    expect(result[0].unschedulableCondition).toEqual({
      type: 'PodScheduled',
      status: 'False',
      reason: 'Unschedulable',
      message: '0/1 nodes are available: 1 Insufficient cpu.',
    });

    expect(result[1].jobName).toBe('running-job');
    expect(result[1].unschedulableCondition).toBeUndefined();
    expect(result.unschedulablePods).toHaveLength(1);
    expect(result.unschedulablePods[0].name).toBe('unsched-pod-1');
  });
});
