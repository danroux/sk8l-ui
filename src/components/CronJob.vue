<style scoped>
.BorderGrid {
  display: table;
  width: 100%;
  margin-top: -16px;
  margin-bottom: -16px;
  table-layout: fixed;
  border-collapse: collapse;
  border-style: hidden;
}

.BorderGrid-row {
  display: table-row;
}

.BorderGrid-cell {
  display: table-cell;
  border: 1px solid rgb(214,207,222);
}

.BorderGrid--spacious {
  margin-top: -24px;
  margin-bottom: -24px;
}

.BorderGrid--spacious .BorderGrid-cell {
  padding-top: 24px;
  padding-bottom: 24px;
}
</style>

<template>
  <!-- eslint-disable -->
  <LogoHeader />

  <div v-if="cronJob">
    <WiderHeader :cronjob="cronJob" :pods="cronJob.jobsPods" />

    <div class="container-xl clearfix px-md-4 px-lg-5 px-3 mt-4">
      <Overview class="pb-1" :cronJob="cronJob" />

      <div class="gutter-condensed gutter-lg width-full flex-column flex-md-row d-flex mb-5">
        <div class="flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0">
          <div class="container-xl clearfix py-3" v-if="cronJob">
            <Jobs :jobs="cronJob.jobs" />
          </div>
        </div>

        <div class="flex-shrink-0 col-12 col-md-3">
          <div class="BorderGrid BorderGrid--spacious">
            <div class="BorderGrid-row">
              <div class="BorderGrid-cell">
                <h2 class="h4 mt-3 mb-2">Schedule</h2>
                <div class="text-small color-fg-muted">
                  <Octicon name="clock" class="mr-1" /> {{ schedule(cronJob.definition) }}
                </div>
              </div>
            </div>

            <div class="BorderGrid-row" v-if="initContainerCommands.length > 0">
              <div class="BorderGrid-cell">
                <h2 class="f4 mb-2">Init Container Commands</h2>
                <div class="text-small color-fg-muted my-2" v-for="(command, index) in initContainerCommands">
                  <Octicon name="triangle-right" class="mr-1" />{{ command }}
                </div>
              </div>
            </div>

            <div class="BorderGrid-row" v-if="containerCommands.length > 0">
              <div class="BorderGrid-cell">
                <h2 class="f4 mb-2">Container Commands</h2>
                <div class="text-small color-fg-muted my-2" v-for="(command, index) in containerCommands">
                  <Octicon name="triangle-right" class="mr-1" />{{ command }}
                </div>
              </div>
            </div>

            <div class="BorderGrid-row" v-if="ephemeralCommands.length > 0">
              <div class="BorderGrid-cell">
                <h2 class="f4 mb-2">Ephemeral Commands</h2>
                <div class="text-small color-fg-muted my-2" v-for="(command, index) in ephemeralCommands">
                  <Octicon name="triangle-right" class="mr-1" />{{ command }}
                </div>
              </div>
            </div>

            <div class="BorderGrid-row">
              <div class="BorderGrid-cell">
                <h2 class="f4 mb-2">Spec</h2>
                <div class="text-small color-fg-muted">
                  <Octicon :name="specIcon" class="mr-1" /> Completions {{ cronJob.spec.jobTemplate.spec.completions || "1" }}
                </div>
                <div class="text-small color-fg-muted mt-2">
                  <Octicon :name="specIcon" class="mr-1" /> Parallelism {{ cronJob.spec.jobTemplate.spec.parallelism || "1" }}
                </div>
                <div class="text-small color-fg-muted mt-2">
                  <Octicon :name="specIcon" class="mr-1" /> concurrencyPolicy {{ cronJob.spec.concurrencyPolicy }}
                </div>
                <div class="text-small color-fg-muted mt-2">
                  <Octicon :name="specIcon" class="mr-1" /> startingDeadlineSeconds {{ cronJob.spec.startingDeadlineSeconds }}
                </div>
                <div class="text-small color-fg-muted mt-2">
                  <Octicon :name="specIcon" class="mr-1" /> suspend {{ cronJob.spec.suspend }}
                </div>
                <div class="text-small color-fg-muted mt-2">
                  <Octicon :name="specIcon" class="mr-1" /> successfulJobsHistoryLimit {{ cronJob.spec.successfulJobsHistoryLimit }}
                </div>
                <div class="text-small color-fg-muted mt-2">
                  <Octicon :name="specIcon" class="mr-1" /> failedJobsHistoryLimit {{ cronJob.spec.failedJobsHistoryLimit }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
// npm install --save luxon
import { DateTime } from 'luxon';
import Overview from '@/components/Overview.vue';
// import Chart from '@/components/Chart.vue';
import Jobs from '@/components/Jobs.vue';
import CronjobList from '@/components/CronjobList.vue';
import LogoHeader from '@/components/LogoHeader.vue';
import Octicon from '@/components/Octicon.vue';
import WiderHeader from '@/components/WiderHeader.vue';
import cronstrue from 'cronstrue';

import { create } from "@bufbuild/protobuf";
import {CronjobRequestSchema,
       CronjobResponseSchema} from '@/components/protos/sk8l_pb.ts';
import Sk8lCronjobClient from '@/components/Sk8lCronjobClient.js';

export default {
  name: 'CronJob',
  // beforeRouteEnter(to, from, next) {
  //   next((vm) => {
  //     vm.getData(vm);
  //     // vm.cronJobIntervalId = setInterval(vm.getData, 10000);
  //   });
  // },
  beforeRouteLeave(to, from) {
    // called when the route that renders this component is about to be navigated away from.
    this.stream();
  },
  data() {
    return {
      cronJob: null,
      cronJobs: [],
    };
  },
  props: ['namespace', 'name'],
  computed: {
    commands(vm) {
      return vm.cronJob.containerCommands;
    },
    initContainerCommands(vm) {
      return vm.commands["InitContainers"].commands;
    },
    containerCommands(vm) {
      return vm.commands["Containers"].commands;
    },
    ephemeralCommands(vm) {
      return vm.commands["EphemeralContainers"].commands;
    },
    specIcon(_vm) {
        return "chevron-right";
    },
  },
  methods: {
    lux1(t) {
      return DateTime.fromISO(t).toRelative();
    },
    schedule() {
      return cronstrue.toString(this.cronJob.definition);
    },
    getCronjob(app, request) {
      let str = Sk8lCronjobClient.getCronjob(
        request,
        (response, err) => {
          if (!err) {
            app.cronJob = response;
          } else {
            console.log("requestErr: ", err, response);
          }
        },
        (err) => {
          if (err) {
            console.log("onError: ", err);
          }
        }
      );

      return str;
    },
    leaving(event) {
      // window.addEventListener('beforeunload', this.handler)
      // https://laracasts.com/discuss/channels/vue/detect-page-refreshchange-in-vue
      // window.onblur = this.leaving;
      this.stream();
    }
  },
  mounted() {
    window.onbeforeunload = this.leaving;
    var request = create(CronjobRequestSchema, { cronjobName: this.name, cronjobNamespace: this.namespace});
    const app = this;

    app.stream = this.getCronjob(app, request);
  },
  components: {
    // Chart,
    Overview,
    Jobs,
    LogoHeader,
    Octicon,
    WiderHeader,
  },
};
</script>
