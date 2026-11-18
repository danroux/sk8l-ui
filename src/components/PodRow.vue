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

          <p class="color-fg-muted mb-0 wb-break-word" v-if="pod.unschedulableCondition">
            Status: {{ pod.unschedulableCondition.reason || 'Unschedulable' }}<br/>
            <span v-if="pod.unschedulableCondition.message">
              Message: {{ pod.unschedulableCondition.message }}
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="color-fg-muted f6 mt-2">
      <StatusProp :propText="status" />

      <span class="mr-2" v-if="pod.startTime"><Octicon name="sparkle-fill" /> {{ lux1(pod.startTime) }}</span>
      <span class="mr-2" v-if="pod.finishedAt"><Octicon name="goal" /> {{ lux1(pod.finishedAt) }}</span>
      <span class="mr-2" v-if="pod.nodeName"><Octicon name="apps" /> Node: {{ pod.nodeName }}</span>
      <span class="mr-2" v-if="pod.hostIP"><Octicon name="server" /> Host: {{ pod.hostIP }}</span>
      <span class="mr-2" v-if="pod.podIPs.length > 0"><Octicon name="globe" /> Pod Ips:  {{ pod.podIPs.join(", ") }}</span>
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
      if (this.pod.unschedulableCondition && this.pod.containerStatuses.length === 0) {
        return 'Unschedulable';
      }
      if (this.pod.containerStatuses.length === 0) {
        if (this.pod.failed || this.pod.phase === 'Failed') {
          return 'Failed';
        }
        return this.pod.phase || 'Pending';
      }

      const { state: statusState, reason: reason } = this.pod.containerStatuses[0];
      if (statusState === 'running' || statusState === 'waiting') {
        if (reason && reason.toLowerCase().includes('error')) {
          return 'Failing';
        }
        return 'Active';
      }
      if ((reason && reason.toLowerCase().includes('error')) || this.pod.failed) {
        return 'Failed';
      }
      if (reason == 'Completed') {
        return 'Succeeded';
      }
      return this.pod.phase || '';
    },
    jobStatusClass() {
      if (this.pod.unschedulableCondition && this.pod.containerStatuses.length === 0) {
        return 'Box-row--attention';
      }
      if (this.pod.containerStatuses.length === 0) {
        if (this.pod.failed || this.pod.phase === 'Failed') {
          return 'Box-row--danger';
        }
        return '';
      }
      const { state: statusState, reason } = this.pod.containerStatuses[0];
      if (statusState === 'running') {
        return 'Box-row--active';
      }
      if ((reason && reason.toLowerCase().includes('error')) || this.pod.failed) {
        return 'Box-row--danger';
      }
      if (reason === 'Completed') {
        return 'Box-row--success';
      }
      return '';
    },
  },
  methods: {
    lux1(t) {
      return DateTime.fromISO(t).toRelative();
    },
  },
  components: {
    PodModal,
    Octicon,
    StatusProp,
  },
};
</script>
