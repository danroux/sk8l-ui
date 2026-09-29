import { createHighlighter, type Highlighter } from 'shiki';

let highlighterPromise: Promise<Highlighter> | null = null;
const loadedLangs = new Set<string>();

export async function getHighlighter(lang?: string): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-light'],
      langs: ['yaml', 'json'],
    });
    loadedLangs.add('yaml');
    loadedLangs.add('json');
  }

  const highlighter = await highlighterPromise;

  if (lang && !loadedLangs.has(lang)) {
    await highlighter.loadLanguage(lang as Parameters<Highlighter['loadLanguage']>[0]);
    loadedLangs.add(lang);
  }

  return highlighter;
}
