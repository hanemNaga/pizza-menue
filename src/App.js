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

const contactsIfo = [
  "www.pizza.com",
  "01020203040",
  "www.facebook.com/pizzaco",
];

export default function App() {
  return (
    <div>
      <Header />
      <menu className="menu">
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.index} />
          ))}
        </ul>
      </menu>
      <h3>please contact us on:</h3>
      {contactsIfo.map((contact, index) => (
        <Contacts contactData={contact} key={index}></Contacts>
      ))}

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
function Pizza({ pizzaObj }) {
  return (
    <li className="pizza">
      <img src={pizzaObj.imgSrc} alt="" />
      <h2>{pizzaObj.name}</h2>

      <p>{pizzaObj.ingredients}</p>
      <p> price: {pizzaObj.price}</p>
    </li>
  );
}

function Footer() {
  const date = new Date().getHours();
  const openHours = 10;
  const closeHours = 22;
  let isOpen = date >= openHours && date <= closeHours;

  return (
    <footer className="footer">
      {isOpen ? (
        <div>
          <p>we are open until {closeHours}:00 come and visit us</p>
          <button className="btn">order now</button>
        </div>
      ) : (
        <p>the shop is closed now</p>
      )}
    </footer>
  );
}
function Contacts({ contactData }) {
  return <p style={{ color: "rgba(40, 145, 40, 1)" }}>{contactData}</p>;
}
