import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import ItemModel from "../models/item";

const App = () => {
  const [items, setItems] = useState<ItemModel[]>([]);

  function handleAddItems(item: ItemModel) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id: any) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: any) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
