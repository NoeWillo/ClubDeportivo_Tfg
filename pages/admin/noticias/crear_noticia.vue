<template>
  <div class="section">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="columns">
          <div class="column">
            <h2 class="title is-2">Nueva Noticia</h2>
          </div>
        </div>
        <div class="columns box">
          <div class="column">
            <div class="field">
              <label class="label">Titulo</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  v-model="noticia.titulo"
                  placeholder="titulo de la noticia"
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
                  v-model="noticia.image"
                  class="input"
                  type="text"
                  placeholder="Imagen del noticia"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Fecha</label>
              <div class="control">
                <input
                  v-model="noticia.fecha"
                  class="input"
                  type="date"
                  placeholder="Fecha de la noticia"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Descripcion</label>
              <div class="control">
                <textarea
                  v-model="noticia.descripcion"
                  class="textarea"
                  type="textarea"
                  rows="10"
                  placeholder="Descripcion del noticia"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Autor</label>
              <div class="control">
                <input
                  v-model="noticia.autor"
                  class="input"
                  type="text"
                  placeholder="Autor de la noticia"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Categoría</label>
              <div class="control">
                <input
                  v-model="noticia.categoria"
                  class="input"
                  type="text"
                  placeholder="Categoría de la imagen"
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
      noticia: {
        titulo: null,
        fecha: null,
        descripcion: null,
        clave:null,
        image:null,
        autor:null,
        categoria:null
      }
    }
  },
  watch: {
    clave() {
      this.noticia.clave = this.clave
    }
  },
  computed: {
    clave() {
      if (this.noticia.name) {
        return this.noticia.name.replace(/ /g, '-')
      } else {
        return null
      }
    }
  },
  methods: {
    onSubmitButton() {
      const response = db.collection('noticias').add(this.noticia)
        response.then(() => {
         this.$router.back()
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>