import "./styles.css";
import testImage from "./test.png";

const image = document.createElement("img");
image.src = testImage;
document.body.appendChild(image);
console.log("Hello");