<template>
   

    <div class="mt-3">           
   <v-card class="rounded-shaped mx-auto" max-width="600"  max-height="600" color="light-green-lighten-5">
       <v-container>
           <v-row align="center" justify="center">

               <v-col cols="4 ms-3">
                   <v-badge color="success" :content="content">
                       <v-avatar size="50">
                           <v-img alt="Avatar" :src="store.image"></v-img>
                       </v-avatar>

                   </v-badge>


                   <v-divider color="info"></v-divider>
               </v-col>

               <v-col cols="auto">
                   

                       <v-col>
                           <v-row align="center">
                               <v-icon size="large" color="purple-darken-2" icon="mdi-account-tie">
                               </v-icon>
                               <h6>{{ store.firstName }} {{ store.lastName }}</h6>
                           </v-row>
                           <v-row align="center">
                               <v-icon size="large" color="purple-darken-2" icon="mdi-at">
                               </v-icon>
                               <h6>{{ store.email }}</h6>
                           </v-row>

                       </v-col>



                   




               </v-col>

               <v-col cols="auto">
                   

                       <v-sheet color="purple-lighten-5" rounded>
                           <v-col>

                               <v-row align="end">
                                   <v-icon size="large" color="purple-darken-2" icon="mdi-logout" @click="cerrarSesion">
                                   </v-icon>

                               </v-row>

                           </v-col>
                           <v-divider color="info"></v-divider>
                       </v-sheet>
                   


               </v-col>

               <v-col>

               </v-col>

           </v-row>
       </v-container>

     

   </v-card>
</div>



</template>

<script setup>

import { useAuth } from "../stores/auth"
import { useActionStore } from "../stores/actions";
const store = useAuth()
const storeActions = useActionStore()
let content = 0

const cerrarSesion = ()=>{
    store.logout()
    navigateTo("/")
}

content = computed(()=>{
    return storeActions.getDatos()
})



</script>