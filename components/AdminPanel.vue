<template>
  <div class="mt-5 mb-3">
    <v-card max-width="800" class="mx-auto pa-2 rounded-lg">
      <v-row justify="center">
        <v-col cols="auto">
          <NuevoUsuario />
        </v-col>
        <v-col cols="auto">
          <v-btn
            prepend-icon="mdi-account-multiple"
            color="success"
            size="x-small"
            @click="paginator = !paginator"
          >
            Ver Usuarios
          </v-btn>
        </v-col>

      </v-row>
    </v-card>
  </div>

  <div v-show="paginator">
    <PaginatorComponent/>
  </div>
  
 
</template>

<script setup>
let paginator = ref(false)
let cargando = ref(false);



</script>
