<template>
    <div>
      <v-dialog v-model="dialog"  width="auto">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="ma-2" color="red" size="x-small">
            Eliminar
            <v-icon end icon="mdi-delete"></v-icon>
          </v-btn>
        </template>
        <template v-slot:default>
          <v-card>
            <v-toolbar color="red" title="Eliminar Usuario"></v-toolbar>
            <v-card-text>
              <div class="text-subtitle-3 pa-4 text-center">
                <v-icon icon="mdi-alert-circle" color="red"></v-icon>
                <p class="text-error">Desea eliminar el usuario {{ item.firstName }} {{ item.lastName }}?</p>
              </div>

              <div v-show="eliminado.firstName">{{ mensaje }}</div>
           

         
       
            </v-card-text>
            <v-card-actions class="justify-end">
                <v-btn variant="tonal" color="red" @click ="deleteUser" size="x-small"
                >Eliminar
                <v-icon end icon="mdi-delete"></v-icon>
                </v-btn
              >
              <v-btn variant="tonal" color="red" size="x-small" @click="dialog = false"
                >Cancelar
                <v-icon end icon="mdi-cancel"></v-icon>
                </v-btn
              >

       
            </v-card-actions>

      
      
          </v-card>
         
        
        </template>
      
      </v-dialog>
    </div>


    <div>
        <v-snackbar v-model="snackbar" color="#F44336">
            {{ mensaje }}

            <template v-slot:actions>
                <v-btn color="white" variant="tonal" @click="snackbar = false">
                    Close
                    
                </v-btn>
            </template>
        </v-snackbar>
      </div>

    

    
    


</template>



<script setup>
import {useListUsersStore} from "../stores/listUsers"
import {useActionStore} from "../stores/actions"


const store = useActionStore()
const storeList = useListUsersStore()

const props = defineProps({
    item:Object,
    index:Number,
    
})


let mensaje = ref("")
let snackbar = ref(false)
let  dialog = ref(false)
const eliminado = ref({})
let color = "red"


const deleteUser = async()=>{
  
  let eliminado = await store.deleteUser(props.item.id,snackbar,mensaje,dialog)
  const hora = useTimeNow()
  const eliminadoModificado = {...eliminado.value,...hora}
  store.deleteList.push(eliminadoModificado)
  setTimeout(() => {
    storeList.lista.splice(props.index,1) //eliminaria de la lista para simular el delete
  }, 2000);
  
  
  
}



</script>
