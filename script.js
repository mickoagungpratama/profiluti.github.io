// Parallax Effects
const text = document.getElementById("text");
const front = document.getElementById("front");
const back = document.getElementById("back");
const background = document.getElementById("background");
const c_left = document.getElementById("cloud-left");
const c_right = document.getElementById("cloud-right");
const btn = document.getElementById("btn");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  text.style.top = 30 + value * -0.1 + "%";
  front.style.top = value * 0.2 + "px";
  back.style.top = value * 0.5 + "px";
  background.style.top = value * -0.1 + "px";
  c_left.style.left = value * -0.5 + "px";
  c_left.style.top = value * 0.5 + "px";
  c_right.style.left = value * 0.5 + "px";
  c_right.style.top = value * 0.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
});

// Active Navbar
const li = document.querySelectorAll(".nav-items");
const sec = document.querySelectorAll(".links");

window.addEventListener("scroll", () => {
  let current = "";
  sec.forEach((sec) => {
    const sectionTop = sec.offsetTop;
    const sectionHeight = sec.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 10) {
      current = sec.getAttribute("id");
    }
    console.log(current);
  });

  li.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

// Sticky navbar
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 500);
});

// Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle input");
const navLinks = document.querySelector("#header ul");
const resTogg = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show");
  resTogg.classList.toggle("res-toggs");
});
