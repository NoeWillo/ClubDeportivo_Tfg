<template>
  <div>
    <section class="section" >
      <div class="columns">
        <div class="column">
          <h2 class="title is-2">Patrocinadores</h2>
        </div>
      </div>
      <div class="table-container">
        <table class="table is-fullwidth is-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre de la patrocinador</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in patrocinadores" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>
                <nuxt-link class="button" :to="{path:'/admin/patrocinadores/patrocinador', query: {id : item.id }}" >
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
        patrocinadores: []
        }
    },

    created() {
       this.getDocuments()
    },

    methods: {
      getDocuments(){
        this.patrocinadores = []
        const response = db.collection('patrocinadores').get()
          response.then((snapshot) => {
              snapshot.forEach((doc) => {
                  const patrocinador = { 
                      id:doc.id,
                      ...doc.data()
                  }
                  this.patrocinadores.push(patrocinador)
                  })
              })
              .catch((error) => {
              console.log(error)
              })
      },

      deleteDocument(id){
        const reference = db.collection('patrocinadores').doc(id)
          reference.delete()
          this.getDocuments()
      }
    }

    

}
</script>