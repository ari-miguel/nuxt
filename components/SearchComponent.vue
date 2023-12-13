<template>
  <div>
  
  </div>
  <v-card class="mx-auto mb-6 mt-5" color="#66BB6A" max-width="400">
    <v-card-text>
      <v-text-field
        :loading="buscando"
        density="compact"
        variant="solo"
        label="Nombre,Apellido,Email"
        append-inner-icon="mdi-close-circle"
        single-line
        hide-details
        v-model="slug"
        @keyup.enter = "buscar"
        @click:append-inner="reset"
      ></v-text-field>
    </v-card-text>
  </v-card>

  
</template>

<script setup>

import { useListUsersStore } from "../stores/listUsers";


const store = useListUsersStore();

let slug = ref("");
let mensaje = ref("")
let buscando = ref(false)
const props = defineProps({
  searching:Function
})

const emit = defineEmits(["modificar"]);



const buscar = async () => {
  if(slug.value == ""){
    
    
  }
  else{
    buscando.value = true
    await store.search(slug)
    buscando.value = false
    emit("modificar", store.searchList);

    if(store.searchList.length <=0){
    mensaje.value = "Sin resultados"
  }

  }
  
  
  
  
  
}



const reset = async () => {
  
  store.searchList = await store.paginarLista(3,0)
  slug.value = ""
  props.searching()
  emit("modificar", store.searchList);
  
  
  
}
</script>
