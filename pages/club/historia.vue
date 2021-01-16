<template>
    <div>
        <navbar></navbar>
        <div class="content">
            <h1>Historia</h1>
            <p>El equipo se fundó en 1961 comenzando a jugar en categorías inferiores, de las que poco a poco fue ascendiendo. En la temporada 1987-88 debutó por primera vez en Tercera División, en la que permanecerían hasta 1993.</p>
            <p>El equipo volvería a ascender a esa categoría en 1995 y 1997, año en la que se mantuvo desde entonces. El equipo mejoró bastante su juego a partir de la campaña 2001-02, año en que quedaron terceros. Tras 3 temporadas consecutivas clasificándose entre los 4 primeros equipos madrileños que lucharan por el ascenso, el CDA Navalcarnero logró subir a Segunda División B tras vencer en la fase final al Norma San Leonardo</p>
            <p>La temporada 2004-05 fue la primera vez que el Artístico Navalcarnero disputó en Segunda B, descendiendo tras quedar en 19ª posición. Tras 3 temporadas en Tercera, en la temporada 2008-09 el equipo regresó a la División de Bronce española tras vencer en la fase de ascenso al Atlético Granadilla, ascendiendo de nuevo a Segunda B, en la que finalizó 17º, retornando a la Tercera División en la temporada 2009-10. Posteriormente pasaría a la Categoría Preferente de Aficionados de la Comunidad de Madrid. En la temporada 2014/2015 consiguió de nuevo el ascenso a la categoría de bronce y en la siguiente logró la permanencia en la misma, por primera vez en su historia consiguiendo 47 puntos. </p>
            <br>
            <h1>Uniforme</h1>
            <p><b>Primera equipación:</b> Camiseta roja y blanca a rayas, pantalón azul y medias rojas.</p>
            <p><b>Segunda equipación:</b> Camiseta amarilla, pantalón amarillo y medias amarillas.</p>
            <br>
            <h1>Escudo</h1>
            <p>Presenta las dos torres de la iglesia de la localidad, un balón de fútbol y las rayas rojas y blancas, colores significativos del <b>'Naval'.</b></p>
            <br>
            <h1>Datos del club</h1>
            <p><b>Temporadas en 1ª</b> 0</p>
            <p><b>Temporadas en 2ª</b> 0</p>
            <p><b>Temporadas en 2ªB</b> 5</p>
            <p><b>Temporadas en 3ª</b> 19</p>
        </div>
        <pie></pie>
    </div>
</template>

<script>
import navbar from '~/components/generales/navbar.vue'
import pie from '~/components/generales/pie.vue'

export default {
    components:{
        navbar,
        pie
    }
}
</script>

<style>
.content{
    text-align: center;
    width: 1000px;
    margin-left: 400px;
    margin-top: 10px;
    background-color: white;
}

</style>