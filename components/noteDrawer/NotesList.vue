<template>
  <div class="q-pa-md" style="min-height: 85%;">
    <q-scroll-area class="fit">
      <q-list padding class="q-gutter-x-md q-gutter-y-sm" style="max-width: 17.5rem;">

        <q-item v-for="note in notesList" :key="note.id" class="bg-white text-left q-pa-sm" style="border-radius: 0.5rem;" clickable v-ripple>
          <q-item-section top avatar class="col-2 q-px-none">
            <q-icon
              name="sym_o_attach_file"
              size="1.3rem"
              class="text-grey-6 rotate-225 q-pa-sm"
            />
          </q-item-section>

          <q-item-section class="col-7" style="font-size: smaller;">
            <q-item-label class="text-bold text-grey-8" lines="1" style="text-decoration: underline;">
              {{ note.description }}
            </q-item-label>

            <q-item-label caption style="font-size: smaller;">
              {{ note.reminder }}
            </q-item-label>
          </q-item-section>

          <q-item-section side top class="col-3">
            <q-btn flat round color="red" size="0.8rem" @click="handleNoteDelete(note.id)">
              <q-icon name="sym_o_delete" style="font-size: 1.3rem; font-weight: 300;" />
            </q-btn>
          </q-item-section>
        </q-item>

      </q-list>
    </q-scroll-area>

    <div class="row no-wrap items-center justify-around q-ma-md fixed-bottom">
      <q-btn
        rounded
        no-caps
        color="blue-6"
        label="+ Criar anotação"
        class="col-12"
        @click="openCreateNote"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Note } from './NoteDrawer.types';
  const notesList = defineModel<Array<Note>>('notesList');
  const creatingNote = defineModel<boolean>('createNote');

  const emits = defineEmits<{
    noteToDelete: [value: number],
  }>();

  const openCreateNote = (): void => {
    creatingNote.value = true;
  };

  const handleNoteDelete = (noteId: number | undefined): void => {
    if (noteId !== undefined) {
      emits('noteToDelete', noteId);
    } else {
      console.error('Problem with the ID of selected note.');
    }
  };
</script>
