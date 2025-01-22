import "./styles.css";
import Home from "./home.js";
import locationAndHours from "./locationsAndHours.js";

const homeBtn = document.querySelector("#home-btn");
const locationsAndHoursBtn = document.querySelector("#locations-hours-btn");
const contentContainer = document.querySelector("#content");

contentContainer.innerHTML = Home();

homeBtn.addEventListener("click", () => {
    contentContainer.textContent = "";
    contentContainer.innerHTML = Home();
});

locationsAndHoursBtn.addEventListener("click", () => {
    contentContainer.textContent = "";
    contentContainer.innerHTML = locationAndHours();
});