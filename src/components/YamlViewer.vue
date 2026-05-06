<script setup lang="ts">
import { ref, onMounted, watch, inject, type Ref } from 'vue';
import { createHighlighter, type Highlighter } from 'shiki';

const body = inject<Ref<string>>('body');
const highlightedHtml = ref('<div class="p-3">Initializing highlighter...</div>');
let highlighter: Highlighter | null = null;

const initHighlighter = async () => {
  if (highlighter) return;
  highlighter = await createHighlighter({
    themes: ['github-light'],
    langs: ['yaml'],
  });
};

const updateHighlight = () => {
  if (highlighter && body?.value) {
    highlightedHtml.value = highlighter.codeToHtml(body.value, {
      lang: 'yaml',
      theme: 'github-light'
    });
  } else if (!body?.value) {
    highlightedHtml.value = '<div class="p-3 text-gray-light">No content available.</div>';
  }
};

onMounted(async () => {
  await initHighlighter();
  updateHighlight();
});

// Re-highlight if the user switches pods/jobs while the modal is open
watch(() => body?.value, () => {
  updateHighlight();
});
</script>

<template>
  <div class="yaml-viewer-wrapper">
    <div v-html="highlightedHtml" class="shiki-container"></div>
  </div>
</template>

<style>
.yaml-viewer-wrapper {
  width: 100%;
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border-default, #d0d7de);
  border-radius: 6px;
}

.shiki-container {
  overflow: auto;
  flex: 1;
}

.shiki-container pre {
  margin: 0;
  padding: 1rem;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, monospace;
  font-size: 13px;
  line-height: 1.5;
  background-color: transparent !important;
  counter-reset: step;
  counter-increment: step 0;
}

.shiki-container pre code .line::before {
  content: counter(step);
  counter-increment: step;
  width: 1rem;
  margin-right: 1.5rem;
  display: inline-block;
  text-align: right;
  color: #8c959f; /* GitHub Light muted text color */
  user-select: none;
}
</style>
