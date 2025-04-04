import { COLLECTION_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Collections = (props) => {
  const { resData } = props;
  return (
    <div className="collections-card ">
      <Link to="./">
        <img src={COLLECTION_URL + resData.imageId}></img>
      </Link>
    </div>
  );
};

export default Collections;
