import type { Note } from "@/components/noteDrawer/NoteDrawer.types";

export const useSelectedNoteData = () => useState<Note>('selectedNote', () => {
  return {
    id: 0,
    description: '',
    businessPotential: 0.00,
    category: [],
    reminder: '',
  };
});