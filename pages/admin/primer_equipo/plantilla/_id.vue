<template>
  <div>
    {{ $route.params.id }}
    {{ jugador }}
  </div>
</template>

<script>
import { db } from '~/plugins/firebase'
export default {
  data() {
    return {
      jugador: null
    }
  },
  created() {
    const response = db.collection('primer_equipo_jugadores').doc(this.$route.params.id).get()
    response.then(doc => {
      if(doc.exists) {
        this.jugador = doc.data()
      }
    })
  }
}
</script>
