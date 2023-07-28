import "../scss/main.scss";
import "animate.css";
const loading = document.querySelector(".loading-wrapper");
const body = document.querySelector("body");
body.style.overflowY = "hidden";

Promise.all([
  import("./components/form"),
  import("./components/observer"),
  import("./components/theme"),
]).then(() => {
  loading.style.display = "none";
  body.style.overflowY = "";
});
