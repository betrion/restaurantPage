export default function createNavbar() {
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");
  const pageTitle = document.createElement("h1");
  pageTitle.innerHTML = "My-Fast-Food-Restaraunt";

  const pageElements = ["Home", "Menu", "Contact Us"];
  const navButtons = document.createElement("ul");
  navButtons.classList.add("navlist");

  pageElements.forEach((pageElem) => {
    let currElem = document.createElement("li");
    currElem.innerHTML = `<button>${pageElem}</button>`;
    navButtons.appendChild(currElem);
  });

  navbar.appendChild(pageTitle);
  navbar.appendChild(navButtons);
  return navbar;
}
