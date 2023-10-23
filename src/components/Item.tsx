import React from "react";
import ItemModel from "../models/item";

interface Props {
  item: ItemModel;

  onDeleteItem: (id: any) => void;
  onToggleItem: (id: any) => void;
}
const Item = ({ item, onDeleteItem, onToggleItem }: Props) => {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
