import { useState } from "react";
const DescForm = ({ editItemDesc }) => {
  const [newDesc, setNewDesc] = useState("");
  // handle submit
  const handleDescSubmit = (e) => {
    e.preventDefault();
    if (!newDesc) {
      toast.error("please include a value");
      return;
    }
    editItemDesc();
    // not sure what to do here. left off here. 
    onClick={() => editItemDesc(item.id)}
    setNewDesc("");
    console.log(newDesc);
  };

  return (
    <form onSubmit={handleDescSubmit}>
      {/* <h4>Grocery Bud</h4> */}
      <div className='form-control'>
        <input
          className='form-input'
          type='text'
          value={newDesc}
          onChange={(event) => setNewDesc(event.target.value)}
        />
        <button type='submit' className='btn'>
          add desc
        </button>
      </div>
    </form>
  );
};

export default DescForm;
