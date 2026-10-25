<template>
<div class="mb-3 dashboard-changelog color-bg-default border color-border-muted p-3 rounded-2"
     id="jobs-timeline"
     v-if="sortedPods.length > 0">
  <h2 class="f5 text-bold mb-3">Latest completions</h2>

  <ul class="list-style-none">
    <li class="TimelineItem TimelineItem--condensed ml-1 pt-0 pb-3 completed-job" v-for="pod in sortedPods">
      <div class="TimelineItem-badge mt-0 color-bg-transparent">
        <Octicon name="dot-fill" />
      </div>

      <div class="TimelineItem-body mt-n1" v-if="pod.finishedAt">
        <div class="text-small color-fg-muted dashboard-changelog-timestamp">
          <RelativeTime :target="pod.finishedAt" />
        </div>
        <span>{{ pod.pod.metadata ? pod.pod.metadata.name : '' }}</span>
      </div>
    </li>
  </ul>

</div>
</template>

<script>
import Octicon from '@/components/Octicon.vue';
import RelativeTime from '@/components/RelativeTime.vue';

export default {
  name: 'JobsTimeline',
  props: ['jobs'],
  methods: {
    podFinishedAt(pod, job) {
      if (pod?.FinishedAt) return pod.FinishedAt;
      if (pod?.finishedAt) return pod.finishedAt;
      if (job?.status?.completionTime) return job.status.completionTime;
      const term = pod?.status?.containerStatuses?.find((c) => c?.state?.terminated?.finishedAt);
      if (term?.state?.terminated?.finishedAt) {
        return term.state.terminated.finishedAt;
      }
      if (pod?.status?.startTime) return pod.status.startTime;
      return null;
    },
  },
  computed: {
    pods(_vm) {
      let pods = [];

      this.jobs.forEach((job) => {
        (job.pods || []).forEach((pod) => {
          const finishedAt = this.podFinishedAt(pod, job);
          if (finishedAt) {
            let podItem = {
              pod: pod,
              job: job,
              finishedAt: finishedAt,
            };
            pods.push(podItem);
          }
        });
      });

      return pods;
    },
    sortedPods() {
      const parseTime = (t) => {
        if (!t) return 0;
        if (typeof t === 'number') return t;
        const parsed = Date.parse(t);
        return isNaN(parsed) ? Number(t) || 0 : parsed;
      };

      return this.pods.toSorted((a, b) => {
        return parseTime(b.finishedAt) - parseTime(a.finishedAt);
      }).slice(0, 20);
    },
  },
  components: {
    Octicon,
    RelativeTime,
  },
};
</script>
