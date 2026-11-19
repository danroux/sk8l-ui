import { mount } from '@vue/test-utils';
import PodRow from '@/components/PodRow.vue';
import PodsGenerator from '@/components/PodsGenerator';

describe('PodRow', () => {
  it('renders Unschedulable status and message without crashing when containerStatuses is empty', () => {
    const wrapped = PodsGenerator.pods([
      {
        metadata: {
          name: 'unsched-pod',
          namespace: 'sk8l',
          uid: 'pod-uid-1',
          labels: { 'batch.kubernetes.io/job-name': 'unsched-job' },
        },
        phase: 'Pending',
        status: {
          phase: 'Pending',
          startTime: '',
          hostIP: '',
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
        spec: { nodeName: '' },
        failed: false,
        terminationReasons: [],
      },
    ]);

    const wrapper = mount(PodRow, {
      props: { pod: wrapped[0] },
      global: { stubs: { PodModal: true } },
    });

    expect(wrapper.find('li').classes()).toContain('Box-row--attention');
    expect(wrapper.find('.status-row').text()).toBe('Unschedulable');
    expect(wrapper.find('.item-pop--attention').exists()).toBe(true);
    expect(wrapper.text()).toContain('Status: Unschedulable');
    expect(wrapper.text()).toContain('Message: 0/1 nodes are available: 1 Insufficient cpu.');
    expect(wrapper.text()).not.toContain('Node:');
    expect(wrapper.text()).not.toContain('Host:');
    expect(wrapper.text()).not.toContain('Pod Ips:');
  });

  it('falls back to Pending when containerStatuses is empty without an Unschedulable condition', () => {
    const wrapped = PodsGenerator.pods([
      {
        metadata: { name: 'pending-pod', namespace: 'sk8l', uid: 'pod-uid-2' },
        phase: 'Pending',
        status: {
          phase: 'Pending',
          podIPs: [],
          containerStatuses: [],
          conditions: [],
        },
        spec: {},
        failed: false,
        terminationReasons: [],
      },
    ]);

    const wrapper = mount(PodRow, {
      props: { pod: wrapped[0] },
      global: { stubs: { PodModal: true } },
    });

    expect(wrapper.find('.status-row').text()).toBe('Pending');
    expect(wrapper.find('li').classes()).not.toContain('Box-row--attention');
  });

  it('renders Active and Box-row--active for running containers', () => {
    const wrapped = PodsGenerator.pods([
      {
        metadata: { name: 'running-pod', namespace: 'sk8l', uid: 'pod-uid-3' },
        phase: 'Running',
        status: {
          phase: 'Running',
          startTime: '2026-11-18T12:00:00Z',
          hostIP: '10.0.0.1',
          podIPs: ['10.0.0.2'],
          containerStatuses: [
            {
              name: 'worker',
              state: { running: { startedAt: '2026-11-18T12:00:01Z' } },
            },
          ],
          conditions: [],
        },
        spec: { nodeName: 'node-1' },
        failed: false,
        terminationReasons: [],
      },
    ]);

    const wrapper = mount(PodRow, {
      props: { pod: wrapped[0] },
      global: { stubs: { PodModal: true } },
    });

    expect(wrapper.find('.status-row').text()).toBe('Active');
    expect(wrapper.find('li').classes()).toContain('Box-row--active');
  });
});
