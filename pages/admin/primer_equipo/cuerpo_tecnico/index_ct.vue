<template>
  <div>
    <section class="section" >
      <div class="columns">
        <div class="column">
          <h2 class="title is-2">Cuerpo Técnico</h2>
        </div>
      </div>
      <div class="table-container">
        <table class="table is-fullwidth is-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre del persona</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in ct" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>
                <nuxt-link class="button" :to="{path:'/admin/primer_equipo/cuerpo_tecnico/ct', query: {id : item.id }}" >
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
        ct: []
        }
    },

    created() {
       this.getDocuments()
    },

    methods: {
      getDocuments(){
        this.ct = []
        const response = db.collection('primer_equipo_ct').get()
          response.then((snapshot) => {
              snapshot.forEach((doc) => {
                  const jugador = { 
                      id:doc.id,
                      ...doc.data()
                  }
                  this.ct.push(jugador)
                  })
              })
              .catch((error) => {
              console.log(error)
              })
      },

      deleteDocument(id){
        const reference = db.collection('primer_equipo_ct').doc(id)
          reference.delete()
          this.getDocuments()
      }
    }

    

}
</script>