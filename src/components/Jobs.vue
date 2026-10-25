<template>
  <div class="Box">
    <div class="Box-header">
      <div class="d-table col-12" style="padding: 0px;">
        <div class="col-11 d-table-cell" style="padding-left: 0px;">
          <h3 class="Box-title">
            Jobs <JobCounter :jobs="jobs" />
          </h3>
        </div>

      </div>
    </div>

    <div class="Box-body" v-if="jobs.length == 0">
      No Job info available yet
    </div>

    <ul>
      <JobRow v-for="(job, index) in sortedJobs"
              :key="job.name"
              :job="job" />
    </ul>
  </div>
</template>

<script>
import JobRow from '@/components/JobRow.vue';
import JobCounter from '@/components/JobCounter.vue';

export default {
  name: 'Jobs',
  props: ['jobs'],
  computed: {
    sortedJobs() {
      if (!this.jobs || this.jobs.length === 0) return [];
      const parseTime = (t) => (t ? Date.parse(t) || 0 : 0);
      const isActive = (j) => Boolean(j?.status?.active > 0);

      const jobsCopy = [...this.jobs];
      return jobsCopy.sort((a, b) => {
        const aActive = isActive(a);
        const bActive = isActive(b);

        if (aActive && !bActive) return -1;
        if (!aActive && bActive) return 1;

        if (aActive && bActive) {
          const aStart = a?.status?.startTime || a?.creationTimestamp;
          const bStart = b?.status?.startTime || b?.creationTimestamp;
          return parseTime(bStart) - parseTime(aStart);
        }

        const aTime = a?.status?.completionTime || a?.status?.startTime || a?.creationTimestamp;
        const bTime = b?.status?.completionTime || b?.status?.startTime || b?.creationTimestamp;
        return parseTime(bTime) - parseTime(aTime);
      });
    },
  },
  components: {
    JobRow,
    JobCounter,
  },
};
</script>
