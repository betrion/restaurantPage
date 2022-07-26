import "./style.css";
import createNavbar from "./navbar";
import homePage from "./home";
import contactPage from "./contact";
import hamburger from "./images/hamburger.png";
import cheeseburger from "./images/cheeseburger.png";
import doublecheese from "./images/doublecheese.png";
import french from "./images/french-fries.png";
import ribs from "./images/ribs.png";
import steak from "./images/steak.jpg";
import drawMenu from "./menu";
export const menuItems = [
  {
    name: "Hamburger",
    desc: "Delicious hamburger you cant pass on!",
    price: "1.99$",
    pic: hamburger,
  },
  {
    name: "Cheeseburger",
    desc: "Hamburger with cheese on top! Amazing!",
    price: "2.99$",
    pic: cheeseburger,
  },
  {
    name: "Double Cheese",
    desc: "Double the goodness you know and love!",
    price: "4.99$",
    pic: doublecheese,
  },
  {
    name: "French Fries",
    desc: "You can't pass on them, comes with kechup!",
    price: ".99$",
    pic: french,
  },
  {
    name: "BBQ Ribs",
    desc: "Delicious plate of ribs with extra homemade bbq sauce!",
    price: "9.99$",
    pic: ribs,
  },
  {
    name: "Steak",
    desc: "Medium to well done, to your taste!",
    price: "12.99$",
    pic: steak,
  },
];
document.body.appendChild(createNavbar());
document.body.appendChild(createContent());

const menuButtons = document.querySelectorAll("button");
const contentSelector = document.querySelector(".content");
// contentSelector.appendChild(homePage());

function createContent() {
  const content = document.createElement("div");
  content.classList.add("content");
  return content;
}
menuButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    clearContent();
    switch (e.target.innerText) {
      case "Home":
        console.log(e.target.innerText);
        contentSelector.appendChild(homePage());
        break;
      case "Menu":
        console.log(e.target.innerText);

        contentSelector.appendChild(drawMenu());
        break;
      case "Contact Us":
        console.log(e.target.innerText);
        contentSelector.appendChild(contactPage());
        break;
      default:
        break;
    }
  });
});

function clearContent() {
  return (contentSelector.innerHTML = "");
}
