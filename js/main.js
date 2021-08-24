
//CARROUSEL PELICULAS RECOMENDADAS

//Flecha izquierda
const flechaIzquierda = document.querySelector('#flecha-izquierda');

//Accedo al contenedor carousel
const carousel = document.querySelector('.contenedor-carousel');


//Flecha derecha
const flechaDerecha = document.querySelector('#flecha-derecha');



//1229=>tamaño pagina
//Flecha derecha
flechaDerecha.addEventListener('click', ()=>{
    carousel.scrollLeft += carousel.offsetWidth;
})

//Flecha izquierda
flechaIzquierda.addEventListener('click',()=>{
    carousel.scrollLeft -= carousel.offsetWidth;
})




//CARROUSEL PELICULAS TERROR

//Flecha izquierda
const flechaIzquierdaDos = document.querySelector('#flecha-izquierda');

//Accedo al contenedor carousel
const carouselTerror = document.querySelector('.contenedor-carousel-2');


//Flecha derecha
const flechaDerechaDos = document.querySelector('#flecha-derecha');



//1229=>tamaño pagina
//Flecha derecha
flechaDerechaDos.addEventListener('click', ()=>{
    carouselTerror.scrollLeft += carouselTerror.offsetWidth;
})

//Flecha izquierda
flechaIzquierdaDos.addEventListener('click',()=>{
    carouselTerror.scrollLeft -= carouselTerror.offsetWidth;
})




//FOTOS

const fotos = document.querySelectorAll('img')

//function
let agrandamientoImagenes= (e) =>{
    let cadaImagen=e.target
    cadaImagen.style.width='400px'
    cadaImagen.style.height='400px'

    
}



//foreach//addeventlistener
fotos.forEach(foto=>{
    foto.addEventListener('click', agrandamientoImagenes)
})
