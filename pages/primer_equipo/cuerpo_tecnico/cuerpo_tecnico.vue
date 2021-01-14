<template>
  <div>
    <div>
     <div class="cardss">
          <tarjeta-ct
                  :name="ct.name"
                  :comentario="ct.comentario"
                  :posicion="ct.posicion"
                  :peso="ct.peso"
                  :clave="ct.clave"
                  :image="ct.image"
                  :lugar_nacimiento="ct.lugar_nacimiento"
                  :fecha_nacimiento="ct.fecha_nacimiento"
                  :altura="ct.altura"
                  :id="ct.id"
                  v-for="(ct, index) in cuerpo_tecnico"
                  :key="index"
           />
     </div>
     </div>
     <pie></pie>
  </div>
</template>

<script>
import tarjeta_ct from '@/components/tarjetas/tarjeta_ct.vue'

import { db } from '~/plugins/firebase'
import pie from '~/components/generales/pie.vue'
import navbar from '~/components/generales/navbar.vue'

export default {
  created() {
   const response = db.collection('primer_equipo_ct').get()
  response.then(snapshot => {
      snapshot.forEach((doc) => {
        const ct = {
          id: doc.id,
          ...doc.data()
        }
        this.cuerpo_tecnico.push(ct)
      })
    }).catch( error => {
        console.log(error)
      })
  },

  data(){
    return{
      cuerpo_tecnico: []
    }
  },

  components: {
   tarjeta_ct,
    pie
  }
}
</script>

<style>
</style>