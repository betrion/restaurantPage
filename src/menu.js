import { menuItems } from ".";
export default function drawMenu() {
  const menu = document.createElement("section");
  menu.classList.add("menu");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  menuItems.forEach((item) => {
    let menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `<img src="${item.pic}" alt="" srcset="">
                    <div class="item-content">
                        <h3>${item.name}</h3>
                        <p>${item.desc}</p>
                        <h5>${item.price}</h5>
                    </div>`;
    menuContainer.appendChild(menuItem);
  });
  menu.appendChild(menuContainer);

  return menu;
}
