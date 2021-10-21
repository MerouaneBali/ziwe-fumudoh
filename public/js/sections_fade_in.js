gsap.registerPlugin(ScrollTrigger);

gsap.from("#whoami__medusa", {
  scrollTrigger: {
    traget: "#whoami",
    start: `${
      document.querySelector("#whoami").offsetTop -
      document.querySelector("#whoami").offsetTop * 0.5
    } top`,
    // markers: true,
  },

  opacity: 0,
  duration: 1,
  right: +100,
});

gsap.from(".whoami__text", {
  scrollTrigger: {
    traget: "#whoami",
    start: `${
      document.querySelector("#whoami").offsetTop -
      document.querySelector("#whoami").offsetTop * 0.5
    } top`,
    // markers: true,
  },

  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
  stagger: 0.3,
});

gsap.from("#whoami__cloud", {
  scrollTrigger: {
    traget: "#whoami",
    start: `${
      document.querySelector("#whoami").offsetTop -
      document.querySelector("#whoami").offsetTop * 0.5
    } top`,
    // markers: true,
  },

  opacity: 0,
  duration: 1,
  left: -340,
});

gsap.from("#works__statue", {
  scrollTrigger: {
    traget: "#works",
    start: `${
      document.querySelector("#works").offsetTop -
      document.querySelector("#works").offsetTop * 0.25
    } top`,
    // markers: true,
  },

  opacity: 0,
  duration: 1,
});

gsap.from(".works__text", {
  scrollTrigger: {
    traget: "#works",
    start: `${
      document.querySelector("#works").offsetTop -
      document.querySelector("#works").offsetTop * 0.25
    } top`,
  },

  opacity: 0,
  duration: 1,
  y: 30,
  stagger: 0.3,
});

gsap.from(".qna__text", {
  scrollTrigger: {
    traget: "#qna",
    start: `${document.querySelector("#qna").offsetTop} top`,
    // markers: true,
  },

  opacity: 0,
  duration: 1,
  y: 30,
  stagger: 0.3,
});

gsap.from("#contact_back_cloud_1", {
  scrollTrigger: {
    traget: "#contact",
    start: `${
      document.querySelector("#contact").offsetTop -
      document.querySelector("#contact").offsetTop * 0.05
    } top`,
  },

  ease: Power4.easeOut,
  duration: 1,
  opacity: 0,
  x: +150,
});

gsap.from("#contact_front_cloud_1", {
  scrollTrigger: {
    traget: "#contact",
    start: `${
      document.querySelector("#contact").offsetTop -
      document.querySelector("#contact").offsetTop * 0.05
    } top`,
  },

  ease: Power4.easeOut,
  duration: 1,
  delay: 0.5,
  x: +100,
  opacity: 0,
});

gsap.from("#contact_phone_statue", {
  scrollTrigger: {
    traget: "#contact",
    start: `${
      document.querySelector("#contact").offsetTop -
      document.querySelector("#contact").offsetTop * 0.05
    } top`,
  },

  ease: Power4.easeOut,
  duration: 2,
  delay: 0.75,
  opacity: 0,
  left: -100,
});

gsap.from("#contact_back_cloud_2", {
  scrollTrigger: {
    traget: "#contact",
    start: `${
      document.querySelector("#contact").offsetTop -
      document.querySelector("#contact").offsetTop * 0.05
    } top`,
  },
  ease: Power4.easeOut,

  duration: 1,
  opacity: 0,
  left: -150,
});

gsap.from("#contact_front_cloud_2", {
  scrollTrigger: {
    traget: "#contact",
    start: `${
      document.querySelector("#contact").offsetTop -
      document.querySelector("#contact").offsetTop * 0.05
    } top`,
  },
  ease: Power4.easeOut,

  duration: 1,
  delay: 0.5,
  left: -100,
  opacity: 0,
});

gsap.from("#contact_front_cloud_3", {
  scrollTrigger: {
    traget: "#contact",
    start: `${
      document.querySelector("#contact").offsetTop -
      document.querySelector("#contact").offsetTop * 0.05
    } top`,
  },

  ease: Power4.easeOut,
  duration: 1,
  delay: 0.75,
  x: +100,
  opacity: 0,
});
