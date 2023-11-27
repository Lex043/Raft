const tl = gsap.timeline({
    defaults: { duration: 0.75, ease: "Power3.easeOut" },
});

//header animation
tl.fromTo(".header__intro", { opacity: 0, y: 200 }, { opacity: 1, y: 0 });
tl.fromTo(".header__title", { opacity: 0, y: "100%" }, { opacity: 1, y: 0 });
tl.fromTo(
    ".header__subtitle",
    { opacity: 0, y: "100%" },
    { opacity: 1, y: 0 },
    "<50%"
);

// get started marquee for nav section
const navGetStarted = document.querySelector(".nav__get-started");
const navGetStartedSpan = document.querySelector(".nav__get-started-container");
const navGetStartedWidth = navGetStarted.offsetWidth;
const navGetStartedTl = gsap.timeline({ paused: true });

navGetStartedTl.to(navGetStarted, { borderRadius: "3rem", duration: 0.3 });

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

getStartedTl.to(getStarted, { borderRadius: "3rem", duration: 0.3 });
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
