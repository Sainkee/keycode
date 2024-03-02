let h1 = document.querySelector("h1");
let keycode = document.getElementsByClassName("keycode")[0];
let body = document.body;

body.addEventListener("keydown", (e) => {
  let span = document.createElement("span");
  span.style.color = "green";
  span.textContent = e.key;
  h1.textContent = `You Pressed `;
  h1.appendChild(span);
  keycode.textContent = e.keyCode;
});
