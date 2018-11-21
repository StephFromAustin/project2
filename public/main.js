const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container2");

// ScrollSpy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});
//sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});

