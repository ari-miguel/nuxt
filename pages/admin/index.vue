<template>
  <div>
    <AdminCard />
  </div>

  <div>
    <ActionsPanel />
  </div>

  <div>
    <AdminPanel />
  </div>
 
  <div>
    
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'admin',
  middleware:"auth"
})

useHead({
  title: 'Administración',
  
  meta: [
    { name: 'description', content: 'Administracion usuarios' },
    
  ],

  
})

</script>
