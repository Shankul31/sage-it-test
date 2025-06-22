import BrandsList from "../BrandsList/brandsList";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import "./styles.css";

const Section2 = () => {
  const images = [image2, image3, image4, image5];

  return (
    <>
      <BrandsList />
      <div className="section2-wrapper">
        <div>
          <img src={image1} alt={`large-image`} style={{ height: "440px" }} />
        </div>
        <div className="image-container">
          {images?.map((item, index) => {
            return (
              <div style={{ flex: "1 1 50%" }}>
                <img
                  className="product-image"
                  src={item}
                  alt={`product-image-${index}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section2;
