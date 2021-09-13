import './style.scss';
import { gsap, Power4, Back } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Créer la timeline
var tl = gsap.timeline();


// Animation .content
tl.from('.content', {
    y: '-30%', //direction
    opacity: 0,
    duration: 1.2, //durée en secondes
    ease: Power4.easeOut // type transition
})

tl.from('.stagger1', {
    opacity:0,
    y:-50,
    stagger:.3,
    ease:Power4.easeOut,
    duration:2
}, "-=0.8")

tl.from('.scroll', {
    opacity:0,
    y:-50,
    stagger:.3,
    ease:Power4.easeOut,
    duration:1.5
}, "-=1.2")


tl.from('.hero-design', {
    y: 50, //direction
    opacity: 0,
    duration: 1, //durée en secondes
    ease: Power4.easeOut // type transition
}, "-=2")

gsap.from('.text', {
    stagger:.2,
    scale:0.1,
    duration:1.2,
    ease: Back.easeOut.config(1.7)
})


gsap.from(".transition2", {
    scrollTrigger: {
        trigger: '.transition2',
        start: 'top bottom'
    },
    y:50,
    opacity:0,
    duration:1.2,
    stagger:.3
})

gsap.from(".transition3", {
    scrollTrigger: {
        trigger: '.transition3',
        start: 'top bottom'
    },
    y:50,
    opacity:0,
    duration:1.2,
    stagger:.6
})

