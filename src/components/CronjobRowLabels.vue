<template>
  <!-- https://primer.style/css/components/labels#labels -->
  <span class="Label mr-1 Label--accent Label--inline" v-if="status == 'Active'">Active></span>
  <span class="Label mr-1 Label--success Label--inline" v-if="status == 'Succeeded'">Success</span>
  <span class="Label mr-1 Label--danger Label--inline" v-if="status == 'Failed'">Failed</span>
  <span class="Label mr-1 Label--danger Label--inline" v-if="status == 'Failing'">Failing</span>
</template>

<script>
export default {
  name: 'CronjobRowLabels',
  props: ['cronjob', 'status'],
  computed: {
    active(_vm) {
      return this.cronjob.active && !this.cronjob.failed;
    },
    suspended(_vm) {
      return this.cronjob.spec.suspend;
    },
    failed(_vm) {
      return this.cronjob.failed && !this.cronjob.active;
    },
    failing(_vm) {
      return this.cronjob.active && this.cronjob.failed;
    },
  },
};
</script>
