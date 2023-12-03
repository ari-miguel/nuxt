<template>

  <NuxtLayout>
    <v-app lang="es">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </v-app>
  </NuxtLayout>

  

</template>


<script setup>
useHead({
  title: 'Aplicación de Prueba',
  
  meta: [
    { name: 'description', content: 'Aplicación gestión usuarios' },
    
  ],

  
})

</script>


