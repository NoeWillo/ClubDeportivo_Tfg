<template>
    <div>
        <navbar/>
        <div class="content">
            <h1>Contacto con el club</h1>
            <p><b>Correo:</b>correo-contacto@club.es</p>
            <p><b>Horario de oficina:</b> Lunes a Viernes de 15h a 21h</p>
            <p><b>Mediante nuestras redes sociales:</b></p>
            <p><b>Instagram:</b>@clubdeportivo <a href="#">Enlace</a></p>
            <p><b>Twitter:</b>@clubdeportivo <a href="#">Enlace</a></p>
            <p><b>Facebook:</b>ClubDeportivo <a href="#">Enlace</a></p>

        </div>
        <pie/>
    </div>
</template>

<script>
import navbar from '~/components/generales/navbar.vue'
import pie from '~/components/generales/pie.vue'
export default {
    components:{
        navbar,
        pie,
        navbar
    }
}
</script>


<style>
.content{
    text-align: center;
    width: 1000px;
    margin-left: 400px;
    margin-top: 10px;
    background-color: white;
}

</style>