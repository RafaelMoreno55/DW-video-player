const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log('le diste click al botón de play');
}

function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
    console.log('le diste click al botón de pause');
}

function handleBackward() {
    $video.currentTime -= 10;
    console.log('para atrás 10 segundos', $video.currentTime);
}

function handleForward() {
    $video.currentTime += 10;
    console.log('para adelante 10 segundos', $video.currentTime);
}