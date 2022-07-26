export default function contactPage() {
  const contact = document.createElement("section");
  contact.classList.add("main");
  const contactContainer = document.createElement("div");
  const address = document.createElement("p");
  address.innerHTML =
    "11900 Wilshire Blvd, Los Angeles, CA 90025, United States";
  contactContainer.appendChild(address);
  const mapLocation = document.createElement("p");
  mapLocation.innerHTML = `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=kfc%20los%20angeles&key=AIzaSyB9ncKGorBUZGp_7FjigmvnJjwS9__ZhqM"></iframe>  `;
  contact.appendChild(address);
  contact.appendChild(mapLocation);
  return contact;
}
