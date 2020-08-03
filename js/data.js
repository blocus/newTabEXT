const root = document.querySelector("#app");
const prefix = "animate__";
const configBtn = document.getElementById("config-btn");
const checkTrueValue = "true";
const drop = document.getElementById("config-drop");
const annimations = [
  "bounce",
  "flash",
  "pulse",
  "rubberBand",
  "shakeX",
  "shakeY",
  "headShake",
  "swing",
  "tada",
  "wobble",
  "jello",
  "heartBeat",
  "backInDown",
  "backInLeft",
  "backInRight",
  "backInUp",
  "bounceIn",
  "bounceInDown",
  "bounceInLeft",
  "bounceInRight",
  "bounceInUp",
  "fadeIn",
  "fadeInDown",
  "fadeInDownBig",
  "fadeInLeft",
  "fadeInLeftBig",
  "fadeInRight",
  "fadeInRightBig",
  "fadeInUp",
  "fadeInUpBig",
  "fadeInTopLeft",
  "fadeInTopRight",
  "fadeInBottomLeft",
  "fadeInBottomRight",
  "flip",
  "flipInX",
  "flipInY",
  "lightSpeedInRight",
  "lightSpeedInLeft",
  "rotateIn",
  "rotateInDownLeft",
  "rotateInDownRight",
  "rotateInUpLeft",
  "rotateInUpRight",
  "hinge",
  "jackInTheBox",
  "rollIn",
  "zoomIn",
  "zoomInDown",
  "zoomInLeft",
  "zoomInRight",
  "zoomInUp",
  "slideInDown",
  "slideInLeft",
  "slideInRight",
  "slideInUp",
];

const timeForms = ["LT", "LTS", "L", "YYYY-MM-DD hh:mm:ss a", "LLL", "LLLL"];

const config = document.getElementById("config");
const getAnimationClassName = (node, animation) => {
  return new Promise((resolve, reject) => {
    node.classList.add(`${prefix}animated`, `${prefix}${animation}`);

    node.addEventListener("animationend", () =>
      handleAnimationEnd(node, animation, resolve)
    );
  });
};

const getDate = () => moment().format("YYYY-MM-DD");

const getTime = () => {
  let today = new Date();
  var hours = String(today.getHours()).padStart(2, "0");
  var minutes = String(today.getMinutes()).padStart(2, "0");
  var seconds = String(today.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

const getStorage = (key, defaultValue) => {
  let item = window.localStorage.getItem(key);
  if (!item) {
    window.localStorage.setItem(key, defaultValue);
    item = defaultValue;
  }
  return item;
};

function handleAnimationEnd(node, animation, resolve) {
  node.classList.remove(`${prefix}animated`, `${prefix}${animation}`);
  node.removeEventListener("animationend", handleAnimationEnd);

  resolve("Animation ended");
}
var titleCons = {
  textV: "Hello 😀",
  animationV: "fadeIn",

  text: "titleText",
  show: "titleShow",
  animation: "titleAnnimation",
  tag: "h1",
  id: "title",
};

var subtitleCons = {
  textV: "You can costumize this page 😉",
  animationV: "fadeIn",

  text: "subtitleText",
  show: "subtitleShow",
  animation: "subtitleAnnimation",
  tag: "p",
  id: "subtitle",
};
