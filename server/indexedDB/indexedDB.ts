import type { Note } from '@/components/noteDrawer/NoteDrawer.types';
import type { OperationResult } from './types';
import {
  HTTP_STATUS_OK,
  HTTP_STATUS_CREATED,
  HTTP_STATUS_NO_CONTENT,
  HTTP_STATUS_INTERNAL_SERVER_ERROR
} from '@/utils/httpStatusCodes';

export default class IndexedDB {
  private db: IDBDatabase | null = null;
  private dbName: string;
  private dbVersion: number;
  private stores: string[];

  constructor(dbName: string, dbVersion: number, stores: string[]) {
    this.db;
    this.dbName = dbName;
    this.dbVersion = dbVersion;
    this.stores = stores;
    this.initDatabase();
  };

  private initDatabase() {
    if (process.client) {
      if (!window.indexedDB) {
        console.error("IndexedDB is not supported by this browser!");
      } else {
        const request = indexedDB.open(this.dbName, this.dbVersion);

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;

          this.stores.forEach((store) => {
            if (!db.objectStoreNames.contains(store)) {
              db.createObjectStore(store, { keyPath: "id", autoIncrement: true });
            }
          });
        };

        request.onsuccess = (event) => {
          this.db = (event.target as IDBOpenDBRequest).result;
        };

        request.onerror = (event) => {
          console.error("Error opening IndexedDB: ", event);
        };
      };
    };
  };

  public addData(data: any, store: string): Promise<OperationResult> {
    return new Promise((resolve, reject) => {
      if (this.db) {
        const transaction = this.db.transaction([store], "readwrite");
        const objectStore = transaction.objectStore(store);

        const request = objectStore.add(data);

        request.onsuccess = (event) => {
          resolve({
            status: HTTP_STATUS_CREATED,
            message: `Data created with success into "${store}" store!`,
            data,
            event,
          });
        };

        request.onerror = (event) => {
          console.error("Error adding data to IndexedDB: ", event);
          reject({
            status: HTTP_STATUS_INTERNAL_SERVER_ERROR,
            message: "Error adding data to IndexedDB!",
            event,
          });
        };
      } else {
        reject({
          status: HTTP_STATUS_INTERNAL_SERVER_ERROR,
          message: "IndexedDB not initialized!",
        });
      };
    });
  };

  public deleteData(dataId: number, store: string): Promise<OperationResult> {
    return new Promise((resolve, reject) => {
      if (this.db) {
        const transaction = this.db.transaction([store], "readwrite");
        const objectStore = transaction.objectStore(store);

        const request = objectStore.delete(dataId);

        request.onsuccess = (event) => {
          resolve({
            status: HTTP_STATUS_NO_CONTENT,
            message: `Data with id: ${dataId} was deleted with success!`,
            event,
          });
        };

        request.onerror = (event) => {
          console.error("Error deleting data from IndexedDB:", event);
          reject({
            status: HTTP_STATUS_INTERNAL_SERVER_ERROR,
            message: "Error deleting data from IndexedDB",
            event,
          });
        };
      } else {
        reject({
          status: HTTP_STATUS_INTERNAL_SERVER_ERROR,
          message: "IndexedDB not initialized!",
        });
      };
    });
  };

  public getAllNotes(store: string): Promise<OperationResult> {
    return new Promise((resolve, reject) => {
      if (this.db) {
        const transaction = this.db.transaction([store], "readonly");
        const objectStore = transaction.objectStore(store);
        const cursorRequest = objectStore.openCursor();

        const results: any[] = [];

        cursorRequest.onsuccess = (event) => {
          const cursor = (event.target as IDBRequest).result;

          if (cursor) {
            const note = cursor.value;

            note.category = JSON.parse(note.category);

            results.push(note);
            cursor.continue();
          } else {
            resolve({
              status: HTTP_STATUS_OK,
              message: "Notes retrieved with success!",
              data: results,
              event,
            });
          };
        };

        cursorRequest.onerror = (event) => {
          console.error("Error getting notes from IndexedDB:", event);
          reject({
            status: HTTP_STATUS_INTERNAL_SERVER_ERROR,
            message: "Error getting notes from IndexedDB",
            event,
          });
        };
      } else {
        reject({
          status: HTTP_STATUS_INTERNAL_SERVER_ERROR,
          message: "IndexedDB not initialized!",
        });
      };
    });
  };

  public getNoteById(noteId: number, store: string): Promise<OperationResult> {
    return new Promise((resolve, reject) => {
      if (this.db) {
        const transaction = this.db.transaction([store], "readonly");
        const objectStore = transaction.objectStore(store);
        const request = objectStore.get(noteId);

        request.onsuccess = (event) => {
          const result = (event.target as IDBRequest).result;

          result.category = JSON.parse(result.category);

          resolve({
            status: HTTP_STATUS_OK,
            message: "Note retrieved with success!",
            data: result,
          });
        };

        request.onerror = (event) => {
          console.error("Error getting note from IndexedDB:", event);
          reject({
            status: HTTP_STATUS_INTERNAL_SERVER_ERROR,
            message: "Error getting note from IndexedDB",
            event,
          });
        };
      } else {
        reject({
          status: HTTP_STATUS_INTERNAL_SERVER_ERROR,
          message: "IndexedDB not initialized!",
        });
      };
    });
  };
};
