<template>
  <LogoHeader />

  <div v-if="cronjob">
    <WiderHeader :cronjob="cronjob" :pods="pods" />

    <div class="container-xl clearfix mb-4">
      <JobPodList :job-pods="pods" :cronjob="cronjob" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LogoHeader from '@/components/LogoHeader.vue';
import JobPodList from '@/components/JobPodList.vue';
import RootBlankSlate from '@/views/RootBlankSlate.vue';
import WiderHeader from '@/components/WiderHeader.vue';
// import axios, { isCancel, AxiosError } from 'axios';

import { create } from "@bufbuild/protobuf";
import { CronjobPodsRequestSchema } from '@/components/protos/sk8l_pb.ts';
import Sk8lCronjobClient from '@/components/Sk8lCronjobClient.js';
import { Code, ConnectError } from "@connectrpc/connect";

export default {
  name: 'JobPodListView',
  props: ['namespace', 'cronjobName'],
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
      pods: [],
      cronjob: null,
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
    responseJobPods() {
      return this.pods && this.pods.length > 0;
    },
    getCronjobPods(request) {
      return Sk8lCronjobClient.getCronjobPods(
        request,
        (response, err) => {
          if (!err) {
            this.pods = response.pods.reverse();
            this.cronjob = response.cronjob;
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
    const request = create(CronjobPodsRequestSchema, { cronjobName: this.cronjobName, cronjobNamespace: this.namespace });
    this.stream = this.getCronjobPods(request);
  },
  components: {
    LogoHeader,
    JobPodList,
    RootBlankSlate,
    WiderHeader,
  },
};
</script>
