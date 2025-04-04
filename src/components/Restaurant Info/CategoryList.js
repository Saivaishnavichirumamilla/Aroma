import DishCard from "./DishCard";

const CategoryList = (props) => {
  const { data, setExpandIndex, showDishCard } = props;

  const handleClick = () => {
    setExpandIndex();
  };
  return (
    <div className="list-container" onClick={handleClick}>
      <div className="list-header">
        <div className="list-title">
          {data.card.card.title} ({data.card.card.itemCards.length})
        </div>
        <div className="list-symbol">↓</div>
      </div>
      <div>
        {data.card.card.itemCards.map(
          (d) => showDishCard && <DishCard dishData={d} />
        )}
      </div>
    </div>
  );
};

export default CategoryList;
