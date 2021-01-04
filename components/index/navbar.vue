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
                  <b-navbar-item href="/primer_equipo/plantilla">
                      Plantilla
                  </b-navbar-item>
                  <b-navbar-item href="/primer_equipo/cuerpo_tecnico">
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
                  <b-navbar-item href="/club/socios">
                      Socios
                  </b-navbar-item>
                  <b-navbar-item href="/club/patrocinadores">
                      Patrocinadores
                  </b-navbar-item>
                  <b-navbar-item href="/club/acreditaciones">
                      Acreditaciones
                  </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="Cantera">
                  <b-navbar-item href="/cantera">
                      Cantera
                  </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="Admin">
                <b-navbar-item href="/admin">
                    Admin
                </b-navbar-item>
                <b-navbar-item href="/contacto">
                    Contacto
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" href="/login_out/register">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light" href="/login_out/login">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
