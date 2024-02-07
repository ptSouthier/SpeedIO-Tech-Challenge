<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-blue-6 text-white">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="sym_o_menu"
          @click="toggleDrawer"
        />

        <q-space />

        <q-avatar square>
          <a href="https://speedio.com.br/" target="_blank">
            <SpeedioMiniLogo />
          </a>
        </q-avatar>

      </q-toolbar>
    </q-header>

    <NoteDrawer
      v-model:drawer-switch="isDrawerOpen"
      @close-drawer="((eventValue: boolean) => isDrawerOpen = eventValue)"
      @selected-note="handleSelectedNote"
    />

    <q-page-container style="min-height: 100vh;">
      <q-page padding class="column items-center q-pa-lg">
        <SpeedioLogo :size="360" class="q-mb-md" />

        <NoteDataCard
          v-model:selected-note="selectedNoteData"
        />

      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
  import type { Note } from '@/components/noteDrawer/NoteDrawer.types';

  const isDrawerOpen = ref<boolean>(false);
  const selectedNoteData = ref<Note>({
    id: 0,
    description: '',
    businessPotential: 0.00,
    category: [],
    reminder: '',
  });

  const toggleDrawer = (): void => {
    isDrawerOpen.value = !isDrawerOpen.value
  };

  const handleSelectedNote = (noteData: Note): void => {
    selectedNoteData.value = noteData;    
  };
</script>