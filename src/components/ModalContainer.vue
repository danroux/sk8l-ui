<template>
  <slot name="actionElement">
    <button type="button" class="btn btn-sm" name="button" @click="clickAction">
      <Octicon name="code-square" />
    </button>
  </slot>

  <Teleport to="body">
    <Modal :show="showModal" :lang="lang" @close="$emit('closeModal')">
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
    lang: {
      type: String,
      default: 'yaml',
    },
  },
  emits: ['closeModal'],
  data() {
    return {
      // Snapshot of body taken when the modal opens. Prevents streaming re-renders
      // from the parent reflashing or re-highlighting the open modal's content.
      displayedBody: '' as string,
    };
  },
  watch: {
    showModal: {
      immediate: true,
      handler(isOpen: boolean) {
        if (isOpen) {
          // Capture a snapshot of body at open time; ignore subsequent prop updates
          this.displayedBody = this.body;
        } else {
          // Reset on close so the next open always picks up fresh data
          this.displayedBody = '';
        }
      },
    },
    body(newBody: string) {
      if (this.showModal && (!this.displayedBody || this.displayedBody === '') && newBody) {
        this.displayedBody = newBody;
      }
    },
  },
  provide() {
    return {
      body: computed(() => this.displayedBody),
      lang: computed(() => this.lang || 'yaml'),
    };
  },
  methods: {
    clickAction() {
      // Stub method for the default slot button click, if needed
    },
  },
});

</script>
