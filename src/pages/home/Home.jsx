import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Welcome from "./welcome/Welcome";
import Products from "./products/Products";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <Welcome />
      <Products />
    </div>
  );
};

export default Home;
