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
      @update:model-value="selectedItems"
      
      
      
    ></v-select>
      </v-col>
      <v-col v-show="utilities" cols="auto">
        <v-row justify="center" align="center">
        
        <v-btn
        class="ma-2"
        variant="text"
        icon="mdi-arrow-left"
        color="success"
        @click="atras"
        :disabled="desactivarBtnPrev"
      ></v-btn>

      <p class="text-subtitle-1" style="color: #66BB6A;">{{ paginaActual }}/{{ totalPaginas }}</p>

        <v-btn
        class="ma-2"
        variant="text"
        icon="mdi-arrow-right"
        color="success"
        @click="siguiente"
        :disabled="desactivarBtnSiguiente"
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

//paginador

let contador = ref(3)
let siguienteActivo = true
let prevActivo = false
let items =[3,6,9]
let limit = ref(0)
let skip = ref(0)
let total = ref(0)
let paginaActual = ref(1)
let totalPaginas = ref(1)

//paginador

const listView = defineAsyncComponent(() => import("@/components/UsersList"));
const cardView = defineAsyncComponent(() => import("@/components/UsersCard"));
const vista = shallowRef(null);




const cargarComDinamico = async (componente) => {
  vista.value = null
  cargando.value = true
  await selectedItems()
  
  return new Promise((resolve)=>{
    
    setTimeout(() => {
      cargando.value = false
      utilities.value = true
      resolve(vista.value = componente)
      
  }, 500);

})

}

const searching = async()=>{
  search.value = !search.value
  
}




const selectedItems = async()=>{
  skip.value = 0
  paginaActual.value = 1
  limit.value = contador.value
  await store.paginarLista(limit.value,skip.value)
  
  total.value = store.total
  totalPaginas.value = Math.ceil(total.value/contador.value);
  
  
}

const siguiente = async()=>{
  limit.value = contador.value
  skip.value += limit.value
  await store.paginarLista(limit.value,skip.value)
  paginaActual.value++
  

  }
  


const atras = async()=>{

  limit.value = contador.value
  skip.value -= limit.value
  await store.paginarLista(limit.value,skip.value)
  paginaActual.value--
  
}



const desactivarBtnSiguiente = computed(()=>{
  if(paginaActual.value >= totalPaginas.value){
    siguienteActivo = true
    return siguienteActivo
  }
})

const desactivarBtnPrev = computed(()=>{
  if(paginaActual.value == 1){
    prevActivo = true
    return prevActivo
  }
})

const modificar = (valor)=>{
  store.lista = valor

}



</script>
