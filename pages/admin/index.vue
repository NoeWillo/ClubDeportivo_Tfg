<template>
<div id="wrapper">
  <div id="info">
    <div id="info-content">
      <h1>Panel de Administracion</h1>
    </div>
  </div>

  <input type="checkbox" id="menu" name="menu" class="menu-checkbox">
  <div class="menu">
    <label class="menu-toggle" for="menu"><span>Toggle</span></label>
    <ul>
      <li>
        <a href="/">Inicio</a>
      </li>
      <li>
        <a href="/admin">Admin</a>
      </li>
      <li>      
        <label for="primer_equipo">Primer Equipo</label>
        <input type="checkbox" id="primer_equipo" name="primer_equipo" class="menu-checkbox">
        <div class="menu">
          <label class="menu-toggle" for="primer_equipo"><span>Toggle</span></label>
          <ul>
            <li>
              <label for="primer_equipo_plantilla">Plantilla</label>
              <input type="checkbox" id="primer_equipo_plantilla" name="primer_equipo_plantilla" class="menu-checkbox">
              <div class="menu">
                <label class="menu-toggle" for="primer_equipo_plantilla"><span>Toggle</span></label>
                <ul>
                  <li>
                    <a href="/admin/primer_equipo/plantilla/crear_jugador">Añadir Jugador</a>
                  </li>
                  <li>
                    <a href="/admin/primer_equipo/plantilla/index_jugadores">Modificar Jugador</a>
                  </li>
                   <li>
                    <a href="/admin/primer_equipo/plantilla/borrar_jugador">Borrar Jugador</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <label for="primer_equipo_cp">Cuerpo Tecnico</label>
              <input type="checkbox" id="primer_equipo_cp" name="primer_equipo_cp" class="menu-checkbox">
              <div class="menu">
                <label class="menu-toggle" for="primer_equipo_cp"><span>Toggle</span></label>
                <ul>
                  <li>
                    <a href="/admin/primer_equipo/cuerpo_tecnico/crear_cp">Añadir Cuerpo Tecnico</a>
                  </li>
                  <li>
                    <a href="/admin/primer_equipo/cuerpo_tecnico/modificar_cp">Modificar Cuerpo Tecnico</a>
                  </li>
                   <li>
                    <a href="/admin/primer_equipo/cuerpo_tecnico/borrar_cp">Borrar Cuerpo Tecnico</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <label for="menu-4">Menu-4</label>
        <input type="checkbox" id="menu-4" name="menu-4" class="menu-checkbox">
        <div class="menu">
          <label class="menu-toggle" for="menu-4"><span>Toggle</span></label>
          <ul>
            <li>
              <a href="#">Menu-4-1</a>
            </li>
            <li>
              <a href="#">Menu-4-2</a>
            </li>
            <li>
              <a href="#">Menu-4-3</a>
            </li>
            <li>
              <a href="#">Menu-4-4</a>
            </li>
          </ul>
        </div>
      </li>      
      <li>
        <label for="menu-5">Menu-5</label>
        <input type="checkbox" id="menu-5" name="menu-5" class="menu-checkbox">
        <div class="menu">
          <label class="menu-toggle" for="menu-5"><span>Toggle</span></label>
          <ul>
            <li>
              <a href="#">Menu-5-1</a>
            </li>
            <li>
              <a href="#">Menu-5-2</a>
            </li>
            <li>
              <a href="#">Menu-5-3</a>
            </li>
            <li>  
              <a href="#">Menu-5-4</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#">Menu-6</a>
      </li>
    </ul>
  </div>
</div>

</template>

<style>

    * {
      margin: 0;
      padding: 0;
    }

    #wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    label {
      cursor: pointer;
    }
    label:focus {
      outline: none;
    }

    .menu {
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      width: 240px;
      height: 100%;
      transform: translate3d(-240px, 0, 0);
      transition: transform 0.35s;
    }
    .menu label.menu-toggle {
      position: absolute;
      right: -60px;
      width: 60px;
      height: 60px;
      line-height: 0px;
      display: block;
      padding: 0;
      text-indent: -9999px;
      background: #fff url(https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png) 50% 50%/25px 25px no-repeat;
    }
    .menu ul li > label {
      background: url(https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-right-b-128.png) 95% 50%/16px 16px no-repeat;
    }
    .menu ul li a, .menu ul li label {
      display: block;
      text-align: center;
      padding: 0 20px;
      line-height: 60px;
      text-decoration: none;
      color: #000;
    }
    .menu ul li a:hover, .menu ul li label:hover {
      color: #666;
    }

    /* hide inputs */          
    .menu-checkbox {
      display: none;
    }

    /* hide navigation icon for sublabels */    
    .menu .menu label.menu-toggle {
      background: none;
    }

    /* fade in checked menu */    
    .menu-checkbox:checked + .menu {
      transform: translate3d(0, 0, 0);
    }

    /* for show */
    html, body {
      height: 100%;
    }

    body {
      background: url(../../assets/admin/images/fondo.jpg) 50% 50%/cover;
    }

    p {
      margin-bottom: 15px;
    }

    #info {
      display: table;
      background: rgba(0, 0, 0, 0.4);
      height: 100%;
      width: 100%;
    }
    #info #info-content {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      text-transform: uppercase;
      color: #fff;
      font-size: 12px;
    }
    #info #info-content h1 {
      color: #fff;
      border: 3px solid #fff;
      text-align: center;
      background: rgba(0, 0, 0, 0.1);
      font-size: 22px;
      font-weight: normal;
      padding: 20px;
      margin: 10px;
      display: inline-block;
    }
    #info #info-content h1 strong {
      display: block;
      font-size: 26px;
    }
</style>

<script>
export default {

}
</script>