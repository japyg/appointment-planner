import React from "react";

export const Tile = ({ value }) => {
  const arr = Object.values(value);
  console.log(arr);

  return (
    <div className="tile-container">
      {arr.map((val, index) => {
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
