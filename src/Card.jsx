import React from 'react';

function Card({ mycard }) {
  return (
    <div>
      {mycard.map((newcard, index) => (
        <div className="card" key={index}>
          <img className="img"src={newcard.image} alt={newcard.tittle} />
          <h1>{newcard.tittle}</h1>
          <p>{newcard.description}</p>

        </div>

      ))}
    </div>
  );
}

export default Card;
