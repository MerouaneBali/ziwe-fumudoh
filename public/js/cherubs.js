
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
  