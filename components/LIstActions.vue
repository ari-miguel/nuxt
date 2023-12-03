<template>
    <v-virtual-scroll ref="Scroll" height="450" :items="list">
      <template v-slot:default="{ item, index }">
        <v-list lines="three" :key="item.id" :bg-color="color">
          <div mb-3>
            <v-list-item
              :title="item.firstName"
              :subtitle="item.lastName"
              :value="index"
            >
              <template v-slot:prepend>
                <v-avatar color="grey-lighten-1" size="small">
                  <v-icon
                    :icon="firstIcon"
                    color="white"
                    size="large"
                  ></v-icon>
                </v-avatar>
              </template>
  
              <template v-slot:append>
                <v-btn
                class="ma-2"
                :color="colorBtn"
                >
             {{ item.hora }} : {{ item.minutos }}
            <v-icon
              end
              icon="mdi-arrow-right-bottom-bold"
          ></v-icon>
        </v-btn>
                
                <v-icon
                  icon="mdi-check-circle-outline"
                  color="white"
                  size="large"
                ></v-icon>
              </template>
            </v-list-item>
            <v-divider color="white"></v-divider>
          </div>
        </v-list>
      </template>
    </v-virtual-scroll>
  </template>
  
  <script setup>
  
  const props = defineProps({
    list:Array,
    color:String,
    colorBtn:String,
    firstIcon:String
  })
  
  
  </script>