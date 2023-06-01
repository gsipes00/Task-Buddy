import SingleItem from "./SingleItem";
const Items = ({
  items,
  removeItem,
  editItem,
  editItemDesc,
  isDescFormVisible,
}) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
            editItemDesc={editItemDesc}
            isDescFormVisible={isDescFormVisible}
          />
        );
      })}
    </div>
  );
};

export default Items;
