<template>
<v-container id="container">
    <v-card
color="success"
max-width="250"
>
<div class="d-flex justify-space-between">
  <div>
    <v-card-title class="text-subtitle-1">
      Actualizaciones
      </v-card-title>

    <!-- <v-card-subtitle>{{ fecha }}</v-card-subtitle> -->

    <v-card-actions>
      <ModalActions :modal="modal"/>
    </v-card-actions>
  </div>

  <div class="text-center pa-5">
    <v-badge color="success" :content="actualizarValor">
      <v-icon icon="mdi-cloud-arrow-up" size="large"></v-icon>
    </v-badge>
</div>
</div>
</v-card>
</v-container>
</template>

<script setup>

import {useAdminStore} from "../stores/admin"
const store = useAdminStore()

const tiempo = Date.now();
const hoy = new Date(tiempo);
let fecha = hoy.toDateString()
let valor = 0

const modal = ref({
  toolbarColor: "success",
  toolbarTitle: `Actualizaciones: ${store.admin.firstName} ${store.admin.lastName}`,
  btnCloseColor: "success",
  itemsList:store.admin.updates,
  bgColor:"success",
  btnTimeColor:"success",
  firstIcon:"mdi-account-convert"
})

const actualizarValor = computed(()=>{
  valor = store.admin.updates.length
  return valor
})






</script>

<style scoped>

@media (max-width: 400px) {
  #container {
    max-width: 250px;
  }
}




</style>