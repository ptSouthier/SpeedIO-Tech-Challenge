<template>
  <q-card style="width: 45%">
    <q-card-section class="text-white text-center" style="height: 50vh; background-color: #016699; overflow: hidden;">

      <q-scroll-area class="fit">

        <SelectedNoteCard v-if="selectedNote?.id !== undefined && selectedNote.id > 0" v-model:note-data="selectedNote" />
        <NoNoteSelected v-else />

      </q-scroll-area>
    </q-card-section>

    <q-card-actions align="around">
      <q-btn flat text-color="green-5" class="text-bold" icon="sym_o_download" align="around" @click="(() => openInsertTokenModal = true)">
        Restaurar Meus Dados
      </q-btn>

      <q-btn flat text-color="blue-5" class="text-bold" icon="sym_o_upload" align="around" @click="(() => openPersistNotesModal = true)">
        Persistir Meus Dados
      </q-btn>
    </q-card-actions>
  </q-card>

  <InsertTokenToRetrieve
    v-model:show-token-modal="openInsertTokenModal"
  />

  <ConfirmPersistNotes
    v-model:show-persist-modal="openPersistNotesModal"
  />

</template>

<script setup lang="ts">
  const selectedNote = useSelectedNoteData();
  const openInsertTokenModal = ref<boolean>(false);
  const openPersistNotesModal = ref<boolean>(false);
</script>
