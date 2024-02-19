<template>
  <div class="text-caption text-white text-right q-pr-sm q-mr-xs" style="font-size: x-small;">
    <q-icon name="sym_o_event" size="1rem" class="q-pb-xs" />
    Lembrete para {{ noteData?.reminder }}
  </div>
  <div class="text-overline text-white">Descrição</div>
  <div class="text-h6 q-mb-md q-mt-xs q-px-sm">
          {{ noteData?.description }}
        </div>

        <q-separator style="min-width: 100%;" />

        <div class="text-overline text-white">Potencial de Negócio</div>
        <div class="text-subtitle2 q-mb-md q-mt-xs q-px-sm">R${{ noteData?.businessPotential }}</div>

        <q-separator style="min-width: 100%;" />

        <div class="text-overline text-white">Categorização</div>
        <div class="text-subtitle2 q-mb-md q-mt-xs q-px-sm">{{ noteData?.category }}</div>
</template>

<script setup lang="ts">
  import type { Note } from '../noteDrawer/NoteDrawer.types';

  const noteData = defineModel<Note>('noteData');
</script>
