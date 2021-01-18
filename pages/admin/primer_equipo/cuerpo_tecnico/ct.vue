<template>
  <div class="section" v-if="ct">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="columns">
          <div class="column">
            <h2 class="title is-2">Nuevo Cuerpo Técnico</h2>
          </div>
        </div>
        <div class="columns box">
          <div class="column">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  v-model="ct.name"
                  placeholder="Nombre del ct"
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
                  v-model="ct.image"
                  class="input"
                  type="text"
                  placeholder="Imagen del ct"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Fecha Nacimiento</label>
              <div class="control">
                <input
                  v-model="ct.fecha_nacimiento"
                  class="input"
                  type="text"
                  placeholder="Fecha de nacimiento"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Altura</label>
              <div class="control">
                <input
                  v-model="ct.altura"
                  class="input"
                  type="text"
                  placeholder="Altura en cm"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Peso</label>
              <div class="control">
                <input
                  v-model="ct.peso"
                  class="input"
                  type="text"
                  placeholder="Peso en kg"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Lugar Nacimiento</label>
              <div class="control">
                <div class="select">
                  <select v-model="ct.lugar_nacimiento">
                    <option></option>
                    <option value="Madrid">Madrid</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Valencia">Valencia</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Delegacion</label>
              <div class="control">
                <div class="select">
                  <select v-model="ct.delegacion">
                    <option></option>
                    <option value="Entrenador">Entrenador</option>
                    <option value="2ºEntrenador">2ºEntrenador</option>
                    <option value="3ºEntrenador">3ºEntrenador</option>
                    <option value="Preparador Físico">Preparador Físico</option>
                    <option value="Psicólogo">Psicólogo</option>
                    <option value="Analista">Analista</option>
                    <option value="Utillero">Utillero</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Equipo</label>
              <div class="control">
                  <input
                  v-model="ct.equipo"
                  class="input"
                  type="text"
                  placeholder="Equipo actual"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Comentario</label>
              <div class="control">
                <textarea
                  v-model="ct.comentario"
                  class="textarea"
                  type="textarea"
                  rows="10"
                  placeholder="text"
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
                  Cancel
                </button>
                <button
                  class="button is-link"
                  type="button"
                  @click.prevent="onSubmitButton"
                >
                  Save
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
      ct: null
    }
  },
  created() {
    const response = db.collection('primer_equipo_ct').doc(this.$route.query.id).get()
    response.then(doc => {
      if(doc.exists) {
        this.ct = doc.data()
      }
    })
  },
  methods:{
    onUpdateButton() {
      const reference = db.collection('primer_equipo_ct').doc(this.$route.query.id)
        const response = reference.update(this.ct)
          response.then(() => {
            this.$router.back()
          }).catch(error => {
            console.log(error)
          })
    }
  }
}
</script>
