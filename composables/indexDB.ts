import IndexedDB from '@/server/indexedDB/indexedDB';
import type { OperationResult } from '@/server/indexedDB/types';
import type { Note } from '@/components/noteDrawer/NoteDrawer.types';

const indexedDBService = new IndexedDB('IndexDB', 1, ['notes']);

export const useIndexDB = {
  async getAllNotes(): Promise<OperationResult> {
    try {
      const result = await indexedDBService.getAllData('notes');

      if (result.status === HTTP_STATUS_OK) {
        result.data.forEach((noteValue: any) => {
          noteValue.category = JSON.parse(noteValue.category);
        });
      } else {
        throw new Error(result.message);
      }


      return result;
    } catch (error: any) {
      return error as OperationResult;
    }
  },

  async getNoteById(noteId: number): Promise<OperationResult> {
    try {
      const result = await indexedDBService.getDataById(noteId, 'notes');
      return result;
    } catch (error: any) {
      return error as OperationResult;
    }
  },

  async addNote(note: Note): Promise<OperationResult> {
    try {
      const noteToStore = {
        ...note,
        category: JSON.stringify(note.category),
      };

      const result = await indexedDBService.addData(noteToStore, 'notes');
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
