<template>
    <div>
       <navbar></navbar>
       <div>
       <div class="viewport">
          <div class="title">
            <h1>Patrocinadores</h1> 
          </div>
          <div class="cards">
          <tarjeta-patrocinador
            :name="patrocinador.name"
            :image="patrocinador.image"
            :descripcion="patrocinador.descripcion"
            :url="patrocinador.url"
            :instagram="patrocinador.instagram"
            :twitter="patrocinador.twitter"
            :facebook="patrocinador.facebook"
            v-for="(patrocinador, index) in patrocinadores"
            :key="index"
          />
       </div>
       </div>
       </div>
       <pie></pie> 
    </div>
</template>

<script>
import navbar from '~/components/generales/navbar.vue'
import pie from '~/components/generales/pie.vue'

import {db} from '~/plugins/firebase'

import tarjeta_patrocinador from '~/components/tarjetas/tarjeta_patrocinador.vue'

export default {
created() {
   const response = db.collection('patrocinadores').get()
    response.then(snapshot => {
      snapshot.forEach((doc) => {
        const patrocinador = {
          id: doc.id,
          ...doc.data()
        }
        this.patrocinadores.push(patrocinador)
      })
    }).catch( error => {
        console.log(error)
      })
  },

  data(){
    return{
      patrocinadores: []
    }
  },
  components: {
      navbar,
      pie,
      tarjeta_patrocinador
    },
    
}
</script>Navbar