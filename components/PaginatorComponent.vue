<template>

  <v-scroll-y-transition>
  <div class="mt-2" v-show="search">
      <SearchComponent @modificar="modificar" :searching="searching"/>
    </div>
  </v-scroll-y-transition>

    

  <div v-show="cargando">
    <LoadComponent/>
  </div>
  <div>
    
    <component :is="vista" :lista="store.lista"/>
    
  </div>


  <div class="mt-1">
    <v-card max-width="auto" class="" variant="tonal" color="#66BB6A">
    <v-row justify="center" align="center">
      
      <v-col v-show="utilities" cols="auto">
        <v-select
      v-model="contador"
      prepend-inner-icon="mdi-page-next"
      rounded="20"
      :items="items"
      density="compact"
      label=""
      variant="plain"
      color="success"
      base-color="success"
      @update:model-value="store.selectedItems(contador)"
      
      
      
    ></v-select>
      </v-col>
      <v-col v-show="utilities" cols="auto">
        <v-row justify="center" align="center">
        
        <v-btn
        class="ma-2"
        variant="text"
        icon="mdi-arrow-left"
        color="success"
        @click="store.atras"
        :disabled="store.desactivarBtnPrev"
      ></v-btn>

      <p class="text-subtitle-1" style="color: #66BB6A;">{{ store.paginaActual }}/{{ store.totalPaginas }}</p>

        <v-btn
        class="ma-2"
        variant="text"
        icon="mdi-arrow-right"
        color="success"
        @click="store.siguiente"
        :disabled="store.desactivarBtnSiguiente"
      ></v-btn>
          
        </v-row>

        
      </v-col>
    
      <v-col cols="auto">
        <v-row>
          
            <v-btn
        class="ma-2"
        
        variant="text"
        icon="mdi-card-account-details"
        color="warning"
        @click = "cargarComDinamico(cardView)"
        
      ></v-btn>
    
          
      <v-btn
        class="ma-2"
        
        variant="text"
        icon="mdi-view-list"
        color="warning"
        @click="cargarComDinamico(listView)"
        
      ></v-btn>

      <v-btn
        type="button"
        class="ma-2"
        variant="text"
        icon="mdi-account-search"
        color="warning"
        @click="searching"
        
      ></v-btn>

      </v-row>
        
    </v-col>


    </v-row>
  </v-card>
  </div>


  
</template>

<script setup>

import {useListUsersStore} from "@/stores/listUsers"

const store = useListUsersStore()
store.allUsers()

let utilities = ref(false)

let cargando = ref(false)

let search = ref(false)

let contador = ref(3)

let items =[3,6,9]

const listView = defineAsyncComponent(() => import("@/components/UsersList"));
const cardView = defineAsyncComponent(() => import("@/components/UsersCard"));
const vista = shallowRef(null);




const cargarComDinamico = async (componente) => {
  vista.value = null
  cargando.value = true
  await store.selectedItems(contador.value)
  
  
  setTimeout(() => {
    cargando.value = false
    utilities.value = true
    vista.value = componente
      
  }, 200);

}


const searching = async()=>{
  search.value = !search.value
  
}

const modificar = (valor)=>{
  store.lista = valor

}





</script>
