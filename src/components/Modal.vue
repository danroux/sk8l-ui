<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" @click="$emit('close')">
      <div class="modal-container Box color-shadow-large" @click.stop>

        <div class="modal-header Box-header d-flex flex-items-center">
          <h3 class="Box-title flex-auto">
            <slot name="header">Modal Header</slot>
          </h3>
          <div class="d-flex flex-items-center">
            <slot name="headerActionContent"></slot>
            <button class="btn-octicon m-0 ml-2" type="button" @click="$emit('close')">
              <Octicon name="x" />
            </button>
          </div>
        </div>

        <div class="modal-body p-0">
          <slot name="body">
            <YamlViewer />
          </slot>
        </div>

        <div class="modal-footer Box-footer text-right">
          <slot name="footer">
            <button class="btn btn-primary" @click="$emit('close')">Close</button>
          </slot>
        </div>

      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import Octicon from '@/components/Octicon.vue';
import YamlViewer from '@/components/YamlViewer.vue';

defineProps<{
  show: boolean;
}>();

defineEmits(['close']);
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  padding: 20px;
}

.modal-container {
  width: 100%;
  max-width: 900px;
  margin: auto;
  background-color: var(--color-canvas-default);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  transition: all 0.3s ease;
}

.modal-body {
  margin: 0;
  flex: 1;
  overflow: hidden; /* YamlViewer handles its own scroll */
  display: flex;
}

/* Vue Transition Effects */
.modal-enter-from { opacity: 0; }
.modal-leave-to { opacity: 0; }

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.1);
}
</style>
