import { internalGetActiveEditor } from "./LexicalUpdates";

export type EditorThemeClasses = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type CreateEditorArgs = {
  theme?: EditorThemeClasses;
};

export function createEditor(editorConfig?: CreateEditorArgs): LexicalEditor {
  const config = editorConfig || {};
  const activeEditor = internalGetActiveEditor();
  const theme = config.theme || {};

  return new LexicalEditor();
}

export class LexicalEditor {}
