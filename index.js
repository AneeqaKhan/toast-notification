import "./styles.css";

const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  generateToast();
});

function generateToast() {
  //creating toast element and adding styling class
  const toast = document.createElement("div");
  toast.classList.add("toast");

  //assigning random background color to each toast
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  toast.style.backgroundColor = "#" + randomColor;

  //assigning text to toast
  toast.innerText = "Hello there 👋🏼";
  container.appendChild(toast);

  //making toast disappear after 2s
  setTimeout(() => {
    toast.remove();
  }, 2000);
}
