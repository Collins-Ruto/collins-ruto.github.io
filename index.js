let navToggle = document.querySelector(".nav-toggle"),
  navLinks = document.querySelectorAll(".nav__link"),
  boddy = document.querySelector(".bodyy"),
  closer = document.querySelector(".close"),
  contact = document.getElementById("contact"),
  portDesc = document.querySelector(".port-desc"),
  portImg = document.querySelector(".portfolio__item"),
  pdesc = document.getElementById("pdesc"),
  portfolio = document.querySelectorAll(".portfolio__item");
document.querySelectorAll(".anim").forEach((e) => {
  e.classList.add("slow");
}),
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  }),
  navLinks.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
    });
  }),
  boddy.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  }),
  portDesc.addEventListener("mouseover", () => {
    document.body.classList.remove("port-desc");
  }),
  portfolio.forEach((e) => {
    e.addEventListener("mouseover", () => {
      e.querySelector(".descp").classList.add("desc-off"),
        console.log("got here");
    });
  }),
  portfolio.forEach((e) => {
    e.addEventListener("mouseout", () => {
      pdesc.classList.remove("desc-off");
      e.querySelector(".descp").classList.remove("desc-off");
    });
  });
const observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
      e.isIntersecting
        ? e.target.classList.add("show")
        : e.target.classList.remove("show");
    });
  }),
  hiddenElements = document.querySelectorAll(".to_hide");
hiddenElements.forEach((e) => observer.observe(e));
