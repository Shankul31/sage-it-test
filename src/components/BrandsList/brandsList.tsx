import brand1 from "../../assets/brnad-images/brand1.png";
import brand2 from "../../assets/brnad-images/brand2.png";
import brand3 from "../../assets/brnad-images/brand3.png";
import brand4 from "../../assets/brnad-images/brand4.png";
import brand5 from "../../assets/brnad-images/brand5.png";
import brand6 from "../../assets/brnad-images/brand6.png";

const BrandsList = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      {brands?.map((item) => {
        return (
          <div>
            <img
              className="brand-image"
              src={item}
              alt={`brand-image${item}`}
              style={{ height: "50px" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BrandsList;
