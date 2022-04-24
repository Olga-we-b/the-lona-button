const buttonWrapper = document.querySelector('.button-wrapper');
const buttonContainer = document.querySelector('.button-container');
const audio = document.querySelector('#audio');
const button = document.querySelector('button');
const paragraph = document.querySelector('#paragraph');
const icon = document.querySelector('i');


// CLICK BEHAVIOUR

buttonWrapper.addEventListener('mousedown', ()=>{
    buttonWrapper.classList.toggle('nonactive-top');
    buttonWrapper.classList.toggle('on-click-top');
    buttonContainer.classList.toggle('nonactive-bottom');
    buttonContainer.classList.toggle('on-click-bottom');
});

buttonWrapper.addEventListener('mouseup', ()=>{
    buttonWrapper.classList.toggle('nonactive-top');
    buttonWrapper.classList.toggle('on-click-top');
    buttonContainer.classList.toggle('nonactive-bottom');
    buttonContainer.classList.toggle('on-click-bottom');

});

// PLAYING FUNCTION

button.addEventListener('click', ()=> {
    button.classList.toggle('playing');
    if(button.classList.contains('playing')){
        audio.play();
        paragraph.innerText = "pause"
        icon.classList.remove('bi-music-note-list');
        icon.classList.add('bi-pause-circle');
     } else {
         audio.pause();
         paragraph.innerText = "play";
         icon.classList.remove('bi-pause-circle');
         icon.classList.add('bi-music-note-list');
     };
    }
);

