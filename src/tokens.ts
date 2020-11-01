import { Token } from '@lumino/coreutils';
import MarkdownIt from 'markdown-it';
import { RenderedMarkdown } from './widgets';

export const PLUGIN_ID = '@agoose77/jupyterlab-markup';

/* tslint:disable */
/**
 * The MarkdownIt manager token.
 */
export const IMarkdownIt = new Token<IMarkdownIt>(PLUGIN_ID);
/* tslint:enable */

export interface IMarkdownIt {
  addPluginProvider(provider: IMarkdownIt.IPluginProvider): void;
  removePluginProvider(id: string): void;
  getMarkdownIt(
    widget: RenderedMarkdown,
    options?: MarkdownIt.Options
  ): Promise<MarkdownIt>;
}

export namespace IMarkdownIt {
  export interface IPlugin {
    (md: MarkdownIt, ...params: any[]): void;
  }
  export type IPluginOptions = object;
  export interface IPluginProvider {
    /**
     * A unique identifier for the plugin, usually the name of the upstream package
     */
    id: string;
    /**
     * A lazy provider of the plugin function
     */
    plugin(): Promise<IPlugin>;
    /**
     * Additional options to pass to the MarkdownIt constructor
     */
    options?(widget: RenderedMarkdown): Promise<IPluginOptions>;
  }
}
