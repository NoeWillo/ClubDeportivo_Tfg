<template>
<div>
    <navbar></navbar>
    <tarjeta-noticia
        :titulo="noticia.titulo"
        :autor="noticia.autor"
        :descripcion="noticia.descripcion"
        :categoria="noticia.categoria"
        :image="noticia.image"
        :fecha="noticia.fecha"
        v-for="(noticia, index) in noticias"
        :key="index"
    />
    <pie></pie>
</div>
</template>

<script>
import carrousel from '~/components/index/carrousel.vue'
import navbar from '~/components/generales/navbar.vue'
import tarjeta_noticia from '~/components/tarjetas/tarjeta_noticia.vue'
import pie from '~/components/generales/pie.vue'

import { db } from '~/plugins/firebase'

export default {
  created() {
   const response = db.collection('noticias').get()
    response.then(snapshot => {
      snapshot.forEach((doc) => {
        const noticia = {
          id: doc.id,
          ...doc.data()
        }
        this.noticias.push(noticia)
      })
    }).catch( error => {
        console.log(error)
      })
  },

  data(){
    return{
      noticias: []
    }
  },

   components: {
        carrousel,
        navbar,
        tarjeta_noticia,
        pie
    },
    
}
</script>