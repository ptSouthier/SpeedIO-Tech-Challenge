<template>
  <q-drawer show-if-above v-model="drawerSwitch" side="left" behavior="desktop" bordered class="note-drawer-bg column">
    <div class="row items-start q-mt-md">
      <p class="col-10 text-h6 text-bold text-grey-7 q-pl-md">
        Anotações
      </p>
      <q-btn
        flat
        round
        color="grey-5"
        icon="close"
        @click="handleDrawerClosage"
      />
    </div>
    <div class="col absolute-center text-center">
      <q-icon
        name="attach_file"
        size="50px"
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
  </q-drawer>
</template>

<script setup lang="ts">
  const drawerSwitch = defineModel<boolean>('drawerSwitch');
  const isCreateNoteOpen = ref<boolean>(false);

  const emits = defineEmits<{
    closeDrawer: [value: boolean],
  }>();

  const handleDrawerClosage = (): void => {
    emits('closeDrawer', false);
  };

  const openCreateNote = (): void => {
    isCreateNoteOpen.value = true;
    console.log('Abriu');
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