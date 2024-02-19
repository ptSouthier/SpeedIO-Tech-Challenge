<template>
  <q-dialog v-model="showModal">
    <q-card style="border-radius: 0.5rem;">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6 text-grey-10 q-pa-sm q-mb-sm">Insira seu Token de recuperação</div>
        <q-space />
      </q-card-section>

      <q-separator style="min-width: 100%;" />

      <q-card-section class="q-ma-md">
        <q-input dense v-model="token" input-class="text-center" autofocus @keyup.enter="retrieveNotes" />
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
          label="Recuperar Anotações"
          color="green-5"
          text-color="white"
          padding="0.4rem 0.8rem"
          @click="retrieveNotes"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
  const showModal = defineModel<boolean>('showTokenModal');
  const token = ref<string>('');

  const retrieveNotes = async (): Promise<void> => {
    Loading.show();

    setTimeout(() => {
      console.log('Tudo certo');
    }, 2000);

    Loading.hide();
  };
</script>