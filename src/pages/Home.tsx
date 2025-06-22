import Header from "../components/Header/Header";
import Section1 from "../components/Section1/section1";
import Section2 from "../components/Section2/section2";

import "./home.css";

const Home = () => {
  return (
    <>
      <div className="section1-container">
        <Header />
        <Section1 />
      </div>
      <div className="section2-container">
        <Section2 />
      </div>
    </>
  );
};

export default Home;
