<template>
   <v-container>
   <div>
        
      <v-row justify-sm-start>
        <v-col cols="12" sm="6" md="4" v-for="item,index in lista" :key="item.id" >
      
      
        <v-card color="light-green-lighten-5" class="mx-auto" width="250">
          <div>
            <v-list color="light-green-lighten-5">
              <v-list-item
              
                color="primary"
                :prepend-avatar="item.image"
                :title="item.firstName + ' ' + item.lastName"
                :subtitle="item.email"
              >
                
              </v-list-item>
            </v-list>

            <v-divider></v-divider>
            <div>
            <v-list :lines="false" density="compact" nav>
              <v-list-item color="primary">
                <template v-slot:prepend>
                  <v-icon icon="mdi-phone" color="warning"></v-icon>
                </template>

                <v-list-item-title>
                  <p class="text-subtitle-2">{{ item.phone }}</p>
                </v-list-item-title>
              </v-list-item>
              <v-list-item color="primary">
                <template v-slot:prepend>
                  <v-icon icon="mdi-factory" color="warning"></v-icon>
                </template>

                <v-list-item-title>
                  <p class="text-subtitle-2">{{ item.company.name }}</p>
                </v-list-item-title>
              </v-list-item>
              <v-list-item color="primary">
                <template v-slot:prepend>
                  <v-icon icon="mdi-account-hard-hat" color="warning"></v-icon>
                </template>
                

                <v-list-item-title>
                  <p class="text-subtitle-2">{{ item.company.title }}</p>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </div>

          <div class="pa-4">
            <v-row justify="center" class="pa-1">
         
              <UserDetail :item="item"/>
              <DeleteConfirm :item="item" :index="index"/>
              
            </v-row>
          </div>
          </div>
        </v-card>
        
    </v-col>
    </v-row>
  </div>
</v-container>

  
    
   
</template>

<script setup>

const props = defineProps({
  lista:Array,
  
})




</script>
