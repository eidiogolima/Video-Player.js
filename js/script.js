import Player from './player.js';

const player = new Player('#play','#pause','#next','#back', '#vol', "#time-video", "#video",'#volume-input', "#mute", "[data-titulo-js]", "#all-control");

player.init()