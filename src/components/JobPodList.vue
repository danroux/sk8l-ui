<template>
  <div class="Box">
    <div class="Box-header">
      <div class="d-table col-12" style="padding: 0px;">
        <div class="col-11 d-table-cell" style="padding-left: 0px;">
          <h3 class="Box-title">
            Pods {{ cronjob.Name }}
            <PodCounter :job-pods="jobsPods" />
          </h3>
        </div>

      </div>
    </div>

    <div class="Box-body" v-if="jobPods.length == 0">
      No Pod info available yet
    </div>

    <ul>
      <PodRow v-for="(jobPod, index) in jobsPods"
              :key="jobPod.name"
              :pod="jobPod" />
    </ul>
  </div>
</template>

<script>
import PodRow from '@/components/PodRow.vue';
import PodsGenerator from '@/components/PodsGenerator.js';
import PodCounter from '@/components/PodCounter.vue';

export default {
  name: 'JobPodList',
  props: ['jobPods', 'cronjob'],
  setup() {
    return {
      PodsGenerator,
    };
  },
  computed: {
    jobsPods(vm) {
      return PodsGenerator.pods(vm.jobPods);
    },
  },
  components: {
    PodCounter,
    PodRow,
  },
};
</script>
