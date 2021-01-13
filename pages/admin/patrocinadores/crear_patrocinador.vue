<template>
  <div class="section">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="columns">
          <div class="column">
            <h2 class="title is-2">Nuevo Patrocinador</h2>
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
                  v-model="patrocinador.name"
                  placeholder="Nombre del patrocinador"
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
                  v-model="patrocinador.image"
                  class="input"
                  type="text"
                  placeholder="Imagen del patrocinador"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">URL del patrocinador</label>
              <div class="control">
                <input
                  v-model="patrocinador.url"
                  class="input"
                  type="url"
                  placeholder="URL del Patrocinador"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">URL de Instagram del patrocinador</label>
              <div class="control">
                <input
                  v-model="patrocinador.instagram"
                  class="input"
                  type="url"
                  placeholder="URL de Instagram del patrocinador"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">URL del Facebook del patrocinador</label>
              <div class="control">
                <input
                  v-model="patrocinador.facebook"
                  class="input"
                  type="url"
                  placeholder="URL del Facebook del patrocinador"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">URL del Twitter del patrocinador</label>
              <div class="control">
                <input
                  v-model="patrocinador.twitter"
                  class="input"
                  type="url"
                  placeholder="URL del Twitter del patrocinador"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Descripcion</label>
              <div class="control">
                <textarea
                  v-model="patrocinador.descripcion"
                  class="textarea"
                  type="textarea"
                  rows="10"
                  placeholder="Descripcion del patrocinador"
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
      patrocinador: {
        name: null,
        url: null,
        descripcion: null,
        clave:null,
        image:null,
        instagram:null,
        facebook:null,
        twitter:null
      }
    }
  },
  watch: {
    clave() {
      this.patrocinador.clave = this.clave
    }
  },
  computed: {
    clave() {
      if (this.patrocinador.name) {
        return this.patrocinador.name.replace(/ /g, '-')
      } else {
        return null
      }
    }
  },
  methods: {
    onSubmitButton() {
      const response = db.collection('patrocinadores').add(this.patrocinador)
        response.then(() => {
         this.$router.back()
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>