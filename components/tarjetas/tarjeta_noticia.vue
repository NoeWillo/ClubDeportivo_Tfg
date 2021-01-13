<template>
   <div class="container">
      <div class="section">
        <div class="card is-horizontal columns">
          <div class="card-image column is-three-fifths">

            <figure class="image is-4by3">
              <img :src="image" alt="noticia.jpg">             
            </figure>
          </div>
          <div class="card-content column is-two-fifths">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{titulo}}</p>
                <p class="subtitle is-6">{{autor}}</p>
              </div>
            </div>

            <div class="content">
              {{descripcion}}
              <span class="tag is-link">{{categoria}}</span>

              <br><br>

                <div class="field is-grouped is-grouped-multiline">
                  <div class="control">
                    <div class="tags has-addons">
                      <span class="tag is-info">{{fecha}}</span>
                    </div>
                  </div>
                  <br>
                </div>
                </div>
            </div>
          </div>
        </div>
  </div>
</template>
<script>
    export default {
      props:{
        titulo:{
          type: String,
          default:''
        },
        autor:{
          type: String,
          default:''
        },
        image:{
          type: String,
          default:''
        },
        descripcion:{
          type: String,
          default:''
        },
        fecha:{
          type: String,
          default:''
        },
        categoria:{
          type: String,
          default:''
        },

      }
    }
</script>

<style>
.card .media:not(:last-child) {
  margin-bottom: 0.75rem;
}
.card.card--reverse-order {
  flex-direction: row-reverse;
}
.card.is-horizontal {
  display: flex;
  flex-basis: 50ex;
  flex-grow: 0;
  flex-shrink: 1;
}
.card.is-horizontal .card-image {
  flex: 4;
  flex-shrink: 1;
}
.card.is-horizontal .card-image .image {
  display: block;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.card.is-horizontal .card-image .image img {
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.card.is-horizontal .card-content {
  flex: 3;
}
</style>