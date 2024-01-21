<template>
  <div class="col absolute-center text-center">
    <q-icon
      name="attach_file"
      size="3.13rem"
      class="text-grey-6 rotate-225 q-mb-md"
    />

    <p class="text-h6 text-bold text-blue-6 q-mb-none">
      Anotações
    </p>

    <p class="text-grey-6 by-speedio">
      By Speedio
    </p>

    <q-btn
      rounded
      color="blue-6"
      label="+ Criar anotação"
      no-caps
      class="q-mt-md"
      @click="openCreateNote"
    />
  </div>
</template>

<script setup lang="ts">
  const creatingNote = defineModel<boolean>('createNote');

  const openCreateNote = (): void => {
    creatingNote.value = true;
  };
</script>

<style>
</style>