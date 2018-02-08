// GLOBAL VARIABLES
let isIE = /*@cc_on!@*/false || !!document.documentMode,
    isEdge = !isIE && !!window.StyleMedia,
    isIEorEdge = isIE || isEdge,
    isiPad = navigator.userAgent.match(/iPad/i) != null,
    isTouch = !!('ontouchstart' in window),
    transitionFast = 0.45,
    transitionSlow = 0.65,
    duration = transitionSlow * 1000,
    easing1 =[.77, 0, .175, 1],
    easing2 = 'cubic-bezier(0.19, 1, 0.22, 1)',
    easing = "easeInOutSine",
    delay = 0.4;



// IMPORTS
const Anime = require('animejs');

require('./Navigation.js')
require('./PageTransition.js')



class App {

    load () {
    }

    main () {
        
    } //main
} // APP

let Project = new App();

document.addEventListener('ready', (event) => {
    Project.load();
});

window.addEventListener('load', (event) => {
    Project.main()
});   
