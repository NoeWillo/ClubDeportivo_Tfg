<template>
  <div class="section" v-if="noticia">
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
      noticia: null
    }
  },
  created() {
    const response = db.collection('noticias').doc(this.$route.params.id).get()
    response.then(doc => {
      if(doc.exists) {
        this.noticia = doc.data()
      }
    })
  },
  methods:{
    onUpdateButton() {
      const reference = db.collection('noticias').doc(this.$route.params.id)
        const response = reference.update(this.noticia)
          response.then(() => {
            this.$router.back()
          }).catch(error => {
            console.log(error)
          })
    }
  }
}
</script>
