import ShoppingBag from "@mui/icons-material/ShoppingBag";

import mainImage from "../../assets/mainImage.jpg";
import "./styles.css";

const Section1 = () => {
  return (
    <div className="wrapper-section1">
      <div className="left-container">
        <span style={{ fontSize: "38px", fontWeight: 300, textAlign: "left" }}>
          Collections
        </span>
        <span
          style={{
            maxWidth: "70%",
            textAlign: "left",
            fontSize: "26px",
            marginTop: "10px",
            fontWeight: 300,
          }}
        >
          You can explore and shop many differnt collection from various barands
          here.
        </span>
        <button style={{ marginTop: 30 }}>
          <ShoppingBag style={{ fontSize: "16px", marginRight: 10 }} />
          Shop Now
        </button>
      </div>
      <div className="right-container-main-image">
        <img src={mainImage} alt="" />
      </div>
    </div>
  );
};

export default Section1;
