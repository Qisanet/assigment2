import React from "react";
import CardList from "./Cardlist";
import "./App.css"; 

const App = () => {
  const cardData = [
    {
      image: "https://via.placeholder.com/150",
      title: "Card 1",
      description: "This is the description for card 1.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Card 2",
      description: "This is the description for card 2.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Card 3",
      description: "This is the description for card 3.",
    },
  ];

  return (
    <div className="app">
      <h1>Card List</h1>
      <CardList data={cardData} />
    </div>
  );
};

export default App;
