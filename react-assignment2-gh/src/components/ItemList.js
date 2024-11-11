import React from "react";

export default function ItemList(props) {
  const { items } = props;
  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
