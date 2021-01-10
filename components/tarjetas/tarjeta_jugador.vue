<template>
  <div class="card" style="width:400px;">
    <div class="card-image">
      <figure class="image">
        <img :src="image" alt="jugador.jpg" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4 jugador-name">
            {{ name }}
          </p>
          <div class="columns">
            <div class="column">
              <a :href="posicion">
                <span class="is-category tag">
                  {{ posicion }}
                </span>
              </a>
            </div>
            <div class="column has-text-right">
              <button class="button is-info" v-on:click="sumLikes">
                0
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        {{ comentario }}
        <nuxt-link :to="category + '/' + slug">more info</nuxt-link>.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    comentario: {
      type: String,
      default: ''
    },
    posicion: {
      type: String,
      default: ''
    },
    peso: {
      type: String,
      default: ''
    },
    altura: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    clave: {
      type: String,
      default: ''
    },
    lugar_nacimiento: {
      type: String,
      default: ''
    },
    fecha_nacimiento: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.jugador-name {
  font-size: 30px;
  color: #4229b3;
}
.card{
    margin: 10px 10px;
}
</style>