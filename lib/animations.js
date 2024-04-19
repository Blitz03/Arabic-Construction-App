import gsap from "gsap";

export function animateHero() {
  gsap.from("#hero-image", {
    y: 100,
    ease: "power1",
    duration: 1,
  });

  gsap.from("#hero-title", {
    y: 100,
    ease: "power1",
    duration: 1,
    opacity: 0,
    delay: 0.5,
  });

  gsap.from("#hero-paragraph", {
    y: 100,
    ease: "power1",
    duration: 1,
    opacity: 0,
    delay: 0.7,
  });

  gsap.from("#hero-button", {
    y: 100,
    ease: "power1",
    duration: 1,
    opacity: 0,
    delay: 0.5,
  });
}

export function animateAbout() {
  gsap.from("#about-video", {
    y: 100,
    ease: "power1",
    duration: 1,
    opacity: 0,
    delay: 0.7,
    scrollTrigger: "#about-video",
  });

  gsap.from("#about-text", {
    y: 100,
    ease: "power1",
    duration: 1,
    opacity: 0,
    delay: 0.5,
    scrollTrigger: "#about-text",
  });
}

export function animateBoxes(boxId, section) {
  gsap.from(`#${boxId}`, {
    y: 100,
    ease: "power1",
    duration: 1,
    opacity: 0,
    delay: 0.7,
    scrollTrigger: `#${section ? section : boxId}`,
    stagger: 0.2,
  });
}

export function animateWorks() {
  gsap.from("#work-tabs", {
    y: 100,
    ease: "power1",
    duration: 1,
    opacity: 0,
    delay: 1,
    scrollTrigger: "#works",
  });
}

export function animateContact() {
  gsap.from("#contact-wrapper", {
    y: 100,
    ease: "power1",
    duration: 1,
    opacity: 0,
    delay: 1,
    scrollTrigger: "#contact",
  });
}
