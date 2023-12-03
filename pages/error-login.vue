<template>

<div class="mx-auto pa-10">
    <v-img
    :width="500"
    aspect-ratio="16/9"
    cover
    src="login.jpg"
></v-img>

<p class="text-center pa-5 text-subtitle" style="color: teal;">Debe hacer login para acceder al panel de administradores</p>
</div>




</template>


<script>

setTimeout(() => {
    navigateTo("/")
}, 5000);

</script>