import { PACKAGE_NS, simpleMarkdownItPlugin } from '..';

/**
 * Provides text-based plantuml in code blocks
 */
export const plantuml = simpleMarkdownItPlugin(PACKAGE_NS, {
  id: 'markdown-it-plantuml',
  title: 'Plantuml',
  description: 'Plantuml in code blocks',
  documentationUrls: {
    Plugin: 'https://github.com/gmunguia/markdown-it-plantuml'
  },
  examples: {
  },
  plugin: async () => {
    const plantumlPlugin = await import(
      /* webpackChunkName: "markdown-it-plantuml" */ 'markdown-it-plantuml'
    );
    return [plantumlPlugin.default];
  }
});
