<template>
    <div>
        <div class="landing">
  <div class="img-left">
  </div>
  <div class="img-right">
    <div class="registration">
      <h1 class="title">Iniciar Sesión</h1>
      <div class="input-form">
        <i class="far fa-envelope"></i>
        <input type="email" placeholder="Email" v-model="email">
      </div>
      <div class="input-form">
        <i class="fas fa-unlock-alt"></i>
        <input type="password" placeholder="Contraseña" v-model="password">
      </div>
      <div class="buttons">
        <button class="button is-info" @click="register">Registrar</button>
        <nuxt-link class="button is-danger" to="/">Cancelar</nuxt-link>      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import {firebase} from '~/plugins/firebase'

export default {
  
    data(){
      return{
        email:'',
        password:''
      }
    },

    methods: {
      register(){
         const response = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                response.then(data => {
                    this.$router.push('/admin')
                })
      }
    }
}
</script>

<style>

.landing {
  width: 100%;
  height: 100vh;
  display: flex;
}

.landing .img-left {
  background-image: url("https://estadiosdefutbol.com/wp-content/gallery/navalcarnero/grada-estadio-mariano-gonzalez-navalcarnero.jpg");
  background-size: cover;
  height: 100vh;
  flex-grow: 1;
}

.landing .img-right {
  background-color: #fff;
  height: 100vh;
  width: 480px;
}

.registration {
  display: inline-block;
  width: 80%;
  margin-top: 10%;
  margin-left: 10%;
}
.registration .title {
  text-align: center;
  color: #ccc;
}
.registration .input-form {
  border-bottom: solid 1px #eee;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  padding: 2px;
  position: relative;
  box-sizing: border-box;
}
.registration .input-form i {
  position: absolute;
  top: 50%;
  transform: translatey(-50%);
  margin-left: 5px;
}
.registration .input-form input {
  padding-left: 25px;
  border: none;
  background-color: transparent;
  width: 100%;
  outline: none;
}
.registration .buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.registration .buttons button, .registration .buttons a {
  margin: 20px 0;
}

@media screen and (max-width: 768px) {
  .landing .img-left {
    position: absolute;
    width: 100%;
    z-index: -1;
  }
  .landing .img-right {
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
  }
  .landing .img-right .registration {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 10px;
    border-radius: 20px;
    box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.4);
  }
  .landing .img-right .registration .title {
    color: #666;
  }
}
</style>