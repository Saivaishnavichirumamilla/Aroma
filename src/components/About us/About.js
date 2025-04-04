import Mission from "./Mission";
import Developer from "./Developer";

const About = () => {
  return (
    <div>
      <h3 className="aboutus-heading">ABOUT US</h3>
      <div className="aboutus-desc">
        Aroma is a new age consumer organization offering an easy-to-use
        convenience platform, accessible through a unified app.
      </div>
      <img
        className="aboutus-coverpic"
        src="https://b.zmtcdn.com/web/about/48fc8d7806d6a947fd041a8a1cf83bac1563875757.png"
      ></img>
      <div className="tint"></div>
      <div className="aboutus-quote">Better food for more people</div>
      <Mission />
      <Developer />
    </div>
  );
};

export default About;
