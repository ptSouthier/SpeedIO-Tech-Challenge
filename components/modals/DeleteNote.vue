<template>
  <q-dialog v-model="showModal" persistent>
    <q-card style="border-radius: 0.5rem;">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6 text-grey-10 q-pa-sm q-mb-sm">Deseja excluir essa anotação</div>
        <q-space />
        <q-btn
          class="q-mb-sm"
          color="grey-5"
          icon="sym_o_close"
          flat
          round
          dense
          v-close-popup
        />
      </q-card-section>

      <q-separator style="min-width: 100%;" />

      <q-card-section class="row items-center">
        <span class="text-grey-7 q-mx-sm q-mb-lg">
          Você está prestes a deletar uma anotação e esta ação não poderá ser desfeita.
          <br>Tem certeza que deseja excluí-la?
        </span>
      </q-card-section>

      <q-card-actions align="right" class="q-pr-md q-pb-md">
        <q-btn
          outline
          rounded
          no-caps
          label="Cancelar"
          text-color="grey-8"
          padding="0.4rem 0.8rem"
          class="q-mr-xs"
          v-close-popup
        />
        <q-btn
          unelevated
          rounded
          no-caps
          label="Excluir"
          color="red"
          text-color="white"
          padding="0.4rem 0.8rem"
          @click="handleNoteDeletion"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
  import type { Note } from '../noteDrawer/NoteDrawer.types';
  import { Loading } from 'quasar';

  const showModal = defineModel<boolean>('showModal');
  const notesList = defineModel<Array<Note>>('notesList');
  
  const noteToDelete = useNoteToDelete();

  const emits = defineEmits<{
    closeModal: [value: boolean],
  }>();

  const handleNoteDeletion = async (): Promise<void> => {
    Loading.show();

    if (noteToDelete.value !== undefined) {
      const deleteNoteData = await useIndexDB.deleteNote(noteToDelete.value);
      
      if (deleteNoteData.status === HTTP_STATUS_NO_CONTENT) {        
        notesList.value = notesList.value?.filter((note: any) => note.id !== noteToDelete.value);
        emits('closeModal', false);
      };
    };
      
    Loading.hide();
  };
</script>