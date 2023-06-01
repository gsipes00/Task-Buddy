import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import Items from "./Items";

// get items from local storage
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};

// add items to local storage
const setLocalStorage = (items) => {
  // set item in local storage and stringify the entire object in an array
  localStorage.setItem("list", JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const App = () => {
  const [items, setItems] = useState(defaultList);
  const [isDescFormVisible, setIsDescFormVisible] = useState(false);

  // add item function
  const addItem = (itemName, desc) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
      description: desc ? desc : "no description provided",
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    // do something with local storage
    setLocalStorage(newItems);
    toast.success("item added to list");
  };

  // remove item function
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item deleted");
  };

  // edit item function
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  // edit Desc item function
  const editItemDesc = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = {
          ...item,
          description: itemId.description,
        };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    setIsDescFormVisible(!isDescFormVisible);
  };

  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form addItem={addItem} />
      <Items
        items={items}
        removeItem={removeItem}
        editItem={editItem}
        editItemDesc={editItemDesc}
        isDescFormVisible={isDescFormVisible}
      />
    </section>
  );
};

export default App;
