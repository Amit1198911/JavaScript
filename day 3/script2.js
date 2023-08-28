const body = document.body;

const panel = document.createElement("div");
panel.setAttribute("class","msgBox");
body.appendChild(msg);

const classBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appenndChild(closeBtn);

closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
displayMessage();
displayMessage();

