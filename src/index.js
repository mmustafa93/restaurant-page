import "./styles.css";
import Home from "./home.js";
import Menu from "./menu.js";
import locationAndHours from "./locationsAndHours.js";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelectorAll(".menu-btn");
const locationsAndHoursBtn = document.querySelector("#locations-hours-btn");
const contentContainer = document.querySelector("#content");

contentContainer.innerHTML = Home();

homeBtn.addEventListener("click", () => {
    contentContainer.textContent = "";
    contentContainer.innerHTML = Home();
});

menuBtn.forEach((btn) => btn.addEventListener("click", () => {
    contentContainer.textContent = "";
    contentContainer.innerHTML = Menu();
}));

locationsAndHoursBtn.addEventListener("click", () => {
    contentContainer.textContent = "";
    contentContainer.innerHTML = locationAndHours();
});