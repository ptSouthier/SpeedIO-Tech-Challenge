<template>
  <div class="col q-px-lg q-pt-xs q-pb-sm text-start">
    <q-form
      @submit="handleSubmit"
      @reset="handleDiscard"
      class="q-gutter-md column justify-between no-wrap"
      style="height: 100%;"
    >

      <div>
        <q-input
          rounded
          outlined
          dense
          v-model="note.description"
          :rules="[(description: string) => !!description || 'Descreva sua anotação!']"
          placeholder="Descrição*"
          type="textarea"
          input-class="q-px-sm"
          input-style="resize: none;"
          bg-color="white"
        />

        <div class="q-mt-sm">
          <span class="text-grey-6 text-bold text-caption">Potencial de negócio</span>
          <q-input
            rounded
            outlined
            prefix="R$"
            type="number"
            min="0"
            v-model="note.businessPotential"
            bg-color="white"
            class="q-mt-sm"
          />
        </div>

        <div class="q-mt-md">
          <span class="text-grey-6 text-bold text-caption">Categorização</span>
          <q-select
            rounded
            outlined
            v-model="note.category"
            multiple
            :options="['Em Análise', 'Em Progresso', 'Baixa Prioridade', 'Importante', 'Crítico', 'Pauta para Reunião']"
            use-chips
            stack-label
            bg-color="white"
            class="q-mt-sm"
          />
        </div>

        <div class="q-mt-md">
          <span class="text-grey-6 text-bold text-caption">Lembrete</span>
          <q-input
            rounded
            outlined
            readonly
            v-model="note.reminder"
            :rules="[(reminder: string) => !!reminder || 'Selecione uma data!']"
            placeholder="Selecione uma data"
            bg-color="white"
            class="q-mt-sm"
            input-class="q-pl-sm"
          >
            <template v-slot:append>
              <q-icon name="sym_o_calendar_today" class="cursor-pointer q-mr-sm" size="1.3rem">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">

                  <q-date
                    v-model="note.reminder"
                    mask="DD/MM/YYYY"
                    :options="dateSelectorOptions"
                  >
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>

                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>

      <div class="row no-wrap items-center justify-around q-pb-sm">
        <q-btn
          flat
          round
          size="sm"
          padding="sm"
          class="bg-red-5 q-mr-sm"
          color="white"
          icon="sym_o_delete"
          type="reset"
        />
        
        <q-btn
          rounded
          no-caps
          color="blue-6"
          label="Salvar"
          class="col-10"
          type="submit"
        />
      </div>

    </q-form>
  </div>
</template>

<script setup lang="ts">
  import type { Note } from './types';
  import { getTodayDateData } from '@/utils/getTodayDateData';

  const note = ref<Note>({
    description: '',
    businessPotential: 0.00,
    category: [],
    reminder: '',
  });

  const emits = defineEmits<{
    discardNoteCreation: [value: boolean],
    createNewNote: [value: Note],
  }>();

  const dateSelectorOptions = (date: string) => {
    const { day, month, year } = getTodayDateData();
    const today = `${year}/${month}/${day}`;
    
    return date >= today;
  }

  const handleSubmit = (): void => {
    emits('createNewNote', note.value);
  };

  const handleDiscard = (): void => {
    emits('discardNoteCreation', false)
  };

</script>

<style>
</style>