<template>
  <div>
      {{jugadores}}
    <section class="section" >
      <div class="columns">
        <div class="column">
          <h2 class="title is-2">Resturantes</h2>
        </div>
      </div>
      <div class="table-container">
        <table class="table is-fullwidth is-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre del jugador</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in jugadores" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>
                <nuxt-link class="button" :to="item.id" >
                  Edit
                </nuxt-link>
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
        jugadores: []
        }
    },

    created() {
        const response = db.collection('primer_equipo_jugadores').get()
        response
            .then((snapshot) => {
            snapshot.forEach((doc) => {
                const jugador = {
                    id:doc.id,
                    ...doc.data()
                }
                this.jugadores.push(jugador)
                })
            })
            .catch((error) => {
            console.log(error)
            })
    }

    

}
</script>