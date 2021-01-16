<template>
    <div>
        <navbar/>
        <div class="content">
            <h1>Estadio</h1>
            <img src="~/assets/instalaciones/estadio.jpg" alt="estadio.jpg" class="img">
            <h1>Vestuarios</h1>
            <img src="~/assets/instalaciones/vestuario.jpg" alt="vestuarios.jpg" class="img">
            <h1>Palco Vip</h1>
            <img src="~/assets/instalaciones/palco.jpg" alt="palco.jpg" class="img">
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
        pie
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

.img{
    width: 700px;
    height: 500px;
}
</style>