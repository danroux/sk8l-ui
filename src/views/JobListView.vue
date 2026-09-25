<template>
  <LogoHeader />

  <CronjobListHeader :namespace="namespace" />

  <div class="container-xl pt-3">
    <JobList :jobs="jobs" v-if="responseJobs()" />
    <RootBlankSlate v-else />
  </div>
</template>

<script>
import JobList from '@/components/JobList.vue';
import CronjobListHeader from '@/components/CronjobListHeader.vue';
import LogoHeader from '@/components/LogoHeader.vue';
import RootBlankSlate from '@/views/RootBlankSlate.vue';

import { create } from "@bufbuild/protobuf";
import { JobsRequestSchema } from '@/components/protos/sk8l_pb.ts';
import Sk8lCronjobClient from '@/components/Sk8lCronjobClient.js';
import { Code, ConnectError } from "@connectrpc/connect";

export default {
  name: 'JobListView',
  beforeRouteLeave(to, from) {
    this.cancelStream();
  },
  beforeUnmount() {
    this.cancelStream();
    window.removeEventListener('beforeunload', this.cancelStream);
  },
  data() {
    return {
      componentKey: 20,
      namespace: import.meta.env.VITE_SK8L_K8_NAMESPACE,
      jobs: [],
      stream: null,
    };
  },
  methods: {
    cancelStream() {
      if (typeof this.stream === 'function') {
        const cancel = this.stream;
        this.stream = null;
        cancel();
      }
    },
    responseJobs() {
      return this.jobs && this.jobs.length > 0;
    },
    getJobs(request) {
      return Sk8lCronjobClient.getJobs(
        request,
        (response, err) => {
          if (!err) {
            this.jobs = response.jobs;
          } else {
            console.log("requestErr: ", err, response);
          }
        },
        (err) => {
          if (err) {
            if (err instanceof ConnectError && err.code === Code.Canceled) {
              return;
            }
            console.log("onError: ", err);
          }
        }
      );
    },
  },
  mounted() {
    window.addEventListener('beforeunload', this.cancelStream);
    const request = create(JobsRequestSchema, {});
    this.stream = this.getJobs(request);
  },
  components: {
    CronjobListHeader,
    JobList,
    LogoHeader,
    RootBlankSlate,
  },
};
</script>
