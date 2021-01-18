<template>
  <div>
    <section class="section" >
      <div class="columns">
        <div class="column">
          <h2 class="title is-2">Productos</h2>
        </div>
      </div>
      <div class="table-container">
        <table class="table is-fullwidth is-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre del producto</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in productos" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>
                <nuxt-link class="button" :to="{path:'/admin/tienda/producto', query: {id : item.id }}" >
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
        productos: []
        }
    },

    created() {
       this.getDocuments()
    },

    methods: {
      getDocuments(){
        this.productos = []
        const response = db.collection('productos_tienda').get()
          response.then((snapshot) => {
              snapshot.forEach((doc) => {
                  const producto = { 
                      id:doc.id,
                      ...doc.data()
                  }
                  this.productos.push(producto)
                  })
              })
              .catch((error) => {
              console.log(error)
              })
      },

      deleteDocument(id){
        const reference = db.collection('productos_tienda').doc(id)
          reference.delete()
          this.getDocuments()
      }
    }

    

}
</script>