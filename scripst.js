let canciones = [{
    id: 0,
    titulo: 'Gaucho power',
    artista: 'Cuarteto de nos',
    year: '2017',
    musica: 'canciones/gauchopower.mp3',
    imagen: 'img/apocalipsis.jpg',
    video: 'https://www.youtube.com/watch?v=njntSJMvOFg'   
},
{
    id: 1,
    titulo: 'Una nube cuelga sobre mi',
    artista: 'Los bunkers',
    year: '2008',
    musica: 'canciones/nubecuelga.mp3',
    imagen: 'img/barrio.jpg',
    video: 'https://www.youtube.com/watch?v=dkUywMy7g-0'   
},
{
    id: 2,
    titulo: 'De musica ligera',
    artista: 'Soda stereo',
    year: '1990',
    musica: 'canciones/musicaligera.mp3',
    imagen: 'img/sodastereo.jpg',
    video: 'https://www.youtube.com/watch?v=T_FkEw27XJ0'   
}];


let numeroCancion = 0;

document.addEventListener('DOMContentLoaded', function(){
    crearReproductor();
});


function crearReproductor(){
    audioObj = new Audio(canciones[numeroCancion].musica);
    var duracion = audioObj.duration;
    console.log(duracion);
    mostrarTitulo();
    mostrarArtista();
    mostraryear();
    mostrarVideo();
    mostrarImagen();
    reproducir();
    pausar();
    detener();
    anterior();
    siguiente();
    // verificarEstado();
   
}

function mostrarInfo(){

    mostrarTitulo();
    mostrarArtista();
    mostraryear();
    mostrarVideo();
    mostrarImagen();
    
}

// function verificarEstado(){
//     const btnPausar = document.querySelector('.botones__pausa');
//     const btnReproducir = document.querySelector('.botones__play');
    
//     if(audioObj.currentTime == audioObj.length()){

//         if(numeroCancion!==(canciones.length-1)){
//             numeroCancion++;
//         }
    
//         else
//         {
//             numeroCancion=0;
//         }
//         audioObj.pause();
//         audioObj.currentTime = 0;
//         delete audioObj;
//         audioObj = new Audio(canciones[numeroCancion].musica);
//         mostrarInfo();
//         audioObj.play();
    
//         btnPausar.classList.remove('botones__pausa_remover');
//         btnReproducir.classList.add('botones__play_remover');
//     }

//     else
//     {
//         return;
//     }

// }

function mostrarTitulo(){
    const nombreActual = canciones[numeroCancion].titulo;
    const titulo = document.querySelector('.infoCancion__nombre');
    while( titulo.firstChild ) {
        titulo.removeChild( titulo.firstChild );
    }
    const nombreCancion = document.createElement('H1');
    nombreCancion.textContent = nombreActual;
    titulo.appendChild(nombreCancion);
    

}


function mostrarArtista(){
    const artistaActual = canciones[numeroCancion].artista;
    const artista = document.querySelector('.infoCancion__artista');
        while( artista.firstChild ) {
        artista.removeChild( artista.firstChild );
    }
    const nombreArtista = document.createElement('H2');
    nombreArtista.textContent = artistaActual;
    artista.appendChild(nombreArtista);

}

function mostrarImagen(){
    const imagenActual = canciones[numeroCancion].imagen;
    const imagen = document.querySelector('.imagen');
    while( imagen.firstChild ) {
        imagen.removeChild( imagen.firstChild );
    }
    const img = document.createElement('IMG');

    img.src = imagenActual;
    imagen.appendChild(img);

}

function mostraryear(){
    const  yearActual = canciones[numeroCancion].year;
    const year = document.querySelector('.infoCancion__year');

    while(year.firstChild){
        year.removeChild(year.firstChild);
    }

    const yearCancion = document.createElement('H3');
    yearCancion.textContent = yearActual;
    year.appendChild(yearCancion);

}


function mostrarVideo(){
    const videoActual = canciones[numeroCancion].video;
    const enlace = document.querySelector('.infoCancion__enlace');
    while(enlace.firstChild){
        enlace.removeChild(enlace.firstChild);
    }
    const a = document.createElement('A');
    a.setAttribute('href', videoActual);
    enlace.appendChild(a);
 
}

function reproducir(){
    
    const btnReproducir = document.querySelector('.botones__play');
    const btnPausar = document.querySelector('.botones__pausa')
    btnPausar.classList.add('botones__pausa_remover');

    btnReproducir.addEventListener('click', () =>{
        audioObj.play();
        btnReproducir.classList.add('botones__play_remover');
        btnPausar.classList.remove('botones__pausa_remover');

    })
}

function pausar(){
    const btnPausar = document.querySelector('.botones__pausa');
    const btnReproducir = document.querySelector('.botones__play');
    
    btnPausar.addEventListener('click', () =>{
        audioObj.pause();
        btnReproducir.classList.remove('botones__play_remover');
        btnPausar.classList.add('botones__pausa_remover');
 
    })
}



function detener(){
    const btnDetener = document.querySelector('.botones__stop');
    const btnPausar = document.querySelector('.botones__pausa');
    const btnReproducir = document.querySelector('.botones__play');


    btnDetener.addEventListener('click', () =>{
        audioObj.pause();
        audioObj.currentTime = 0;
        btnPausar.classList.add('botones__pausa_remover');
        btnReproducir.classList.remove('botones__play_remover');

    })
    
}

function siguiente(){
    const btnSiguiente = document.querySelector('.botones__siguiente');
    const btnPausar = document.querySelector('.botones__pausa');
    const btnReproducir = document.querySelector('.botones__play');

    btnSiguiente.addEventListener('click', () => {


            if(numeroCancion!==(canciones.length-1)){
                numeroCancion++;
            }

            else
            {
                numeroCancion=0;
            }
            audioObj.pause();
            audioObj.currentTime = 0;
            delete audioObj;
            audioObj = new Audio(canciones[numeroCancion].musica);
            mostrarInfo();
            audioObj.play();

            btnPausar.classList.remove('botones__pausa_remover');
            btnReproducir.classList.add('botones__play_remover');

    })
}

function anterior(){
    const btnAnterior = document.querySelector('.botones__anterior');
    const btnPausar = document.querySelector('.botones__pausa');
    const btnReproducir = document.querySelector('.botones__play');
    btnAnterior.addEventListener('click', () => {

        if(numeroCancion>0&&numeroCancion<=(canciones.length-1)){

            numeroCancion--;

        }
        else 
        {
            numeroCancion=(canciones.length-1);

        }
        btnPausar.classList.remove('botones__pausa_remover');
        btnReproducir.classList.add('botones__play_remover');

        audioObj.pause();
        audioObj.currentTime = 0;
        delete audioObj;
        audioObj = new Audio(canciones[numeroCancion].musica);
        mostrarInfo();
        audioObj.play();

    })
}
