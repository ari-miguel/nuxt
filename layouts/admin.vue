<template>
    <v-app lang="es" class="rounded rounded-md">
      <v-app-bar
        color="light-green-lighten-5"
        
        density="compact"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Prueba</v-app-bar-title>

        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>
      <v-navigation-drawer
      v-model="drawer" temporary
        
      >
        <template v-slot:prepend>
          <v-list-item
            lines="two"
            :prepend-avatar="store.image"
            :title="store.firstName"
            :subtitle="store.lastName"
          ></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-account-off" title="Cerrar Sesion" value="Logout" @click="logout"></v-list-item>
          
        </v-list>
      </v-navigation-drawer>
      
  <v-main>
        <slot></slot>
        
      </v-main>
      <FooterComponent class="mt-1"/>
    </v-app>
  </template>


<script setup>
import {useAuth} from "../stores/auth"
const store = useAuth()
const drawer = ref(null)
let items =  [
        { text: 'Login', icon: 'mdi-folder',page:"/" },
        { text: 'Admin', icon: 'mdi-account-multiple',page:"/admin" },
        
      ]
const logout = ()=>{
  store.token = null
  navigateTo("/")
}


</script>