import IndexedDB from '@/server/indexedDB/indexedDB';
import type { OperationResult } from '@/server/indexedDB/types';
import type { Note } from '@/components/noteDrawer/NoteDrawer.types';

const indexedDBService = new IndexedDB('IndexDB', 1, ['notes']);

export const IndexDB = {
  async getAllNotes(): Promise<OperationResult> {
    try {
      const result = await indexedDBService.getAllNotes('notes');
      return result;
    } catch (error: any) {
      return error as OperationResult;
    }
  },

  async getNoteById(noteId: number): Promise<OperationResult> {
    try {
      const result = await indexedDBService.getNoteById(noteId, 'notes');
      return result;
    } catch (error: any) {
      return error as OperationResult;
    }
  },

  async addNote(note: Note): Promise<OperationResult> {
    try {
      const result = await indexedDBService.addNote(note, 'notes');
      return result;
    } catch (error: any) {
      return error as OperationResult;
    }
  },

  async deleteNote(noteId: number): Promise<OperationResult> {
    try {
      const result = await indexedDBService.deleteNote(noteId, 'notes');
      return result;
    } catch (error: any) {
      return error as OperationResult;
    }
  },
};
