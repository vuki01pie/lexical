import { internalGetActiveEditor } from "./LexicalUpdates";

export type EditorThemeClasses = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type CreateEditorArgs = {
  theme?: EditorThemeClasses;
  parentEditor?: LexicalEditor;
};

export function createEditor(editorConfig?: CreateEditorArgs): LexicalEditor {
  const config = editorConfig || {};
  const activeEditor = internalGetActiveEditor();
  const theme = config.theme || {};
  const parentEditor =
    editorConfig === undefined ? activeEditor : config.parentEditor || null;

  return new LexicalEditor();
}

export class LexicalEditor {}
