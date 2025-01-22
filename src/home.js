import "./styles.css";
import founders from "./assets/founders.png";

export default function Home() {
  return `
    <div id="home">
        <div id="home-text">
            <h1>NADC Burger</h1>
            <p><strong><i>Not a Damn Chance Burger</i></strong> is a wagyu cheeseburger collaboration between Professional Skateboarder Neen Williams and Michelin Starred Chef Phillip Frankland Lee of Sushi by Scratch Restaurants & Pasta Bar.</p>
        </div>
        <div id="home-img">
            <img src=${founders} alt="An Image of Founders" id="founders-image">
        </div>
    </div>
  `;
}