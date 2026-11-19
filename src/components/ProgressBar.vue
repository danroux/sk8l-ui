<template>
  <span class="Progress Progress--large" v-if="show">
    <span class="Progress-item color-bg-success-emphasis" :style="success" v-if="pctgs.success > 0"></span>
    <span class="Progress-item color-bg-danger-emphasis" :style="failed" v-if="pctgs.failed > 0"></span>
    <span class="Progress-item color-bg-attention-emphasis" :style="unschedulable" v-if="pctgs.unschedulable > 0"></span>
    <span class="Progress-item color-bg-accent-emphasis" :style="active" v-if="pctgs.active > 0"></span>
  </span>
  <span class="Progress" v-else>
    <span class="Progress-item"></span>
  </span>

  <div class="mt-2" v-if="text">
    <span class="mr-1" style="margin-left:-2px;">
      <Octicon name="dot-fill" custom-class="color-fg-success" />
      <span class="color-fg-muted">Success</span> {{ success.width }}
    </span>

    <span class="mr-1">
      <Octicon name="dot-fill" custom-class="color-fg-accent" />
      <span class="color-fg-muted">Active</span> {{ active.width }}
    </span>

    <span class="mr-1" v-if="pctgs.unschedulable > 0">
      <Octicon name="dot-fill" custom-class="color-fg-attention" />
      <span class="color-fg-muted">Unschedulable</span> {{ unschedulable.width }}
    </span>    

    <span class="mr-1">
      <Octicon name="dot-fill" custom-class="color-fg-danger" />
      <span class="color-fg-muted">Failed</span> {{ failed.width }}
    </span>
  </div>
</template>

<script>
import Octicon from '@/components/Octicon.vue';
import PodsGenerator from '@/components/PodsGenerator.js';

export default {
  name: 'ProgressBar',
  props: ['cronJob', 'text'],
  computed: {
    pctgs(_vm) {
      const container = {
        success: 0,
        failed: 0,
        unschedulable: 0,
        active: 0,
      };

      this.cronJob.jobs.forEach((job) => {
        if (job.succeeded) {
          container.success += 100;
        } else if (job.status.failed > 0 || job.failed) {
          container.failed += 100;
        } else if (PodsGenerator.isJobUnschedulable(job)) {
          container.unschedulable += 100;
        } else if (job.status.active > 0) {
          container.active += 100;
        }
      });

      const jobsLength = this.cronJob.jobs.length;
      container.success = Math.round(container.success / jobsLength) || 0;
      container.unschedulable = Math.round(container.unschedulable / jobsLength) || 0;
      container.active = Math.round(container.active / jobsLength) || 0;
      container.failed = Math.round(container.failed / jobsLength) || 0;

      return container;
    },
    active(_vm) {
      return { width: `${this.pctgs.active}%` };
    },
    unschedulable() {
      return { width: `${this.pctgs.unschedulable}%` };
    },    
    success(_vm) {
      return { width: `${this.pctgs.success}%` };
    },
    failed(_vm) {
      return { width: `${this.pctgs.failed}%` };
    },
    show(_vm) {
      return this.cronJob.jobs.length > 0;
    },
  },
  components: {
    Octicon,
  },
};
</script>
