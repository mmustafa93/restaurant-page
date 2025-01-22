import burger from './assets/burger.png';

export default function Menu() {
    return `
        <div id="menu-page">
            <div id="menu-text">
                <h1>Menu</h1>
                <p>Our menu is a collaboration between Professional Skateboarder Neen Williams and Michelin Starred Chef Phillip Frankland Lee of Sushi by Scratch Restaurants & Pasta Bar.</p>
                <div id="burger">
                    <h3>NADC Burger</h3>
                    <p>Double patty of 100% full-blooded RC Ranch wagyu beef, American cheese, secret sauce, onions, pickles, slightly tamed jalapeños</p>
                </div>
                <div id="sides">
                    <h3>Sides</h3>
                    <p>Fries: Hand-cut fries, sweet potato fries, onion rings</p>
                    <p>Beast Mode Fries: fries with added cheese, diced pickles & slightly tamed jalapeños, special sauce & seasoning</p>
                </div>
            </div>
            <div id="menu-img">
                <img src=${burger} alt="An Image of a Burger" id="burger-image">
            </div>
        </div>
    `
}