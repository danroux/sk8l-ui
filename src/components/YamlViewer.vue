<script setup lang="ts">
import { ref, onMounted, watch, inject, computed, type Ref } from 'vue';
import { getHighlighter } from '@/utils/highlighter';
import Octicon from '@/components/Octicon.vue';

const props = withDefaults(defineProps<{
  lang?: string;
}>(), {
  lang: undefined,
});

const body = inject<Ref<string>>('body');
const injectedLang = inject<Ref<string>>('lang');
const currentLang = computed(() => props.lang || injectedLang?.value || 'yaml');

const highlightedHtml = ref('<div class="p-3">Initializing highlighter...</div>');
const wordWrap = ref(false);

const updateHighlight = async () => {
  if (!body?.value) {
    highlightedHtml.value = '<div class="p-3 text-gray-light">No content available.</div>';
    return;
  }

  const lang = currentLang.value;

  try {
    // Ensures lang grammar is loaded into the singleton before codeToHtml is called
    const highlighter = await getHighlighter(lang);
    highlightedHtml.value = highlighter.codeToHtml(body.value, {
      lang,
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
    <div class="yaml-viewer-toolbar">
      <button
        class="wrap-toggle"
        :class="{ active: wordWrap }"
        :title="wordWrap ? 'Disable word wrap' : 'Enable word wrap'"
        type="button"
        @click="wordWrap = !wordWrap"
        :aria-pressed="wordWrap"
        aria-label="Toggle word wrap"
      >
        <Octicon name="fold" />
        Wrap
      </button>
    </div>
    <div v-html="highlightedHtml" class="shiki-container" :class="{ 'wrap-enabled': wordWrap }"></div>
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

.yaml-viewer-toolbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 8px;
  border-bottom: 1px solid var(--color-border-default, #d0d7de);
  background-color: var(--color-canvas-subtle, #f6f8fa);
}

.wrap-toggle {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  font-size: 11px;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, monospace;
  color: var(--color-fg-muted, #656d76);
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  line-height: 18px;
  transition: color 0.1s, background-color 0.1s, border-color 0.1s;
}

.wrap-toggle:hover {
  color: var(--color-fg-default, #1f2328);
  background-color: var(--color-btn-hover-bg, #f3f4f6);
  border-color: var(--color-border-default, #d0d7de);
}

.wrap-toggle.active {
  color: var(--color-accent-fg, #0969da);
  background-color: var(--color-accent-subtle, #ddf4ff);
  border-color: var(--color-accent-muted, #54aeff);
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
}

.shiki-container pre code {
  display: grid;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.shiki-container pre code .line {
  white-space: pre;
  line-height: 1.5;
}

/* Word wrap ON */
.shiki-container.wrap-enabled pre code .line {
  white-space: pre-wrap;
  word-break: break-word;
}

.shiki-container pre code .line::before {
  content: counter(step);
  counter-increment: step;
  width: 1.25rem;
  margin-right: 1.25rem;
  display: inline-block;
  text-align: right;
  color: #8c959f; /* GitHub Light muted text color */
  user-select: none;
  vertical-align: top;
}
</style>
