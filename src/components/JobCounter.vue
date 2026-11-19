<template>
  <span class="Counter Counter--gray-dark">{{ jobs.length }}</span>
  <span class="Counter mr-1 color-bg-success-emphasis color-fg-on-emphasis">{{ succeeded }}</span>
  <span class="Counter mr-1 color-bg-accent-emphasis color-fg-on-emphasis">{{ active }}</span>
  <span v-if="unschedulable > 0"
        class="Counter mr-1 color-bg-attention-emphasis color-fg-on-emphasis">{{ unschedulable }}</span>
  <span class="Counter mr-1 color-bg-danger-emphasis color-fg-on-emphasis">{{ failed }}</span>
</template>

<script>
import PodsGenerator from '@/components/PodsGenerator.js';

export default {
  name: 'JobCounter',
  props: ['jobs'],
  computed: {
    jobsByStatus() {
      const m = {
        active: 0,
        succeeded: 0,
        unschedulable: 0,
        failed: 0,
      };

      this.jobs.forEach((job) => {
        if (job.succeeded) {
          m.succeeded += 1;
        } else if (job.status.failed > 0 || job.failed) {
          m.failed += 1;
        } else if (PodsGenerator.isJobUnschedulable(job)) {
          m.unschedulable += 1;
        } else if (job.status.active > 0) {
          m.active += 1;
        }
      });

      return m;
    },
    succeeded() {
      return this.jobsByStatus.succeeded;
    },
    failed() {
      return this.jobsByStatus.failed;
    },
    unschedulable() {
      return this.jobsByStatus.unschedulable;
    },    
    active() {
      return this.jobsByStatus.active;
    },
  },
};
</script>
