import { useState } from "react";
const Mission = () => {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);

  const handleClick1 = () => {
    setShow1(true);
    setShow2(false);
  };
  const handleClick2 = () => {
    setShow1(false);
    setShow2(true);
  };
  return (
    <div className="mv-container">
      <h1>GET TO KNOW US</h1>
      <div className="mission">
        <span className="mission-title" onClick={handleClick1}>
          Mission
        </span>
        <div>
          {show1 && (
            <div className="mission-desc">
              Our mission is to elevate the quality of life of the urban
              consumer by offering unparalleled convenience. Convenience is what
              makes us tick. It’s what makes us get out of bed and say, “Let’s
              do this.
            </div>
          )}
        </div>
      </div>
      <div className="mission">
        <span className="mission-title" onClick={handleClick2}>
          Values
        </span>
        <div>
          {show2 && (
            <div className="mission-desc">
              Our actions are strongly defined by the Aroma values. Through ups,
              downs, and everything in between; Our people put these values into
              practice in their everyday ways of working. Read on to get a taste
              of how we live and breathe these values and how it forms the
              backbone of our culture.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mission;
