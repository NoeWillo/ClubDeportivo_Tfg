<template>
  <div>
    {{ $route.params.id }}
    {{ cp }}
  </div>
</template>

<script>
import { db } from '~/plugins/firebase'
export default {
  data() {
    return {
      cp: null
    }
  },
  created() {
    const response = db.collection('primer_equipo_cuerpo_tecnico').doc(this.$route.params.id).get()
    response.then(doc => {
      if(doc.exists) {
        this.cp = doc.data()
      }
    })
  }
}
</script>
