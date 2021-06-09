
const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const ham = document.querySelector(".ham");
const headline = document.querySelector('.headline');
const nav = document.querySelector('nav');

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: "100%" }, { width: "90%", ease: Power2.easeInOut })
    .fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-= 1.2")
    .fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
    .fromTo(ham, 0.5, {opacity: 0, x: -30}, {opacity: 1, x: 0}, "-=0.6")
    .fromTo(headline, 0.5, {opacity: 0}, {opacity: 1}, "-=2")
    .fromTo(nav, 0.5, {opacity: 0}, {opacity: 1})