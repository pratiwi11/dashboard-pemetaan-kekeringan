//Toggle class active
const Nav = document.querySelector(".nav");

// ketika hamburger menu di klik
document.querySelector("#menu1").onclick = () => {
  Nav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const menu1 = document.querySelector("#menu1");

document.addEventListener("click", function (e) {
  if (!menu1.contains(e.target) && !Nav.contains(e.target)) {
    Nav.classList.remove("active");
  }
});
