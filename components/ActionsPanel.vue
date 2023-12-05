<template>
  <v-container>
    <div style="width:fit-content;" class="mx-auto">
    <v-row no-gutters justify="center" justify-sm="center">
      <v-col lg="4" md="6" sm="12">
        <UpdateActionsComponent />
      </v-col>

      <v-col lg="4" md="6" sm="12">
        <DeleteActionsComponent />
      </v-col>
      <v-col lg="4" md="12" sm="12">
        <NewActionsComponent />
        
      </v-col>
      
      <v-divider color="warning"></v-divider>
    </v-row>
  </div>
  
  

  

</v-container>

</template>



<script setup>



</script>
