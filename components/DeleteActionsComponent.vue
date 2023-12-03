<template>
    <v-container>
        <v-card
    color="red"
    max-width="300"
    >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5">
          Eliminaciones
        </v-card-title>
    
        <v-card-subtitle>{{ fecha }}</v-card-subtitle>
    
        <v-card-actions>
          <ModalActions :modal="modal"/>
        </v-card-actions>
      </div>
    
      <div class="text-center pa-5">
        <v-badge color="red" :content="actualizarValor">
          <v-icon icon="mdi-account-remove" size="large"></v-icon>
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
    let valor = ref(0)
    
    const actualizarValor = computed(()=>{
      valor = store.admin.deletes.length
      return valor
})

    const modal = ref({
      toolbarColor:"red",
      toolbarTitle: `Eliminaciones: ${store.admin.firstName} ${store.admin.lastName}`,
      btnCloseColor:"red",
      itemsList:store.admin.deletes,
      bgColor:"red",
      btnTimeColor:"red",
      firstIcon:"mdi-account-remove"
    })

    
    
    
    
    
    </script>