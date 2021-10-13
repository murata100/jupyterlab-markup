import { anchor } from './anchor';
import { deflist } from './deflist';
import { diagrams } from './diagrams';
import { plantuml } from './plantuml';
import { footnote } from './footnote';
import { taskLists } from './task-lists';

/**
 * Builtin plugins provided by this labextension
 */
export const BUILTINS = [anchor, deflist, diagrams, plantuml, footnote, taskLists];
