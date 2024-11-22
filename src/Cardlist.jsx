import React from "react";
import Card from "./Card";
import "./CardList.css"; // Import styles

const CardList = ({ data }) => {
  return (
    <div className="card-list">
      {data.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardList;
