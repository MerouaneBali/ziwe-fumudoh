
const targets = document.querySelectorAll(".quotes__parallax");

for (const target of targets) {
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
