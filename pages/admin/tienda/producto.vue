<template>
  <div class="section" v-if="producto">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="columns">
          <div class="column">
            <h2 class="title is-2">Nuevo producto</h2>
          </div>
        </div>
        <div class="columns box">
          <div class="column">
            <div class="field">
              <label class="label">Nombre</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  v-model="producto.name"
                  placeholder="Nombre del producto"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Clave</label>
              <div class="control">
                <input class="input" type="text" :placeholder="clave" disabled />
              </div>
            </div>
            <div class="field">
              <label class="label">Imagen</label>
              <div class="control">
                <input
                  v-model="producto.image"
                  class="input"
                  type="text"
                  placeholder="Imagen del producto"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Precio</label>
              <div class="control">
                <input
                  v-on="producto.precio"
                  class="input"
                  type="number"
                  placeholder="10"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Descripcion</label>
              <div class="control">
                <textarea
                  v-model="producto.descripcion"
                  class="textarea"
                  type="textarea"
                  rows="10"
                  placeholder="Descripcion del producto"
                />
              </div>
            </div>
            <div class="field">
              <div class="control has-text-centered">
                <button
                  class="button is-danger"
                  type="button"
                  @click="$router.back()"
                >
                  Cancelar
                </button>
                <button
                  class="button is-link"
                  type="button"
                  @click.prevent="onUpdateButton"
                >
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase'
export default {
  data() {
    return {
      producto: null
    }
  },
  created() {
    const response = db.collection('productos_tienda').doc(this.$route.query.id).get()
    response.then(doc => {
      if(doc.exists) {
        this.producto = doc.data()
      }
    })
  },
  methods:{
    onUpdateButton() {
      const reference = db.collection('productos_tienda').doc(this.$route.query.id)
        const response = reference.update(this.producto)
          response.then(() => {
            this.$router.back()
          }).catch(error => {
            console.log(error)
          })
    }
  }
}
</script>
