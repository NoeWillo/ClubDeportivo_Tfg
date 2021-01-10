<template>
  <div>
    <div class="container">
      <section class="section">
        <div class="columns is-multiline">
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
                  class="jugador-card"
           />
       </div>
      </section>
    </div>
  </div>
</template>

<script>
import tarjeta_jugador from '@/components/tarjetas/tarjeta_jugador'
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
   tarjeta_jugador
  }
}
</script>

<style>
</style>