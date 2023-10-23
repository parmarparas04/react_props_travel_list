import { useState } from "react";
import Item from "./Item";
import ItemModel from "../models/item";
interface Props {
  items: ItemModel[];
  onToggleItem: (id: any) => void;
  onDeleteItem: (id: any) => void;
  onClearList: () => void;
}

const PackingList = ({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}: Props) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems: ItemModel[] = [];

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
};
export default PackingList;
