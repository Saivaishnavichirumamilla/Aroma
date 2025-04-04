import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  return (
    <div className="restro-card ">
      <img
        className="card-img"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <div className="cardline-one ">
        <h5>{resData.info.name}</h5>
        <p>
          {resData.info.avgRating} <span class="fa fa-star checked"></span>
        </p>
      </div>
      <div className="cardline-two ">
        <p>Rs.{resData.info.costForTwo} </p>
        <p>{resData.info.sla.deliveryTime} mins</p>
      </div>
    </div>
  );
};

{
  /**
  
  Higher order components
  export const withLabel = () => {
  return (props) => {
    return (
      <div>
        <label>Open</label>
        <RestroCard {...props} />
      </div>
    );
  };
};*/
}

export default RestroCard;
