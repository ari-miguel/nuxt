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
                <p class="text-error">Desea eliminar el usuario {{ item.firstName }} {{ item.lastName }}</p>
              </div>
       
            </v-card-text>
            <v-card-actions class="justify-end">
                <v-btn type="button" variant="tonal" color="red" @click ="deleteUser" size="x-small"
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
        <v-snackbar v-model="snackbar" color="red">
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
    lista:Array,
    index:Number
})

const tiempo = Date.now();
const hoy = new Date(tiempo);
const mensaje = ref("")
const snackbar = ref(false)
const  dialog = ref(false)
const eliminado = ref({})


const deleteUser = async()=>{
  
  eliminado.value  = await store.deleteUser(props.item.id)
  
  mensaje.value = `Usuario eliminado: ${eliminado.value.id} ${eliminado.value.firstName} ${eliminado.value.lastName}`
  snackbar.value = true
  const hora = {"hora":hoy.getHours(),"minutos":hoy.getMinutes()}
  const eliminadoModificado = {...eliminado.value,...hora}
  store.deleteList.push(eliminadoModificado)
  storeList.lista.splice(props.index,1) //eliminaria de la lista para simular el delete
  dialog.value = false
  

  

}


</script>
