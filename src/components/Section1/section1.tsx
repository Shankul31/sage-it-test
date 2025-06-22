import { useSelector } from "react-redux";

import mainImage from "../../assets/mainImage.jpg";
import Navigation from "../Navigation/navigation";
import "./styles.css";

const Section1 = () => {
  // const state = useSelector((state) => state);
  return (
    <div className="container">
      <Navigation />
      <div className="wrapper-section1">
        <div className="left-container">
          <span style={{ fontSize: "74px", textAlign: "left" }}>
            Collections
          </span>
          <span
            style={{ maxWidth: "70%", textAlign: "left", fontSize: "30px" }}
          >
            you can explore and shop many differnt collection from various
            barands here.
          </span>
          <button>Shop Now</button>
        </div>
        <div className="right-container-main-image">
          <img src={mainImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
