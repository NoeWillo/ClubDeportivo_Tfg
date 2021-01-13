<template>
    <div>
        <navbar/>
        <h1>Soy proteccion_datos</h1>
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