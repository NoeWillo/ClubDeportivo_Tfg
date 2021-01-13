<template>
    <div>
       <navbar></navbar>
       <tarjeta-patrocinador
       />
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
        const item = {
          id: doc.id,
          ...doc.data()
        }
        this.patrocinadores.push(item)
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