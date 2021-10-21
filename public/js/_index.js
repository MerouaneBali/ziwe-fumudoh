const hero = document.getElementById("hero");

var rect = hero.getBoundingClientRect();
var mouse = { x: 0, y: 0, moved: false };

const createParallaxTarget = (querySelector, movement) => {
  return {
    querySelector: querySelector,
    x: parseInt(
      window
        .getComputedStyle(document.querySelector(querySelector))
        .transform.slice(1, -1)
        .split(",")[4]
        .slice(1)
    ),

    y: parseInt(
      window
        .getComputedStyle(document.querySelector(querySelector))
        .transform.slice(1, -1)
        .split(",")[5]
        .slice(1)
    ),
    movement: movement,
  };
};

function parallaxIt(target) {
  const x = ((mouse.x - rect.width / 2) / rect.width) * target.movement * -1;
  const y =
    target.y +
    ((mouse.y - rect.height / 2) / rect.height) * target.movement * -1;

  gsap.to(target.querySelector, 2, {
    x: x,
    y: y,
    ease: Power1.easeOut,
  });
}

const parallaxTargets = [
  { querySelector: "#hero__column_1", movement: 15 + 40 },
  { querySelector: "#hero__column_2", movement: 25 + 40 },
  { querySelector: "#hero__statues_1", movement: 25 + 40 },
  { querySelector: "#hero__ziwe", movement: 45 + 40 },
  { querySelector: "#hero__statues_2", movement: 35 + 40 + 40 },
].map((target) => createParallaxTarget(target.querySelector, target.movement));

// Ticker event will be called on every mouse movement event
hero.addEventListener("mousemove", (e) => {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

// Ticker event will be called on every frame
gsap.ticker.add(() => {
  if (mouse.moved) {
    gsap.to("#hero__background", 0.5, {
      x: ((mouse.x - rect.width / 2) / rect.width) * 15,
      y: ((mouse.y - rect.height / 2) / rect.height) * 15,
    });

    parallaxTargets.map((target) => parallaxIt(target));
  }
  mouse.moved = false;
});

// Ticker event will be called on every resize or scroll event
window.addEventListener("resize scroll", () => {
  rect = hero.getBoundingClientRect();
});

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

const targets = document.querySelectorAll(".quotes__parallax");

for (const target of targets) {
  console.log(` ${target.dataset.transform}`);
  target.style.transform = `${target.dataset.transform}`;
}

ScrollTrigger.create({
  trigger: "#quotes",

  start: "-100% top",
  end: "bottom top",

  onUpdate: (self) => {
    for (const target of targets) {
      // const maxTransform = window.getComputedStyle(target).transform;
      // const [x, y, s, x3d, y3d, z3d] = maxTransform
      //   .slice(7, -1)
      //   .split(", ")
      //   .map((unit) => parseFloat(unit));

      // console.log(x, y, s, x3d, y3d, z3d);

      target.style.transform = `${target.dataset.transform} translate3d(0, ${
        self.progress * 10 * (target.dataset.speed || 100) * -1
      }px, 0)`;
    }
  },
  // markers: true,
});

const app = new PIXI.Application({
  backgroundAlpha: 0,
  antialias: true,
  height: 389,
  width: 502,

  // resolution: window.devicePixelRatio,
});

const loader = PIXI.Loader.shared;

loader
  .add([
    "../assets/cherubs/1/spritesheet.json",
    "../assets/cherubs/2/spritesheet.json",
    "../assets/cherubs/3/spritesheet.json",
    "../assets/cherubs/4/spritesheet.json",
    "../assets/cherubs/5/spritesheet.json",
    "../assets/cherubs/6/spritesheet.json",
    "../assets/cherubs/7/spritesheet.json",
    "../assets/cherubs/8/spritesheet.json",
  ])
  .load(setup);

// PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
// PIXI.settings.RESOLUTION = 1;
// PIXI.utils.clearTextureCache();

app.view.classList.add("quotes__cherubs");
document.getElementById("quotes").appendChild(app.view);

function setup() {
  const spritesheets = [
    "../assets/cherubs/1/spritesheet.json",
    "../assets/cherubs/2/spritesheet.json",
    "../assets/cherubs/3/spritesheet.json",
    "../assets/cherubs/4/spritesheet.json",
    "../assets/cherubs/5/spritesheet.json",
    "../assets/cherubs/6/spritesheet.json",
    "../assets/cherubs/7/spritesheet.json",
    "../assets/cherubs/8/spritesheet.json",
  ].map((spritesheet) => PIXI.Loader.shared.resources[spritesheet].spritesheet);

  const textures = spritesheets
    .map((spritesheet) =>
      Object.keys(spritesheet.textures).map((key) => PIXI.Texture.from(key))
    )
    .flat();

  const animatedSprite = new PIXI.AnimatedSprite(textures);

  animatedSprite.animationSpeed = 0.5;

  app.stage.addChild(animatedSprite);

  animatedSprite.play();
}

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

const audio = new Audio("../audio/loop.mp3");
const audioBtn = document.querySelector("#info__music");

audio.addEventListener(
  "ended",
  () => {
    audio.currentTime = 0;
    audio.play();
  },
  false
);

audioBtn.addEventListener("click", () => {
  audioBtn.classList.toggle("info__music--playing");
  audio.paused || audio.ended ? audio.play() : audio.pause();
});
