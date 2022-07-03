import React from "react";

export const Tile = ({ value }) => {
  const obj = Object.values(value);
  return (
    <div className="tile-container">
      {obj.map((val, index) => {
        if (index === 0) {
          return (
            <p className="tile-title" key={index}>
              {val}
            </p>
          );
        } else {
          return (
            <p className="tile" key={index}>
              {val}
            </p>
          );
        }
      })}
    </div>
  );
};
