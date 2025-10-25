// Select all sections
const homeSec = document.querySelector(".about--me");
const projectsSec = document.querySelector(".projects--section");
const skillsSec = document.querySelector(".skills--container");
const experienceSec = document.querySelector(".working--experience");
const contactsSec = document.querySelector(".contacts--container");
const allSection = document.querySelectorAll(".section");
// Select all navigation buttons
const homeBTN = document.querySelector(".btn-home");
const projectsBTN = document.querySelector(".btn-projects");
const skillsBTN = document.querySelector(".btn-skills");
const experienceBTN = document.querySelector(".btn-experience");
const contactsBTN = document.querySelector(".btn-contacts");

const navBar = document.querySelector("nav");

// Add scroll event listeners for each button
homeBTN.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("btn"))
    homeSec.scrollIntoView({ behavior: "smooth" });
});

projectsBTN.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("btn"))
    projectsSec.scrollIntoView({ behavior: "smooth" });
});

skillsBTN.addEventListener("click", function (e) {
  e.preventDefault();
  skillsSec.scrollIntoView({ behavior: "smooth" });
});

experienceBTN.addEventListener("click", function (e) {
  e.preventDefault();
  experienceSec.scrollIntoView({ behavior: "smooth" });
});

contactsBTN.addEventListener("click", function (e) {
  e.preventDefault();
  contactsSec.scrollIntoView({ behavior: "smooth" });
});

const obsfn = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("hidden");

    // If section was observed don't repeat observation
    observer.unobserve(entry.target);
  });
};
const secObserver = new IntersectionObserver(obsfn, {
  root: null,
  threshold: 0.2,
});

allSection.forEach((sec) => secObserver.observe(sec));
