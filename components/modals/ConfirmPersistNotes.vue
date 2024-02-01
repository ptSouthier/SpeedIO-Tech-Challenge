<template>
  <q-dialog v-model="showModal">
    <q-card style="border-radius: 0.5rem;">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6 text-grey-10 q-pa-sm q-mb-sm">Você tem certeza?</div>
        <q-space />
      </q-card-section>

      <q-separator style="min-width: 100%;" />

      <q-card-section class="row items-center">
        <span class="text-grey-7 q-mx-sm q-mb-lg">
          Ao persistir seus dados de Anotações, um TOKEN será gerado.
          <br>Armazene o código TOKEN gerado, ele será necessário no momento de recuperar seus dados de Anotações!
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
          label="Salvar Anotações"
          color="blue-5"
          text-color="white"
          padding="0.4rem 0.8rem"
          @click="persistNotes"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
  const showModal = defineModel<boolean>('showPersistModal');
  import { Loading } from 'quasar';

  const persistNotes = async (): Promise<void> => {
    Loading.show();

    const { data } = await useIndexDB.getAllNotes();
    console.log(data);

    if (data.length) {
      const result = await $fetch('/api/notes/persist', {
        method: 'post',
        body: { data }
      });

      console.log('result: ', result);
    };

    Loading.hide();
  };
</script>