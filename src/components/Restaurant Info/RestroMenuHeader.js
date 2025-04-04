const RestroMenuHeader = (props) => {
  const { resData } = props;
  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines } =
    resData.cards[2].card.card.info;
  return (
    <div className="menu-header">
      <h1>{name}</h1>
      <div className="menu-header-sub">
        <div className="menu-header-sub1">
          <p>
            <span className="fa fa-star checked"></span>
            {avgRating}({totalRatingsString})
          </p>
          <p>{costForTwoMessage}</p>
        </div>
        <div className="menu-header-sub2">{cuisines.join(", ")}</div>
        <div className="menu-header-sub3">
          {resData.cards[2].card.card.info.sla.slaString}
        </div>
        <div className="menu-header-tag">
          Free delivery on orders above Rs.199
        </div>
      </div>
    </div>
  );
};

export default RestroMenuHeader;
