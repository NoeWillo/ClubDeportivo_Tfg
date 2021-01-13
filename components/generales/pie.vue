<template>
<div>
     <div class="footer">
         <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
        <div class="footer_menu">
           <div class="col_1">
              <div class="title">
                Club Deportivo  
              </div>  
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/contacto">Contacto</a></li>
                <li><a href="/tienda">Tienda</a></li>
                <li><a href="/proteccion_datos">Protección de datos</a></li>
                <li><a href="/admin">Admin</a></li>
              </ul>
           </div>
           <div class="col_2">
             <div class="title">
                Primer Equipo
              </div>  
              <ul>
                <li><a href="/primer_equipo/plantilla">Plantilla del Primer Equipo</a></li>
                <li><a href="/primer_equipo/cuerpo_tecnico">Cuerpo Técnico</a></li>
              </ul>
           </div>
           <div class="col_3">
             <div class="title">
                Sobre el club  
              </div>  
              <ul>
                <li><a href="/club/historia">Historia</a></li>
                <li><a href="/club/instalaciones">Instalaciones</a></li>
                <li><a href="/club/socios">Socios</a></li>
                <li><a href="/club/patrocinadores">Patrocinadores</a></li>
                <li><a href="/club/acreditaciones">Acreditaciones</a></li>
              </ul>
           </div>
           <div class="col_4">
             <div class="title">
                Cantera 
              </div>  
              <ul>
                <li><a href="/cantera/infantilA">Infantil A</a></li>
                <li><a href="/cantera/cadeteB">Cadete B</a></li>
                <li><a href="/cantera/JuvenilC">Juvenil C</a></li>
              </ul>
          </div>
        </div>
        <div class="social_media">
            <ul>
                <li><a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a class="instagram" href="#"><i class="fab fa-instagram"></i></a></li>
            </ul>
            <p>Copyright © Noé Galán Rosco</p>
        </div>
    </div>
</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");

.footer{
    background: #363333;
    padding: 50px;
    font-family: "Montserrat", sans-serif;
}

.footer .footer_menu{
  display: flex;
  margin-bottom: 25px;
  justify-content: space-between;
}

.footer .footer_menu .title{
  margin-bottom: 10px;
  color: #adadad;
}

.footer .footer_menu ul li a{
  display: block;
  margin-bottom: 6px;
  color: #fff;
}

.footer .footer_menu ul li a:hover{
  text-decoration: underline;
}

.footer .social_media{
  text-align: center;
}

.footer .social_media ul{
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.footer .social_media ul li a{
  display: block;
  margin: 0 5px;
  color: #fff;
  font-size: 24px;
  width: 50px;
  height: 50px;
  background: #fff;
  color: #222222;
  line-height: 50px;
  border-radius: 3px;
}

.footer .social_media ul li a:hover{
  color: #fff;
}

.footer .social_media ul li a.facebook:hover{
  background: #3b5998; 
}

.footer .social_media ul li a.twitter:hover{
  background: #1da1f2; 
}

.footer .social_media ul li a.instagram:hover{
  background: #c32aa3; 
}

.footer .social_media ul li a.whatsapp:hover{
  background: #25d366; 
}

.footer .social_media{
  color: #adadad;
}

@media (max-width:768px) {
  .footer .footer_menu{
    flex-direction: column;
    width: 220px;
    margin: 0 auto 25px;
  }
  .footer .footer_menu > div{
    margin: 10px 0;
  }
  .footer .partners ul li a{
    margin: 5px;
  }
}
</style>