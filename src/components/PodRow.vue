<template>
  <li class="Box-row Box-row--hover-gray" :class="jobStatusClass">
    <div class="d-flex flex-items-center">
      <div class="flex-auto">
        <div>
          <PodModal :pod="pod" />
        </div>
        <div>
          <strong>{{ pod.name }}</strong> <br/>
          <p class="color-fg-muted mb-0 wb-break-word">
            Job: {{ pod.jobName }}<br/>
            Uuid: {{ pod.uid }}
          </p>

          <p class="color-fg-muted mb-0 wb-break-word" v-for="(tr, index) in pod.terminationReasons">
            Error: {{ tr.terminationDetails.reason }} - {{ tr.terminationDetails.exitCode }}<br/>
            <span v-if="tr.terminationDetails.message">
              Message: {{ tr.terminationDetails.message }}<br/>
            </span>
            <span class="termination-reason-container">Container: {{ tr.containerName }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="color-fg-muted f6 mt-2">
      <StatusProp :propText="status" />

      <span class="mr-2"><Octicon name="sparkle-fill" /> {{ luxs(pod.startTime) }}</span>
      <span class="mr-2" v-if="pod.finishedAt"><Octicon name="goal" /> {{ luxs(Number(pod.finishedAt.seconds)) }}</span>
      <span class="mr-2"><Octicon name="apps" /> Node: {{ pod.nodeName }}</span>
      <span class="mr-2"><Octicon name="server" /> Host: {{ pod.hostIP }}</span>
      <span class="mr-2"><Octicon name="globe" /> Pod Ips: {{ pod.podIPs.join((x) => `${x}, `) }}</span>
    </div>
  </li>
</template>

<script>
import { DateTime } from 'luxon';
import PodModal from '@/components/PodModal.vue';
import Octicon from '@/components/Octicon.vue';
import StatusProp from '@/components/StatusProp.vue';

export default {
  name: 'PodRow',
  props: ['pod'],
  computed: {
    status(_vm) {
      const { state: statusState, reason: reason } = this.pod.containerStatuses[0];
      const statusKey = statusState;
      if (statusKey === 'running' || statusKey == 'waiting') {
        if (reason && reason.toLowerCase().includes('error')) {
          return 'Failing';
        }

        return 'Active';
      }
      if (reason && reason.toLowerCase().includes('error') || this.pod.failed) {
        return 'Failed';
      }
      if (reason && reason == 'Completed') {
        return 'Succeeded';
      }
    },
    jobStatusClass(vm) {
      const { state: statusState, reason: reason } = this.pod.containerStatuses[0];
      const statusKey = statusState[0];

      if (statusKey === 'running') {
        return 'Box-row--active';
      }
      if (reason && reason.toLowerCase().includes('error') || this.pod.failed) {
        return 'Box-row--danger';
      }
      if (reason == 'Completed') {
        return 'Box-row--success';
      }
    },
  },
  methods: {
    luxs(t) {
      return DateTime.fromSeconds(t).toRelative();
    },
  },
  components: {
    PodModal,
    Octicon,
    StatusProp,
  },
};
</script>
