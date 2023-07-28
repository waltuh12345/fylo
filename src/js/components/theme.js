const themeToggle = document.querySelector(".theme-toggle");
const themeCheck = themeToggle.querySelector("input");
const body = document.querySelector("body");
let theme = localStorage.getItem("theme");
themeCheck.checked = true;

themeToggle.addEventListener("click", () => {
  const isActive = themeCheck.checked;

  if (isActive) {
    localStorage.setItem("theme", "dark");
    body.classList.remove("light-theme");
  } else {
    localStorage.setItem("theme", "light");
    body.classList.add("light-theme");
  }
});

if (theme === "light") {
  themeCheck.checked = false;
  body.classList.add("light-theme");
} else {
  themeCheck.checked = true;
  body.classList.remove("light-theme");
}
