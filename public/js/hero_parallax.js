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
