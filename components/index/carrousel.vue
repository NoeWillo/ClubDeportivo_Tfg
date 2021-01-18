<template>
<div id="container">
    <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <img :src="carousel.image">
        </b-carousel-item>
    </b-carousel>
</div>
</template>

<script>
export default {
    data(){
        return {
            carousels: [
                {  image: './assets/carrousel/imagen1.jpg' },
                {  image: './assets/carrousel/imagen2.jpg' },
                {  image: './assets/carrousel/imagen3.jpg' },
                {  image: './assets/carrousel/imagen4.jpg' },
                {  image: '../../assets/carrousel/imagen5.jpg' }
            ]
        }
    },


}
</script>

<style>
#container{
    margin-top:15px;
}
</style>