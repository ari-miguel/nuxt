<template>
    <div>
          <v-dialog v-model="dialog"  width="550">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props"  class="ma-2" variant="tonal" color="white" size="small">
                Mostrar
                <v-icon end icon="mdi-text-search-variant"></v-icon>
              </v-btn>
            </template>
            <template v-slot:default>
              <v-card>
                <v-toolbar :color="modal.toolbarColor" :title="modal.toolbarTitle"></v-toolbar>
                
                  <div class="text-subtitle-3 pa-4 text-center">
                    <LIstActions :list="modal.itemsList" :color="modal.bgColor" :colorBtn="modal.btnTimeColor" :firstIcon="modal.firstIcon"/>
                  </div>
           
                
                <v-card-actions class="justify-end">
                    
                  <v-btn variant="tonal" size="x-small" :color="modal.btnCloseColor" @click="dialog = false"
                    >Cerrar
                    <v-icon end icon="mdi-cancel"></v-icon>
                    </v-btn
                  >
                </v-card-actions>
          
              </v-card>
            </template>
          </v-dialog>
        </div>
    </template>
    
    <script setup>
    
    let dialog = ref(false)

    const props = defineProps({
      modal:Object
      
    })

    
    
  </script>