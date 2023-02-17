import React from 'react';

const Cartas = (props) => {
  return (
    <div className="Cartas">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default Cartas;