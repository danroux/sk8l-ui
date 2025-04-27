<template>
  <!-- https://primer.style/css/components/labels#labels -->
  <span class="Label mr-1 Label--accent Label--inline" v-if="status == 'Active'">Active</span>
  <span class="Label mr-1 Label--success Label--inline" v-if="status == 'Succeeded'">Success</span>
  <span class="Label mr-1 Label--danger Label--inline" v-if="status == 'Failed'">Failed</span>
  <span class="Label mr-1 Label--danger Label--inline" v-if="status == 'Failing'">Failing</span>
  <span class="Label mr-1 Label--done Label--inline" v-if="job.succeeded">Done</span>
  <span class="Label mr-1 Label--danger Label--inline" v-if="status == 'Failed'">Done</span>
</template>

<script>
export default {
  name: 'BoxRow',
  props: ['job', 'status'],
  computed: {
    active(_vm) {
      return this.job.status.active > 0 && !(this.job.status.failed > 0 || this.job.failed);
    },
    failed(_vm) {
      return this.job.status.failed > 0;
    },
    failing(_vm) {
      return this.job.status.active > 0 && (this.job.status.failed > 0 || this.job.failed);
    },
  },
};
</script>
