import "./styles.css";
import Home from "./home.js";

const homeBtn = document.querySelector("#home-btn");
const contentContainer = document.querySelector("#content");

contentContainer.innerHTML = Home();

homeBtn.addEventListener("click", () => {
    contentContainer.textContent = "";
    contentContainer.innerHTML = Home();
});