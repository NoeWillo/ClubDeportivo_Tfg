<template>
  <div class="section">
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
                  v-model="producto.precio"
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
                  @click.prevent="onSubmitButton"
                >
                  Crear
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
      producto: {
        name: null,
        precio: 0,
        descripcion: null,
        clave:null,
        image:null
      }
    }
  },
  watch: {
    clave() {
      this.producto.clave = this.clave
    }
  },
  computed: {
    clave() {
      if (this.producto.name) {
        return this.producto.name.replace(/ /g, '-')
      } else {
        return null
      }
    }
  },
  methods: {
    onSubmitButton() {
      const response = db.collection('productos_tienda').add(this.producto)
        response.then(() => {
         this.$router.back()
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>