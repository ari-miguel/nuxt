<template>
    
    <v-container class="mt-5"></v-container>
    <v-container>
        <v-card class="mx-auto" width="300" :style="alertStyle" color="light-green-lighten-5">
            <v-card-title><span class="text-center" style="color: purple-lighten-1">Login</span></v-card-title>
            <v-container>
                <v-row justify="center">
                    <v-avatar rounded="1" :color="colorStyle" size="x-large">
                        <v-icon :icon="icon"></v-icon>
                    </v-avatar>
                </v-row>
            </v-container>
            <v-card-text>
                <form>
                    <v-text-field v-model="nombre" label="Nombre">
                    </v-text-field>
                    <v-text-field v-model="clave" label="Password"></v-text-field>
                    <v-row justify="center" class="mb-2 mt-2">
                        <v-btn class="me-4" @click="submitForm"> submit </v-btn>
                        <v-btn> clear </v-btn>
                    </v-row>
                </form>
            </v-card-text>
        </v-card>
    </v-container>
    <div>
        <v-snackbar v-model="snackbar" color="warning">
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

import {useAuth} from "../stores/auth"

const store = useAuth()


let alertStyle = ref({
    "border-radius": "10px",
    border: "1px solid #ba68c8",
});

let colorStyle = ref("purple-lighten-2");
let icon = ref("mdi-account-lock");
let snackbar = ref(false);
let text = ref("");
let token = ref(null);
let nombre = ref("kminchelle")
let clave = ref("0lelplR")
let firstname = ref("")
let lastname = ref("")
let userEmail = ref("")

preloadRouteComponents('/admin')

async function submitForm() {
    let login = ref(true);

    
    const user = await store.auth(nombre.value, clave.value);
    let keys = Object.keys(user);
    

    for (let item in keys) {
        if (keys[item] == "mensaje") {
            login.value = false;
            break;
        }
    }
    if (login.value) {
        
        token.value = store.token;
        firstname.value = store.firstName
        lastname.value = store.lastName
        userEmail.value = store.email
        
        actualizarBorderStyleSuccess();
        icon.value = "mdi-account-lock-open";
        text.value = "Usuario autenticado con exito";
        snackbar.value = true;
        setTimeout(() => {
            navigateTo("/admin")    
        }, 2000);
        
    } else {
        actualizarBorderStyleAlert();
        text.value = user.mensaje;
        snackbar.value = true;
    }
}

const actualizarBorderStyleAlert = () => {
    alertStyle.value = {
        "border-radius": "10px",
        border: "2px solid #D50000",
    };
    colorStyle.value = "red-accent-4";
};
const actualizarBorderStyleSuccess = () => {
    alertStyle.value = {
        "border-radius": "10px",
        border: "2px solid #1B5E20",
    };
    colorStyle.value = "green-darken-4";
};

</script>


<style scoped>
.card-border {
    border-radius: 10px;
    border: 1px solid #ba68c8;
}
</style>