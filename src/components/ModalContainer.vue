<template>
  <slot name="actionElement">
    <button type="button" class="btn btn-sm" name="button" @click="clickAction">
      <Octicon name="code-square" />
    </button>
  </slot>

  <Teleport to="body">
    <Modal :show="showModal" @close="$emit('closeModal')">
      <template #header>
        <span>{{ modalHeader }}</span>
      </template>
      <template #headerActionContent>
        <slot name="headerActionContent"></slot>
      </template>
    </Modal>
  </Teleport>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Modal from '@/components/Modal.vue';
import Octicon from '@/components/Octicon.vue';

export default defineComponent({
  name: 'ModalContainer',
  components: {
    Modal,
    Octicon,
  },
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    modalHeader: {
      type: String,
      required: true,
    },
    headerActionContent: {
      type: String,
      required: false,
    },
  },
  emits: ['closeModal'],
  provide() {
    return {
      body: computed(() => this.body),
    };
  },
  methods: {
    clickAction() {
      // Stub method for the default slot button click, if needed
    }
  }
});
</script>
