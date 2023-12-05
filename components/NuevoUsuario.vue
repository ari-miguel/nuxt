<template>
  <div>
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          prepend-icon="mdi-account-plus"
          color="success"
          size="x-small"
        >
          Nuevo
        </v-btn>
      </template>
      <template v-slot:default>
        <v-card
          class="mx-auto mt-10"
          rounded="rounded-shaped"
          color="light-green-lighten-5"
          max-width="800"
        >
          <v-card-title>
            <span class="text-h5">Nuevo Usuario</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="formRef">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Nombre*"
                      type="text"
                      required
                      v-model="firstName"
                      :rules=useRulesText(firstName)
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Apellidos*"
                      type="text"
                      required
                      v-model="lastName"
                      :rules=useRulesText(lastName)
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Edad*"
                      type="number"
                      required
                      v-model="age"
                      :rules=useRulesAge(age)
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-container class="">
                  <v-row justify="end">
                    <v-col cols="auto">
                      <v-btn
                        
                        prepend-icon="mdi-content-save-plus"
                        variant="tonal"
                        color="success"
                        @click="crearUsuario"
                      >
                        Guardar
                      </v-btn>
                    </v-col>
                    <v-col cols="auto">
                      <v-btn
                        prepend-icon="mdi-cancel"
                        variant="tonal"
                        color="success"
                        @click="dialog = false"
                      >
                        Cancelar
                      </v-btn>
                    </v-col>
                    
                  </v-row>
                </v-container>
              </v-container>
            </v-form>
            <small>*Campos requeridos</small>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
  </div>

  <div>
    <v-snackbar v-model="snackbar" :color="color">
      {{ text }}

      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>

import {useActionStore} from "../stores/actions"

const store = useActionStore()

const tiempo = Date.now();
const hoy = new Date(tiempo);

let firstName = ref("");
let lastName = ref("");
let age = ref("");
let snackbar = ref(false);
let text = ref("");
let color = ref("");
const formRef = ref(null);
let dialog = ref(false);

const crearUsuario = async () => {
  

  const { valid } = await formRef.value.validate();
  if (valid) {
    
    const usuario = await store.createUser(firstName.value, lastName.value, age.value);
      if(!usuario.mensaje){
        text.value = `Usuario ${usuario.id} ${usuario.firstName} ${usuario.lastName} guardado con exito`;
        const hora = {"hora":hoy.getHours(),"minutos":hoy.getMinutes()}
        const usuarioModificado = {...usuario,...hora}
        store.newsList.push(usuarioModificado)
        snackbar.value = true;
        color.value = "success";
        firstName.value = "";
        lastName.value = "";
        age.value = "";
        formRef.value.reset();
      }else{
        text.value = usuario.mensaje
        snackbar.value = true
        color.value = "warning"
        
      }

      
    }
  
};


const limpiarForm = () => {
  formRef.value.reset();
};
</script>
