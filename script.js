const container = document.getElementById("container");
const loginBtn = document.getElementById("login");
const registerBtn = document.getElementById("register");

const activateContainer = () => {
  container.classList.add("active");
};
const deactivateContainer = () => {
  container.classList.remove("active");
};

registerBtn.addEventListener("click", activateContainer);
loginBtn.addEventListener("click", deactivateContainer);
