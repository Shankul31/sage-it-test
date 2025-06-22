import { useSelector } from "react-redux";

const Navigation = () => {
  const { navigationItems } = useSelector((state) => state.products);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "35px",
        marginBottom: "12px",
      }}
    >
      {navigationItems?.map((item, index) => {
        return (
          <div index={item.title}>
            <span style={{ fontFamily: "Open Sans", fontSize: "16px" }}>
              {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
