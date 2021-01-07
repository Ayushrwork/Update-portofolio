//all elements
const nav = document.querySelector("nav");
const mouseCursor = document.querySelector(".cursor");
const allLinks = document.querySelectorAll("a");

//all eventlisterns
window.addEventListener("scroll", fixNav);
window.addEventListener("mousemove", cursor);

//functions
function fixNav() {
  if (window.pageYOffset > nav.offsetHeight + 10) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

//cursor position
function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

//cursor modification while hovering the links
allLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cursorGrow");
    link.classList.add("hoverLink");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursorGrow");
    link.classList.remove("hoverLink");
  });
});

icons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cursorGrow");
  });
  icon.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursorGrow");
  });
});

//calling the functions
fixNav();
