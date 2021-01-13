<template>
<div>
    <navbar/>
    <tarjeta-ct
        :name="jugador.name"
        :posicion="jugador.posicion"
        v-for="(jugador, index) in jugadores"
        :key="index"
    />
    <pie/>
</div>
</template>

<script>
import navbar from '~/components/generales/navbar.vue'
import pie from '~/components/generales/pie.vue'
import tarjeta_ct from '~/components/tarjetas/tarjeta_ct.vue'


import { db } from '~/plugins/firebase'


export default {
    created() {
   const response = db.collection('primer_equipo_jugadores').get()
  response.then(snapshot => {
      snapshot.forEach((doc) => {
        const jugador = {
          id: doc.id,
          ...doc.data()
        }
        this.jugadores.push(jugador)
      })
    }).catch( error => {
        console.log(error)
      })
  },

  data(){
    return{
      jugadores: []
    }
  },

  components: { 
      navbar,
      pie,
     tarjeta_ct
    },
    
}
</script>