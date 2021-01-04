<template>
<div>
    <navbar></navbar>
    <carrousel></carrousel>
    <div style="margin-top:100px; margin-left:100px">
        <a href="/admin">
            <button class="button is-black">Admin</button>
        </a>
    </div>
    <noticias></noticias>
</div>
</template>

<script>
import carrousel from '@/components/index/carrousel.vue'
import navbar from '@/components/index/navbar.vue'
import noticias from '~/components/index/noticias.vue'

export default {
    components: {
        carrousel,
        navbar,
        noticias,
    }
}
</script>