<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleDrawer" />

        <q-toolbar-title>
          <q-avatar square>
            <img src="https://speedio.com.br/assets/img/speedio-favicon.svg"> <!-- TODO: Criar ícone SVG SpeedIO -->
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <NoteDrawer v-model:drawer-switch="isDrawerOpen" />

  </q-layout>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const isDrawerOpen = ref(false);

  const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value
  };
</script>