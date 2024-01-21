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
        icon="close"
        @click="(() => emits('closeDrawer', false))"
      />
    </div>

    <NoteDrawerEmpty
      v-model:create-note="isCreateNoteOpen"
      v-if="!noteList.length && !isCreateNoteOpen"
    />

    <CreateNote
      v-if="isCreateNoteOpen == true"
    />

  </q-drawer>
</template>

<script setup lang="ts">
  const drawerController = defineModel<boolean>('drawerSwitch');
  const isCreateNoteOpen = ref<boolean>(false);
  const noteList = ref<Array<Note>>([]);
  
  interface Note {
    description: string,
    businessPotential: number,
    category: Array<string>,
    reminder: Date,
  }

  const emits = defineEmits<{
    closeDrawer: [value: boolean],
  }>();
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