"use strict";

const navbarLink = document.querySelector(".navbar__menu");
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const contactMeLink = document.querySelector(".home__contact");
const home = document.querySelector(".home_container");
const homeHeight = home.getBoundingClientRect().height;
const arrow = document.querySelector(".arrow");

document.addEventListener("scroll", () => {
  arrow.style.opacity = scrollY / navbarHeight;
})

arrow.addEventListener("click", (event) => {
  const link = event.target.dataset.link;
  const toScroll = document.querySelector(link);
  
  toScroll.scrollIntoView({behavior: "smooth"});
  
})

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - scrollY / homeHeight;
})

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("back--dark");
  } else {
    navbar.classList.remove("back--dark");
  }
})

navbarLink.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return
  }
  const active = document.querySelector(".active");
  active.classList.remove("active");
  const toScroll = document.querySelector(link);
  toScroll.scrollIntoView({behavior: "smooth"});
  target.classList.add("active");
});

contactMeLink.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link == null) return;
  const toScroll = document.querySelector(link);
  toScroll.scrollIntoView({behavior: "smooth"});
})

