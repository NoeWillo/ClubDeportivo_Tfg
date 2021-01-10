<template>
  <div>
    <section class="section" >
      <div class="columns">
        <div class="column">
          <h2 class="title is-2">Noticias</h2>
        </div>
      </div>
      <div class="table-container">
        <table class="table is-fullwidth is-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre de la noticia</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in noticias" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.titulo }}</td>
              <td>
                <nuxt-link class="button" :to="item.id" >
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
        noticias: []
        }
    },

    created() {
       this.getDocuments()
    },

    methods: {
      getDocuments(){
        this.noticias = []
        const response = db.collection('noticias').get()
          response.then((snapshot) => {
              snapshot.forEach((doc) => {
                  const noticia = { 
                      id:doc.id,
                      ...doc.data()
                  }
                  this.noticias.push(noticia)
                  })
              })
              .catch((error) => {
              console.log(error)
              })
      },

      deleteDocument(id){
        const reference = db.collection('noticias').doc(id)
          reference.delete()
          this.getDocuments()
      }
    }

    

}
</script>