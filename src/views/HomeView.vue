<template>
  <LogoHeader />

  <CronjobListHeader :namespace="namespace" />

  <div class="container-xl pt-3">
    <CronjobList :cron-jobs="cronjobs" v-if="responseCronJobs()" />
    <RootBlankSlate v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import CronjobList from '@/components/CronjobList.vue';
import CronjobListHeader from '@/components/CronjobListHeader.vue';
import LogoHeader from '@/components/LogoHeader.vue';
import RootBlankSlate from '@/views/RootBlankSlate.vue';

import { create } from "@bufbuild/protobuf";
import { CronjobsRequestSchema } from '@/components/protos/sk8l_pb.ts';
import Sk8lCronjobClient from '@/components/Sk8lCronjobClient.js';
import { Code, ConnectError } from "@connectrpc/connect";

export default {
  name: 'HomeView',
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
      cronjobs: [],
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
    responseCronJobs() {
      return this.cronjobs && this.cronjobs.length > 0;
    },
    getCronjobs(request) {
      return Sk8lCronjobClient.getCronjobs(
        request,
        (response, err) => {
          if (!err) {
            this.cronjobs = response.cronjobs;
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
    const request = create(CronjobsRequestSchema, {});
    this.stream = this.getCronjobs(request);
  },
  components: {
    CronjobList,
    CronjobListHeader,
    LogoHeader,
    RootBlankSlate,
  },
};
</script>
