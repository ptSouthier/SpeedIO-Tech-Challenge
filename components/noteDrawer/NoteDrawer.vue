<template>
  <q-drawer
    show-if-above
    v-model="drawerController"
    side="left"
    behavior="desktop"
    bordered
    class="note-drawer-bg column no-wrap relative-position"
  >

    <div class="row no-wrap items-start q-mt-md" style="height: 2.5rem;">
      <p class="col-10 text-h6 text-bold text-grey-7 q-pl-md q-py-xs">
        Anotações
      </p>
      <q-btn
        flat
        round
        color="grey-5"
        icon="sym_o_close"
        @click="(() => emits('closeDrawer', false))"
      />
    </div>

    <transition-group
      enter-active-class="animated zoomIn"
      leave-active-class="animated fadeOut"
      :duration=120
    >
      <NoteDrawerEmpty
        v-if="!notesList.length && !isCreateNoteOpen"
        v-model:create-note="isCreateNoteOpen"
      />

      <CreateNote
        v-if="isCreateNoteOpen == true"
        @discard-note-creation="((eventValue: boolean) => {isCreateNoteOpen = eventValue})"
        @created-new-note="handleNoteCreated"
      />

      <NotesList
        v-if="notesList.length >= 1 && !isCreateNoteOpen"
        v-model:notes-list="notesList"
        v-model:create-note="isCreateNoteOpen"
        @note-to-delete="handleIntentToDeleteNote"
        @selected-note="((eventData: Note) => { emits('selectedNote', eventData) })"
      />
    </transition-group>

    <q-inner-loading
      :showing="isLoading"
    />

    <DeleteNote
      v-model:notes-list="notesList"
      v-model:note-id="noteIdToBeDeleted"
      v-model:show-modal="openDeleteNoteModal"
      @close-modal="((eventValue: boolean): void => { openDeleteNoteModal = eventValue })"
    />

  </q-drawer>
</template>

<script setup lang="ts">
  import type { Note } from './NoteDrawer.types';

  const drawerController = defineModel<boolean>('drawerSwitch');
  const isLoading = ref<boolean>(false);
  const isCreateNoteOpen = ref<boolean>(false);
  const openDeleteNoteModal = ref<boolean>(false);
  const noteIdToBeDeleted = ref<number>(0);
  const notesList = ref<Array<Note>>([]);

  isLoading.value = true;

  onMounted(async () => {
    setTimeout(async () => {
      const getAllNotesFromIndexDB = await useIndexDB.getAllNotes();

      notesList.value = getAllNotesFromIndexDB.data;
      isLoading.value = false;
    }, 1000)
  });

  const emits = defineEmits<{
    closeDrawer: [value: boolean],
    selectedNote: [value: Note],
  }>();

  const handleNoteCreated = async (): Promise<void> => {
    const getAllNotesFromIndexDB = await useIndexDB.getAllNotes();
    notesList.value = getAllNotesFromIndexDB.data;
    isCreateNoteOpen.value = false;
  };

  const handleIntentToDeleteNote = (noteId: number): void => {
    noteIdToBeDeleted.value = noteId;
    openDeleteNoteModal.value = true;
  };

</script>

<style>
.note-drawer-bg {
  background-color: #e3f1f7 !important;
}

.text-h6 {
  letter-spacing: -0.02rem;
}

.by-speedio {
  margin-top: -0.5rem;
  font-size: small;
}
</style>