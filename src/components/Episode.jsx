import React from "react";

function Episode({ id, name, air_date, episode, }) {
  return (
    <div key={id} className="episode">
      <h2>{name}</h2>
      <p>Air Date:{air_date}</p>
      <p>Episode Code: {episode}</p>
    </div>
  );
}

export default Episode;
