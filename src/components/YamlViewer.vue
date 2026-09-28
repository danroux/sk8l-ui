<script setup lang="ts">
import { ref, onMounted, watch, inject, computed, type Ref } from 'vue';
import { getHighlighter } from '@/utils/highlighter';

const props = withDefaults(defineProps<{
  lang?: string;
}>(), {
  lang: undefined,
});

const body = inject<Ref<string>>('body');
const injectedLang = inject<Ref<string>>('lang');
const currentLang = computed(() => props.lang || injectedLang?.value || 'yaml');

const highlightedHtml = ref('<div class="p-3">Initializing highlighter...</div>');

const updateHighlight = async () => {
  if (!body?.value) {
    highlightedHtml.value = '<div class="p-3 text-gray-light">No content available.</div>';
    return;
  }

  try {
    const highlighter = await getHighlighter();
    highlightedHtml.value = highlighter.codeToHtml(body.value, {
      lang: currentLang.value,
      theme: 'github-light',
    });
  } catch (error) {
    console.error('Failed to highlight syntax:', error);
    highlightedHtml.value = `<pre class="p-3"><code>${body.value}</code></pre>`;
  }
};

onMounted(async () => {
  await updateHighlight();
});

// Re-highlight if body or language changes
watch([() => body?.value, currentLang], () => {
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
