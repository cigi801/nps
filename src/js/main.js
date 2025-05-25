import "../css/style.css";
import "../css/home.css";
import { getParkData, getInfoLinks} from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";



function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}
  
function setParkInfoLinks(data) {
    const infoEl = document.querySelector(".info");
    // map to transform the array of objects into an array of HTML strings.
    const html = data.map(mediaCardTemplate);
    // join the array of strings into one string and insert it into the section
    infoEl.innerHTML = html.join("");
  }

  async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);
    setParkIntro(parkData);
    setHeaderFooter(parkData);
    setParkInfoLinks(links);
    }

  
  init();



