import { useState } from "react";
import { toast } from "react-toastify";
const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");
  const [descItem, setDescItem] = useState("");

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("please include a value");
      return;
    }
    addItem(newItemName, descItem);
    setNewItemName("");
    setDescItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className='form-control'>
        <input
          className='form-input'
          type='text'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <input
          className='form-input-desc'
          type='text'
          value={descItem}
          onChange={(event) => setDescItem(event.target.value)}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
