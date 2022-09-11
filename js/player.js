export default class Player {
    constructor(play, pause, next, back, vol, time, video, inputVol, mute, videoTitle, controls) {
        this.play = document.querySelector(play);
        this.pause = document.querySelector(pause);
        this.next = document.querySelector(next);
        this.back = document.querySelector(back);
        this.vol = document.querySelector(vol);
        this.mute = document.querySelector(mute);
        this.inputVol = document.querySelector(inputVol)
        this.time = document.querySelector(time);
        this.video = document.querySelector(video);
        this.videoTitle = document.querySelector(videoTitle)
        this.controls = document.querySelector(controls)
        this.times = {
            time: ['250']
        }
        this.titulo = {
            texto: 'Brilhante curta metragem',
        }
        // Adiciona ao input o tempo atual do video a cada 300ms
        this.videoTitle.innerText += this.titulo.texto

    }

    // Inicia o video
    playVideo() {
        this.video.play();
        this.play.classList.add('ativa');
        this.pause.classList.add('ativa');
        setInterval(() => {
            this.time.value = this.video.currentTime;
        }, 100);
    }

    // Pausa o video
    pauseVideo() {
        this.video.pause();
        this.play.classList.remove('ativa');
        this.pause.classList.remove('ativa');
    }

    // aparece na tela o volume 
    setVol() {
        this.inputVol.classList.toggle('ativo');
    }

    // Controla o volume
    changeVol() {
        this.video.volume = this.inputVol.value / 100;
        if(this.inputVol.value == 0){
            this.mute.classList.add('ativa');
            this.vol.classList.add('ativa');
        } else {
            this.vol.classList.remove('ativa');
            this.mute.classList.remove('ativa');
        }
    }

    // Muda o ponteiro do video para o posição atual do video
    changeTimeVideo() {
        const total = this.time.value
        this.video.currentTime = total;
        console.log(total)
    }

    // Diminui a velocidade
    backSpeed() {
        this.video.playbackRate -= 0.25;
        // a velocidade tem um limite se o limite chegar perto de ser atingido ela adiciona ou remove velocidade para não dar erro no console
        this.video.playbackRate == 0 ? this.video.playbackRate += 0.25 : 'error';
    }

    // Aumenta a velocidade
    nextSpeed() {
        this.video.playbackRate += 0.25;
        // a velocidade tem um limite se o limite chegar perto de ser atingido ela adiciona ou remove velocidade para não dar erro no console
        this.video.playbackRate == 16 ? this.video.playbackRate -= 0.25 : 'error';
    }
    
    // Adiciona os eventos 
    addEvent() {
        this.time.addEventListener('change', this.changeTimeVideo);
        this.play.addEventListener('click', this.playVideo);
        this.pause.addEventListener('click', this.pauseVideo);
        this.next.addEventListener('click', this.nextSpeed);
        this.back.addEventListener('click', this.backSpeed);
        this.vol.addEventListener('click', this.setVol);
        this.inputVol.addEventListener('change', this.changeVol);
    }

    // Realiza o bind dos eventos 
    bindEvent() {
        // this.playVideo = this.playVideo.bind();
        this.nextSpeed = this.nextSpeed.bind(this);
        this.backSpeed = this.backSpeed.bind(this);
        this.setVol = this.setVol.bind(this);
        this.changeVol = this.changeVol.bind(this);
        this.changeTimeVideo = this.changeTimeVideo.bind(this);
        this.playVideo = this.playVideo.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
    }

    // Inicia a função
    init() {
        this.bindEvent();
        this.addEvent();
        return this
    }
}