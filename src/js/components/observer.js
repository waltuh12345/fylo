const main = document.querySelector("main");
const mainChildren = Array.from(main.children);
const mainSec2 = Array.from(mainChildren[1].children);
const mainSec3 = Array.from(mainChildren[3].children);

mainSec2.forEach((el) => {
  el.classList.add("animate");
});

mainSec3.forEach((el) => {
  el.classList.add("animate");
});

const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((elements) => {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("animated");
    } else {
      element.target.classList.remove("animated");
      element.target.style.opacity = "0";
    }

    element.target.addEventListener("animationstart", (e) => {
      element.target.style.opacity = "1";
    });
  });
});

elements.forEach((el) => {
  observer.observe(el);
});
