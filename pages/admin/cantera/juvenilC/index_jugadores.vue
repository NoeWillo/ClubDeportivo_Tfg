<template>
  <div>
    <section class="section" >
      <div class="columns">
        <div class="column">
          <h2 class="title is-2">Jugadores</h2>
        </div>
      </div>
      <div class="table-container">
        <table class="table is-fullwidth is-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre del jugador</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in jugadores" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>
                <nuxt-link class="button" :to="{path:'/admin/cantera/juvenilC/jugador', query: {id : item.id }}" >
                  Editar
                </nuxt-link>
                <button class="button is-danger" @click="deleteDocument(item.id)">
                  Borrar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase'
export default {
    data() {
        return {
        jugadores: []
        }
    },

    created() {
       this.getDocuments()
    },

    methods: {
      getDocuments(){
        this.jugadores = []
        const response = db.collection('cantera_juvenilC').get()
          response.then((snapshot) => {
              snapshot.forEach((doc) => {
                  const jugador = { 
                      id:doc.id,
                      ...doc.data()
                  }
                  this.jugadores.push(jugador)
                  })
              })
              .catch((error) => {
              console.log(error)
              })
      },

      deleteDocument(id){
        const reference = db.collection('cantera_juvenilC').doc(id)
          reference.delete()
          this.getDocuments()
      }
    }

    

}
</script>