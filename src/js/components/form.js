const form = document.querySelector("form");
const errElem = form.querySelector(".err");
const input = errElem.previousElementSibling;
errElem.style.opacity = "0";
let err = "";

const addWarning = (bol, m) => {
  if (!bol) {
    errElem.innerHTML = m;
    input.classList.add("warning");
    errElem.style.opacity = "1";
    err = true;
    return;
  }

  err = false;
  errElem.style.opacity = "0";
  input.classList.remove("warning");
  input.innerHTML = "";
};

form.addEventListener("submit", (e) => {
  const value = input.value;

  if (value.length <= 0) {
    addWarning(false, "can not be empty");
  }

  if (err) {
    e.preventDefault();

    input.addEventListener("keydown", (e) => {
      console.log(input.value);
      const value = input.value;
      const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      console.log(value.length >= 26);

      console.log(value.length >= 26);

      if (value.length <= 0) {
        addWarning(false, "this cant be empty");
      } else if (value.length >= 30) {
        addWarning(false, "email is too long");
      } else if (!regex.test(value)) {
        addWarning(false, "invalid or unfinished input");
      } else {
        addWarning(true, null);
      }
    });
  }
});
