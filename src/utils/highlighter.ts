import { createHighlighterCore, type HighlighterCore } from '@shikijs/core';
import { createJavaScriptRegexEngine } from '@shikijs/engine-javascript';

let highlighterPromise: Promise<HighlighterCore> | null = null;

export async function getHighlighter(): Promise<HighlighterCore> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [import('@shikijs/themes/github-light')],
      langs: [
        import('@shikijs/langs/yaml'),
        import('@shikijs/langs/json'),
      ],
      engine: createJavaScriptRegexEngine(),
    });
  }

  return highlighterPromise;
}
