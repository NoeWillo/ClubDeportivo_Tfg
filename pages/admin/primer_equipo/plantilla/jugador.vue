<template>
  <div class="section" v-if="jugador">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="columns">
          <div class="column">
            <h2 class="title is-2">Nuevo Jugador</h2>
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
                  v-model="jugador.name"
                  placeholder="Nombre del jugador"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Clave</label>
              <div class="control">
                <input class="input" type="text" :placeholder="jugador.clave" disabled />
              </div>
            </div>
            <div class="field">
              <label class="label">Imagen</label>
              <div class="control">
                <input
                  v-model="jugador.image"
                  class="input"
                  type="text"
                  placeholder="Imagen del jugador"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Fecha Nacimiento</label>
              <div class="control">
                <input
                  v-model="jugador.fecha_nacimiento"
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
                  v-model="jugador.altura"
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
                  v-model="jugador.peso"
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
                  <select v-model="jugador.lugar_nacimiento">
                    <option></option>
                    <option value="Madrid">Madrid</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Valencia">Valencia</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Posicion</label>
              <div class="control">
                <div class="select">
                  <select v-model="jugador.posicion">
                    <option></option>
                    <option value="Delantero">Delantero</option>
                    <option value="Centrocampista">Centrocampista</option>
                    <option value="Defensa">Defensa</option>
                    <option value="Portero">Portero</option>
                  </select>
                </div>
              </div>
            </div>
             <div class="field">
              <label class="label">Equipo</label>
              <div class="control">
                  <input
                  v-model="jugador.equipo"
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
                  v-model="jugador.comentario"
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
      jugador: null
    }
  },
  created() {
    const response = db.collection('primer_equipo_jugadores').doc(this.$route.query.id).get()
    response.then(doc => {
      if(doc.exists) {
        this.jugador = doc.data()
      }
    })
  },
  methods:{
    onUpdateButton() {
      const reference = db.collection('primer_equipo_jugadores').doc(this.$route.query.id)
        const response = reference.update(this.jugador)
          response.then(() => {
            this.$router.back()
          }).catch(error => {
            console.log(error)
          })
    }
  }
}
</script>
