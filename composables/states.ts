import type { Note } from "@/components/noteDrawer/NoteDrawer.types";

export const useSelectedNoteData = () => useState<Note>('selectedNote', () => ({
  id: 0,
  description: '',
  businessPotential: 0.00,
  category: [],
  reminder: '',
}));

export const useNoteToDelete = () => useState<number | undefined>('noteToDelete', () => undefined);