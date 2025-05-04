import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

const parkData = getParkData();
console.log(parkData);

function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${parkData.fullName}</h1>
  <p>${parkData.description}</p>`;
}
  
function setParkInfoLinks(data) {
    const infoEl = document.querySelector(".info");
    // map to transform the array of objects into an array of HTML strings.
    const html = data.map(mediaCardTemplate);
    // join the array of strings into one string and insert it into the section
    infoEl.innerHTML = html.join("");
  }

  
  setParkIntro(parkData);
  setParkInfoLinks(parkInfoLinks);
  setHeaderFooter(parkData);



