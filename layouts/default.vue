<template>
  <v-app class="rounded rounded-md">
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
          prepend-icon="mdi-account-key"
          title="Login"
          subtitle=""
        ></v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-city" title="Admin" value="Admin" to="/admin"></v-list-item>
        
      </v-list>
    </v-navigation-drawer>
    
<v-main>
      <slot></slot>
      
    </v-main>
    <FooterComponent class="mt-1"/>
  </v-app>
</template>


<script setup>

const drawer = ref(false)



</script>