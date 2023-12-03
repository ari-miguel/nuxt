<template>
   <v-container>
   <v-virtual-scroll
      ref="Scroll"
      height="450"
      :items="lista"
      
      
      
      
    >
      <template v-slot:default="{item,index}">
    <v-card max-width="600" class="mx-auto mb-3">
      
        <v-list lines="three" density="compact" :key="item.id"> 
        <v-list-item
          
          :title="item.firstName"
          :subtitle="item.lastName"
          color="red"
          :value="index"
          
        >
          <template v-slot:prepend>
            <v-avatar color="grey-lighten-1" size="small">
              <v-img
          lazy-src="https://picsum.photos/id/11/100/60"
          :src="item.image"
          alt="profile"
        ></v-img>
            </v-avatar>
            
          </template>
    
          <template v-slot:append>
            <UserDetail :item="item"/>
            <DeleteConfirm :item="item" :index="index"  :lista="lista"/>
          </template>
          <v-divider color="warning"></v-divider>
        </v-list-item>
        

       
        </v-list>
        
    </v-card>

        </template>
        </v-virtual-scroll>
    
      </v-container>
       
      
        
        
        
</template>

<script setup>

const props = defineProps({
  lista:Array
})




</script>