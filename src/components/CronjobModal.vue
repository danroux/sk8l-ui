<style scoped>
  button {
    border: 0px;
    line-height: 0px;
    padding: 0px 4px;
    float: right;
  }
</style>

<template>
  <ModalContainer :key="cronjob.name"
                  :show-modal="showCronjobModal"
                  :body="modalBody"
                  :modal-header="modalHeader"
                  @close-modal="closeCronjobModal()">
    <template #actionElement>
      <button type="button" class="btn btn-sm" name="button" @click="getCronjobYAML(cronjob.namespace, cronjob.name)" >
        <Octicon name="code-square" />
      </button>
    </template>
  </ModalContainer>
</template>

<script>
import Octicon from '@/components/Octicon.vue';
import ModalContainer from '@/components/ModalContainer.vue';

import { create } from "@bufbuild/protobuf";
import {CronjobRequestSchema,
       CronjobYAMLResponseSchema} from '@/components/protos/sk8l_pb.ts';
import Sk8lCronjobClient from '@/components/Sk8lCronjobClient.js';

export default {
  name: 'CronjobModal',
  props: ['cronjob'],
  data() {
    return {
      showCronjobModal: false,
      modalBody: "",
      modalHeader: "",
    };
  },
  methods: {
    getCronjobYAML: async function(namespace, name) {
      var request = create(CronjobRequestSchema, { cronjobName: name, cronjobNamespace: namespace });
      const that = this;

      await Sk8lCronjobClient.getCronjobYAML(
        request,
        (err, response) => {
          if (!err) {
            that.modalBody = response.cronjob;
            that.modalHeader = `Cronjob: ${name}`;
          } else {
            console.log(`Unexpected error for getPodYAML: code = ${err.code}` +
                        `, message = "${err.message}"`);
          }
        }
      );
      this.showCronjobModal = true;
    },
    closeCronjobModal() {
      this.showCronjobModal = false;
    },
  },
  components: {
    ModalContainer,
    Octicon,
  },
}
</script>
