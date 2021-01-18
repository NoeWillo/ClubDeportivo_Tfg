<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="/">
                Inicio
            </b-navbar-item>
             <b-navbar-dropdown label="Primer Equipo">
                  <b-navbar-item href="/primer_equipo/plantilla/plantilla">
                      Plantilla
                  </b-navbar-item>
                  <b-navbar-item href="/primer_equipo/cuerpo_tecnico/cuerpo_tecnico">
                      Cuerpo Tecnico
                  </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="Club">
                  <b-navbar-item href="/club/historia">
                      Historia
                  </b-navbar-item>
                  <b-navbar-item href="/club/instalaciones">
                      Instalaciones
                  </b-navbar-item>
                  <b-navbar-item href="/club/patrocinadores">
                      Patrocinadores
                  </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="Cantera">
                  <b-navbar-item href="/cantera/infantilA">
                      InfantilA
                  </b-navbar-item>
                   <b-navbar-item href="/cantera/cadeteB">
                      CadeteB
                  </b-navbar-item>
                   <b-navbar-item href="/cantera/juvenilC">
                      JuvenilC
                  </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="/proteccion_datos">
                    Protección Datos
                </b-navbar-item>
                <b-navbar-item href="/contacto">
                    Contacto
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="Admin">
                <b-navbar-item href="/admin">
                    Panel de Administración
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-item href="/tienda">
                Tienda
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" href="/login_out/login">
                        <strong>Iniciar Sesion (admin)</strong>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
