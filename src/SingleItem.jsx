import { useState } from "react";
import Description from "./Description";
import DescForm from "./DescForm";
const SingleItem = ({
  item,
  removeItem,
  editItem,
  editItemDesc,
  isDescFormVisible,
}) => {
  const [isDescVisible, setIsDescVisible] = useState(false);

  return (
    <section>
      <div className='single-item'>
        <input
          type='checkbox'
          checked={item.completed}
          onChange={() => editItem(item.id)}
        />
        <p
          style={{
            textTransform: "capitalize",
            textDecoration: item.completed && "line-through",
          }}
          onClick={() => setIsDescVisible(!isDescVisible)}
        >
          {item.name}
        </p>
        <button
          className='btn desc-btn'
          type='button'
          onClick={() => setIsDescVisible(!isDescVisible)}
        >
          add desc
        </button>
        <button
          className='btn remove-btn'
          type='button'
          onClick={() => removeItem(item.id)}
        >
          remove
        </button>
      </div>
      {isDescVisible ? <Description item={item} /> : ""}
      {isDescFormVisible ? (
        <DescForm item={item} editItemDesc={editItemDesc} />
      ) : (
        ""
      )}
    </section>
  );
};

export default SingleItem;
