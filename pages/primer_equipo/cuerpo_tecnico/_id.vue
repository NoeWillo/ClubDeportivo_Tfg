<template>
    <div>
        <navbar/>
            <div v-if="ct" class="cuerpo">
                <aside class="player-card">
    <header>
          <img alt="jugador.jpg" src="https://cdn.arnellebalane.com/images/codepen-day78/contestant.jpg">
        <h1>{{ct.name}}</h1>
        <p>{{ct.delegacion}}</p>
    </header>
    <section>
        <h2>Atributos</h2>
        <ul class="list horizontal">
            <li>Peso: {{ct.peso}}</li>
            <li>Altura: {{ct.altura}}</li>
        </ul>
    </section>
    <section>
        <h2>Lugar y fecha de nacimiento</h2>
        <ul class="list horizontal">
            <li>{{ct.lugar_nacimiento}}</li>
            <li>{{ct.fecha_nacimiento}}</li>
        </ul>
    </section>
    <section>
        <h2>Equipo</h2>
        <ol class="list numbered">
            <li>{{ct.equipo}}</li>
        </ol>
    </section>
</aside>
<div class="overlay"></div>
            </div>
            <pie/>
    </div>
</template>

<script>
import navbar from '~/components/generales/navbar.vue'
import pie from '~/components/generales/pie.vue'


import { db } from '~/plugins/firebase'

export default {
  components: { 
      navbar, 
      pie 
    },

  data() {
    return {
      ct: null
    }
  },

  created() {
    const response = db.collection('primer_equipo_ct').doc(this.$route.params.id).get()
    response.then(doc => {
      if(doc.exists) {
        this.ct = doc.data()
      }
    })
  }
}
</script>

<style>
/** Base Styles **/
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.cuerpo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 1;
    color: #0b0b0b;
    background: url("https://cdn.arnellebalane.com/images/codepen-day78/background.jpg") center center no-repeat;
    background-size: cover;
}


ul,
ol {
    list-style: none;
}


/** Reusable Components **/
.list {
    display: flex;
    flex-direction: column;
}

.list.horizontal {
    flex-direction: row;
    
}

.list.numbered {
    counter-reset: item;
}


.list li {
    flex-grow: 1;
}

.list.horizontal li {
    width: 0;
}

.list.numbered li::before {
    counter-increment: item;
    content: counter(item);
}


/** Player Card **/
.player-card {
    display: inline-block;
    width: 38rem;
    padding: 2rem;
    position: relative;
    border-radius: 1rem;
    background-color: rgba(38, 40, 42, 0.95);
    box-shadow: 0 0.8rem 9rem 0 rgba(0, 0, 0, 0.57);
    margin-top: 20px;
    margin-bottom: 30px;
    }


.player-card header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 16rem;
    padding: 0 2rem 0 0;
    border-radius: 1rem 1rem 0 0;
    }


.player-card header h1 {
    margin-bottom: 0.5rem;
    font-size: 3rem;
    text-transform: uppercase;
    font-size: 170%;
    margin-top: 10px;
}


.player-card header p {
    font-size: 1.4rem;
    text-transform: uppercase;
    color: #72a1ff;
}


/** Player Card Lists Sections **/
.player-card section {
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 5rem 0.8rem rgba(0, 0, 0, 0.17);
}

.player-card section:last-of-type {
    margin-bottom: 0;
}


.player-card section h2 {
    padding: 0.75rem 0.5rem;
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: rgba(255, 255, 255, 0.9);
}


.player-card .list li {
    padding: 0.85rem 0.5rem;
    position: relative;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: #fff;
    background-color: rgba(250, 251, 252, 0.1);
}


.player-card .list.horizontal li {
    padding: 0;
    font-size: 2.4rem;
    text-align: center;
    line-height: 6rem;
}

.player-card .list.horizontal li:not(:last-child) {
    margin-right: 1px;
}

.player-card .list.horizontal li:first-child {
    border-bottom-left-radius: 0.5rem;
}

.player-card .list.horizontal li:last-child {
    border-bottom-right-radius: 0.5rem;
}


.player-card .list.numbered li {
    padding-left: 5rem;
    padding-right: 8rem;
}

.player-card .list.numbered li:not(:last-child) {
    margin-bottom: 1px;
}

.player-card .list.numbered li:first-child {
    background-color: #72a1ff;
}

.player-card .list.numbered li:last-child {
    border-radius: 0 0 0.5rem 0.5rem;
}

.player-card .list.numbered li::before {
    width: 5rem;
    position: absolute;
    left: 0;
    text-align: center;
    opacity: 0.5;
}


.player-card .list.numbered span {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 8rem;
    padding-right: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    text-align: right;
}

.player-card .list.numbered li:first-child span {
    background-color: #37ceff;
}


/** Overlay Layer **/
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(-45deg, transparent, rgba(255, 255, 255, 0.1)),
        linear-gradient(-45deg, transparent, rgba(126, 87, 194, 0.1));
    pointer-events: none;
}

</style>