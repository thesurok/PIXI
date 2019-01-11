var Application = PIXI.Application,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  TextureCache = PIXI.utils.TextureCache,
  Rectangle = PIXI.Rectangle,
  Sprite = PIXI.Sprite;

var app = new Application({ width: 512, height: 512, transparent: 1 });
var stage = app.stage;

document.getElementById("display").appendChild(app.view);

loader
  .add("img/spritesheet.json")
  .add("img/tilesheet.png")
  .on("progress", loadProgressHandler)
  .load(setup);

function loadProgressHandler(loader, resource) {
  console.log(
    "Loading: " + loader.progress + "%" + " now loading " + resource.url
  );
}

function setup() {
  var id = PIXI.loader.resources["img/spritesheet.json"].textures;
  var dog = new Sprite(id["expressive_dog.png"]);
  var glasses = new Sprite(id["glasses.png"]);
  var texture = TextureCache["img/tilesheet.png"];
  //Create a rectangle object that defines the position and
  //size of the sub-image you want to extract from the texture
  var rectangle = new Rectangle(64, 0, 32, 32);
  //Tell the texture to use that rectangular section
  texture.frame = rectangle;
  //Create the sprite from the texture
  var star = new Sprite(texture);

  //////////////////////////////////
  star.position.set(442, 54);
  dog.position.set(96, 96);
  glasses.width = 256;
  glasses.height = 192;
  glasses.position.set(312, 128);
  glasses.anchor.set(0.5, 0.5);
  stage.addChild(dog);
  stage.addChild(glasses);
  stage.addChild(star);
}
