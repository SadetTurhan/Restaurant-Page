import 'bootstrap';
import {navBar} from "./navbar";
import {createHomePage} from "./home";
import {render} from "./render";
import {createMenuPage} from "./menu";
import {createContactPage} from "./contact";
navBar();
createHomePage();

const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click",render);
menuButton.addEventListener("click",createMenuPage);
const homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click",render);
homeButton.addEventListener("click",createHomePage);
const contactButton = document.getElementById("contactButton");
contactButton.addEventListener("click",render);
contactButton.addEventListener("click",createContactPage);