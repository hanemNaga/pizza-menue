import focaccia from "./pizzas/funghi.jpg";
import funghi from "./pizzas/funghi.jpg";
import marghrita from "./pizzas/margherita.jpg";
import prosciutto from "./pizzas/prosciutto.jpg";
import salamoni from "./pizzas/salamino.jpg";
import spinaci from "./pizzas/spinaci.jpg";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
    imgSrc: focaccia,
    index: 0,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
    imgSrc: marghrita,
    index: 1,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
    imgSrc: spinaci,
    index: 2,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
    imgSrc: funghi,
    index: 3,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
    imgSrc: salamoni,
    index: 4,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
    imgSrc: prosciutto,
    index: 5,
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <main>
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredients={pizza.ingredients}
            imgSrc={pizza.imgSrc}
            key={pizza.index}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast react pizza co.</h1>
    </header>
  );
}
function Pizza({ imgSrc, name, ingredients }) {
  return (
    <div className="pizza">
      <img src={imgSrc} alt="" />
      <h2>{name}</h2>

      <p>{ingredients}</p>
    </div>
  );
}

function Footer() {
  return <footer>{new Date().toLocaleString()} we are currently open</footer>;
}
