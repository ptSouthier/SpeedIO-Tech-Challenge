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

        <q-toolbar-title>
          <q-avatar square>
            <img src="https://speedio.com.br/assets/img/speedio-favicon.svg"> <!-- TODO: Criar ícone SVG SpeedIO -->
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <NoteDrawer
      v-model:drawer-switch="isDrawerOpen"
      @close-drawer="((eventValue: boolean) => isDrawerOpen = eventValue)"
    />

  </q-layout>
</template>

<script setup lang="ts">
  const isDrawerOpen = ref<boolean>(false);

  const toggleDrawer = (): void => {
    isDrawerOpen.value = !isDrawerOpen.value
  };
</script>