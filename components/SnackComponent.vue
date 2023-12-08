<template>
 <div>
        <v-snackbar v-model="props.snackbar" :color="props.color">
            {{ mensaje }}

            <template v-slot:actions>
                <v-btn color="pink" variant="text" @click="cambiarSnackBar">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>

</template>


<script setup>


let activo = ref(false)
const props = defineProps({
    mensaje:String,
    snackbar:Boolean,
    color:String,
    cambiarSnackBar:Function
    
})

activo.value = false














    

</script>