import "./style.css";
import createNavbar from "./navbar";

function createContent() {
  const content = document.createElement("div");
  content.classList.add("content");
  return content;
}

document.body.appendChild(createNavbar());
document.body.appendChild(createContent());
