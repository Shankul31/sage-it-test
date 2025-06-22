const Navigation = () => {
  const navigationItems = [
    { title: "Jewelry & Accessories", value: "" },
    { title: "Clothing & Shoes", value: "" },
    { title: "Home & Living", value: "" },
    { title: "Wedding & Party", value: "" },
    { title: "Toys & Entertainment", value: "" },
    { title: "Art & Collectibles", value: "" },
    { title: "Craft Supplies & Tools", value: "" },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
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
