export type CreateEditorArgs = {};

export function createEditor(editorConfig?: CreateEditorArgs): LexicalEditor {
  return new LexicalEditor();
}

export class LexicalEditor {}
