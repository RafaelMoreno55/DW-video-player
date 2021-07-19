/*variables que permiten referenciar a las etiquetas HTML y poder manipularlas*/
const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');

/*se establecen escuchadores a los eventos de:
'click': click del ratón en algún botón
'loadedmetadata': cuando se carga el video en la página, podemos obtener los metadatos del video
'timeupdate': cuando se reproduce el video, podemos obtener el tiempo de reproducción en ese instante
'input': cuando desplazamos la barra de progreso usando el ratón, podemos obtener el valor de un punto específico*/
$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progress.addEventListener('input', handleInput);

/*cuando se presiona el botón de play:
 - reproduce el video
 - oculta el botón de play
 - muestra el botón pause
  */
function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log('le diste click al botón de play');
}

/*cuando se presiona el botón de pause:
 - detiene el video
 - oculta el botón de pause
 - muestra el botón play
  */
function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
    console.log('le diste click al botón de pause');
}

/*cuando se presiona el botón de backward:
 - retrocede 10 segundos en la reproducción del video
  */
function handleBackward() {
    $video.currentTime -= 10;
    console.log('para atrás 10 segundos', $video.currentTime);
}

/*cuando se presiona el botón de forward:
 - avanza 10 segundos en la reproducción del video
  */
function handleForward() {
    $video.currentTime += 10;
    console.log('para adelante 10 segundos', $video.currentTime);
}

/*se obtiene la duración total del video, 
para establecer el máximo valor en la barra de progreso
  */
function handleLoaded() {
    $progress.max = $video.duration;
    console.log('ha cargado mi video', $video.duration);
}

/*se obtiene el tiempo actual en la reproducción del video,
y se actualiza el valor de la barra de progreso para ir acorde
con la reproducción
*/
function handleTimeUpdate() {
    $progress.value = $video.currentTime;
    // console.log('tiempo actual', $video.currentTime);
}

/*se estable la funcionalidad para que la barra de progreso
actualice el tiempo de reproducción del video cuando se desplaza
la barra con el ratón*/
function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value);
}