import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./pages/home/Home";
import SingleProduct from './pages/singleProduct/SingleProduct';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
