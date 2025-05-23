function skibiditoilet() {
    document.getElementsByClassName('cabro2')[0].classList.add('explotarcoso')
    document.getElementsByClassName('coraz')[0].classList.add('explotarcoso')
    document.getElementsByClassName('cabro1')[0].classList.add('desaparecer')
    setTimeout(() => {
        document.getElementsByClassName('kgada')[0].classList.add('kgadaexpan')
    }, 500);
    setTimeout(() => {
        document.getElementsByClassName('fondorosa')[0].classList.add('aparecer')
        document.getElementsByClassName('fondito')[0].classList.add('aparecer')
    }, 2000);
    setTimeout(() => {
        document.getElementsByClassName('nubes1')[0].classList.add('aparnubes')
        document.getElementsByClassName('nubes2')[0].classList.add('aparnubes')
        document.getElementsByClassName('nubes3')[0].classList.add('aparnubes')
        document.getElementsByClassName('cabropensando')[0].classList.add('aparnubes')
        document.getElementsByClassName('botoncabro')[0].classList.add('aparnubes')
        document.getElementsByClassName('botonaudio')[0].classList.add('aparecer')
    }, 5000);
    setTimeout(() => {
        document.getElementsByClassName('texto1')[0].classList.add('aparnubes')
        document.getElementsByClassName('texto2')[0].classList.add('aparnubes')
    }, 8000);
  }

let sanai = 0 
const audio = document.getElementById('flopaudio')

function mariaudio() {

    if (sanai === 0) {
        sanai = 1
        document.getElementsByClassName('botoncabro2')[0].classList.add('aparecer')
        setTimeout(() => {
        audio.play()
        }, 100);
    }
    else {
        sanai = 0
        audio.pause()
        document.getElementsByClassName('botoncabro2')[0].classList.remove('aparecer')
    }
}

audio.addEventListener('ended', () => {
    sanai = 0
    document.getElementsByClassName('botoncabro2')[0].classList.remove('aparecer')
})