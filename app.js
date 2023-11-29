gsap.registerPlugin(ScrollTrigger);
Splitting();

const lenis = new Lenis();

lenis.on("scroll", (e) => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const tl = gsap.timeline({
    defaults: { duration: 0.75, ease: "Power3.easeOut" },
});

// preloader
tl.to(".preloader", {
    x: "-100%",
    duration: 2,
    delay: 1,
});

// header animation
tl.fromTo(
    ".header__intro",
    { opacity: 0, y: 200 },
    { opacity: 1, y: 0 },
    "<20%"
);
tl.fromTo(
    ".header__title",
    { opacity: 0, y: "100%" },
    { opacity: 1, y: 0 },
    "<30%"
);
tl.fromTo(
    ".header__subtitle",
    { opacity: 0, y: "100%" },
    { opacity: 1, y: 0 },
    "<50%"
);

//financial journey animation
const tlElevate = gsap.timeline({
    scrollTrigger: {
        trigger: ".financial__journey-container",
        start: "top bottom-=100",
        once: true,
    },
});
tlElevate.to(".financial__journey-header h1 .char", {
    opacity: 1,
    stagger: 0.03,
    ease: "power2.inOut",
});
tlElevate.to(
    ".financial__journey-header p .word",
    { opacity: 1, stagger: 0.03, duration: 1, ease: "power2.inOut" },
    "-=0.5"
);

//financial freedom animation
const financialFreedom = gsap.timeline({
    scrollTrigger: {
        trigger: ".freedom__container",
        start: "top bottom-=100",
        once: true,
    },
});
financialFreedom.to(".freedom__container h1 .char", {
    opacity: 1,
    stagger: 0.03,
    ease: "power2.inOut",
});
financialFreedom.to(
    ".freedom__container p .word",
    { opacity: 1, stagger: 0.03, duration: 1, ease: "power2.inOut" },
    "-=0.5"
);

const smartInvestment = gsap.timeline({
    scrollTrigger: {
        trigger: ".section5",
        start: "top bottom",
        once: true,
    },
});
smartInvestment.to(".section5 h1 .char", {
    opacity: 1,
    stagger: 0.05,
    ease: "power2.inOut",
});

//financial future animation
const financialFuture = gsap.timeline({
    scrollTrigger: {
        trigger: ".section6__text-container",
        start: "top bottom",
        once: true,
    },
});
financialFuture.fromTo(
    ".section6__text-container h1",
    { opacity: 0, y: "100%" },
    { opacity: 1, y: 0, duration: 2 }
);

financialFuture.fromTo(
    ".section6__text-container p",
    { opacity: 0, y: "100%" },
    { opacity: 1, y: 0 }
);

// Card Animation
const card = gsap.timeline({
    scrollTrigger: {
        trigger: ".section8__text",
        start: "top bottom",
        once: true,
    },
});
card.fromTo(
    ".section8__text h1",
    { opacity: 0, y: "100%" },
    { opacity: 1, y: 0, duration: 1 }
);
card.to(".section8__text p .word", {
    opacity: 1,
    stagger: 0.03,
    ease: "power2.inOut",
});

// FAQ
const faq = gsap.timeline({
    scrollTrigger: {
        trigger: ".faq",
        start: "top bottom",
        once: true,
    },
});
faq.fromTo(
    ".faq h1",
    { opacity: 0, y: "100%" },
    { opacity: 1, y: 0, duration: 2 }
);

// get started marquee for nav section
const navGetStarted = document.querySelector(".nav__get-started");
const navGetStartedSpan = document.querySelector(".nav__get-started-container");
const navGetStartedWidth = navGetStarted.offsetWidth;
const navGetStartedTl = gsap.timeline({ paused: true });

navGetStartedTl.to(
    navGetStartedSpan,
    {
        x: -(navGetStartedWidth * 19),
        duration: 100,
        ease: "linear",
    },
    "<"
);

navGetStarted.addEventListener("mouseenter", () => {
    navGetStartedTl.play();
});

navGetStarted.addEventListener("mouseleave", () => {
    navGetStartedTl.progress(0);
    navGetStartedTl.pause();
});

// get started marquee for hero section
const getStarted = document.querySelector(".get__started");
const getStartedSpan = document.querySelector(".get__started-container");
const getStartedWidth = getStarted.offsetWidth;
const getStartedTl = gsap.timeline({ paused: true });

getStartedTl.to(
    getStartedSpan,
    {
        x: -(getStartedWidth * 19),
        duration: 80,
        ease: "linear",
    },
    "<"
);

getStarted.addEventListener("mouseenter", () => {
    getStartedTl.play();
});

getStarted.addEventListener("mouseleave", () => {
    getStartedTl.progress(0);
    getStartedTl.pause();
});

// hamburger
const initApp = () => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    const toggleMenu = () => {
        mobileMenu.classList.toggle("flex");
        mobileMenu.classList.toggle("visible");
    };

    hamburgerBtn.addEventListener("click", toggleMenu);
    mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
