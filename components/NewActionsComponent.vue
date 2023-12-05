<template>
  <v-container>
    <v-card color="info" max-width="250">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-subtitle-1"> Nuevos </v-card-title>

          <!-- <v-card-subtitle>{{ fecha }}</v-card-subtitle> -->

          <v-card-actions>
            <ModalActions :modal="modal" />
          </v-card-actions>
        </div>

        <div class="text-center pa-2">
    <v-progress-circular
      rotate="360"
      size="50"
      width="10"
      :model-value="actualizarValor"
      color="warning"
    >
      {{ valor }}
    </v-progress-circular>
    </div>

        <!-- <div class="text-center pa-7">
          <v-badge color="info" :content="actualizarValor">
            <v-icon icon="mdi-account-plus" size="large"></v-icon>
          </v-badge>
        </div> -->
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import { useAdminStore } from "../stores/admin";
const store = useAdminStore();

const tiempo = Date.now();
const hoy = new Date(tiempo);
let fecha = hoy.toDateString()
let valor = ref(0);


const actualizarValor = computed(()=>{
  valor = store.admin.news.length
  return valor
})

const modal = ref({
  toolbarColor: "info",
  toolbarTitle: `Creados nuevos: ${store.admin.firstName} ${store.admin.lastName}`,
  btnCloseColor: "info",
  itemsList: store.admin.news,
  bgColor: "info",
  btnTimeColor: "info",
  firstIcon: "mdi-account-plus",
});
</script>
