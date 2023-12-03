<template>
    <div>
      <v-dialog v-model="dialog"  width="auto">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props"  class="ma-2" variant="tonal" color="info" size="small">
            Actualizar
            <v-icon end icon="mdi-cloud-arrow-up"></v-icon>
          </v-btn>
        </template>
        <template v-slot:default>
          <v-card>
            <v-toolbar color="info" title="Actualizar Usuario"></v-toolbar>
            <v-card-text>
              <div class="text-subtitle-3 pa-4 text-center">
                <v-icon icon="mdi-alert-circle" color="info"></v-icon>
                <p style="color: #0D47A1;">Desea actualizar el usuario {{ item.firstName }} {{ item.lastName }}</p>
              </div>
       
            </v-card-text>
            <v-card-actions class="justify-end">
                <v-btn variant="tonal" size="x-small" color="info" @click ="updateUser"
                >Actualizar
                <v-icon end icon="mdi-cloud-arrow-up"></v-icon>
                </v-btn
              >
              <v-btn variant="tonal" size="x-small" color="info" @click="dialog = false"
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
        <v-snackbar v-model="snackbar" color="warning">
            {{ mensaje }}

            <template v-slot:actions>
                <v-btn color="pink" variant="text" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>


  
  
</template>



<script setup>
import {useActionStore} from "../stores/actions"
import {useAdminStore} from "../stores/admin"

const storeAction = useActionStore()
const storeAdmin = useAdminStore()

const props = defineProps({
    item:Object,
    
})

const tiempo = Date.now();
const hoy = new Date(tiempo);

let mensaje = ref("")
let snackbar = ref(false)
let dialog = ref(false)

const updateUser = async()=>{

  await storeAction.updateUser(props.item,snackbar,mensaje,dialog)
  
  const hora = {"hora":hoy.getHours(),"minutos":hoy.getMinutes()}
  const actualizadoModificado = {...props.item,...hora}
  storeAdmin.admin.updates.push(actualizadoModificado)
  
  
}
</script>