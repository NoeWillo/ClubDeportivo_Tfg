<template>
  <div>
    <div>
     <div class="cardss">
          <tarjeta-jugador
                  :name="jugador.name"
                  :comentario="jugador.comentario"
                  :posicion="jugador.posicion"
                  :peso="jugador.peso"
                  :clave="jugador.clave"
                  :image="jugador.image"
                  :lugar_nacimiento="jugador.lugar_nacimiento"
                  :fecha_nacimiento="jugador.fecha_nacimiento"
                  :altura="jugador.altura"
                  v-for="(jugador, index) in jugadores"
                  :key="index"
           />
     </div>
     </div>
     <pie></pie>
  </div>
</template>

<script>
import tarjeta_jugador from '@/components/tarjetas/tarjeta_jugador.vue'

import { db } from '~/plugins/firebase'
import pie from '~/components/generales/pie.vue'

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
   tarjeta_jugador,
    pie
  }
}
</script>

<style>
</style>