import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
home();

const menuBtn = document.querySelector("#menu");
const homeBtn = document.querySelector("#home");

homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
console.log("Hello");