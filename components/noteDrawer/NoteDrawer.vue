<template>
  <q-drawer show-if-above v-model="drawerController" side="left" behavior="desktop" bordered class="note-drawer-bg column">

    <div class="row items-start q-mt-md" style="height: 2.5rem;">
      <p class="col-10 text-h6 text-bold text-grey-7 q-pl-md">
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

    <NoteDrawerEmpty
      v-model:create-note="isCreateNoteOpen"
      v-if="!noteList.length && !isCreateNoteOpen"
    />

    <CreateNote
      v-if="isCreateNoteOpen == true"
      @discard-note-creation="((eventValue: boolean) => {isCreateNoteOpen = eventValue})"
      @create-new-note="handleNoteCreation"
    />

    <div v-if="noteList.length >= 1 && !isCreateNoteOpen">
      Deu certo
    </div>

  </q-drawer>
</template>

<script setup lang="ts">
  import type { Note } from './NoteDrawer.types';

  const drawerController = defineModel<boolean>('drawerSwitch');
  const isCreateNoteOpen = ref<boolean>(false);
  const noteList = ref<Array<Note>>([]);

  const emits = defineEmits<{
    closeDrawer: [value: boolean],
  }>();

  const handleNoteCreation = (newNote: Note): void => {
    noteList.value.push(newNote);
    isCreateNoteOpen.value = false;
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