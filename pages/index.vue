<template>
<div>
    <navbar></navbar>
    <carrousel></carrousel>
    <pie></pie>
</div>
</template>

<script>
import carrousel from '~/components/index/carrousel.vue'
import navbar from '~/components/generales/navbar.vue'
import noticias from '~/components/tarjetas/tarjeta_noticia.vue'
import pie from '~/components/generales/pie.vue'

export default {
    components: {
        carrousel,
        navbar,
        noticias,
        pie
    }
}
</script>