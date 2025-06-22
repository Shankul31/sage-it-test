import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBag from "@mui/icons-material/ShoppingBag";

import "./styles.css";
import Navigation from "../Navigation/navigation";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="header-container">
        <div className="left-container">
          <SearchIcon />
        </div>
        <div className="mid-container">
          <span
            style={{
              fontFamily: "AmstelvarAlpha",
              fontSize: "28px",
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            CORAL
          </span>
        </div>
        <div className="right-container">
          <div style={{ display: "flex", gap: "8px" }}>
            <PersonIcon />
            <span style={{ fontSize: "18px" }}>Account</span>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <ShoppingBag />
            <span style={{ fontSize: "18px" }}>Shopping</span>
          </div>
        </div>
      </div>
      <div>
        <hr style={{ backgroundColor: "#E3E3E3" }} />
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
