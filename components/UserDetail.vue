<template>
  <v-dialog width="1000" v-model="dialog">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="ma-2" color="success" size="x-small">
        Detalle
        <v-icon end icon="mdi-account-details"></v-icon>
      </v-btn>
    </template>

    <template v-slot:default>
      <v-card height="auto">
        
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <v-avatar size="x-large" class="ms-5">
                  <v-img :src="item.image" alt="Profile"></v-img>
                </v-avatar>
              </v-col>
            </v-row>
            <v-form ref="formRef" validate-on="lazy">
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nombre"
                    type="text"
                    required
                    v-model="item.firstName"
                    :rules="useRulesText(item.firstName)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    type="text"
                    require
                    label="Apellido"
                    v-model="item.lastName"
                    :rules="useRulesText(item.lastName)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field

                    label="Email"
                    type="email"
                    required
                    v-model="item.email"
                    :rules="useRulesEmail(item.email)"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Teléfono"
                    type="text"
                    required
                    v-model="item.phone"
                    :rules="useRulesText(item.phone)"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Domain"
                    type="text"
                    required
                    v-model="item.domain"
                    :rules="useRulesText(item.domain)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="ms-2">
                <v-icon
                  color="purple-lighten-5"
                  icon="mdi-map-marker-radius"
                  size="x-large"
                ></v-icon>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Dirección"
                    type="text"
                    required
                    v-model="item.address.address"
                    :rules="useRulesText(item.address.address)"
                  ></v-text-field>
                </v-col>
                <v-col cols="6" sm="2">
                  <v-text-field
                    label="Ciudad"
                    type="text"
                    required
                    v-model="item.address.city"
                    :rules="useRulesText(item.address.city)"
                  ></v-text-field>
                </v-col>
                <v-col cols="6" sm="2">
                  <v-text-field
                    label="CP"
                    type="text"
                    required
                    v-model="item.address.postalCode"
                    :rules="useRulesText(item.address.postalCode)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="ms-2">
                <v-icon
                  color="purple-lighten-5"
                  icon="mdi-factory"
                  size="x-large"
                ></v-icon>
              </v-row>
              <v-row>
                <v-col cols="6" sm="6">
                  <v-text-field
                    label="Departamento"
                    type="text"
                    required
                    v-model="item.company.department"
                    :rules="useRulesText(item.company.department)"
                  ></v-text-field>
                </v-col>
                <v-col cols="6" sm="6">
                  <v-text-field
                    label="Puesto"
                    type="text"
                    required
                    v-model="item.company.title"
                    :rules="useRulesText(item.company.title)"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          
        </v-card-text>

        <v-card-actions class="mb-1 mr-5">
          <v-spacer></v-spacer>
          <UpdateConfirm :item="item"/>
          <v-btn
            class="ma-2"
            color="red-accent-4"
            variant="tonal"
            size="small"
            @click="dialog=false"
          >
            Cerrar
            <v-icon end icon="mdi-close-circle"></v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
  <div>
    <v-snackbar v-model="snackbar">
      {{ mensaje }}

      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>


let mensaje = ref("");

let snackbar = ref(false);
let dialog = ref(null);
const formRef = ref(null);
const props = defineProps({
  item: Object,
  
});


</script>
