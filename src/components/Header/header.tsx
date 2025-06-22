import "./styles.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="left-container">
          <input type="text" placeholder="search..." />
        </div>
        <div className="mid-container">
          <span style={{ fontFamily: "AmstelvarAlpha", fontSize: "28px" }}>
            CORAL
          </span>
        </div>
        <div className="right-container">
          <span style={{ fontSize: "18px" }}>Account</span>
          <span style={{ fontSize: "18px" }}>Shopping</span>
        </div>
      </div>
      <hr style={{ width: "75%", backgroundColor: "#E3E3E3" }} />
    </>
  );
};

export default Header;
