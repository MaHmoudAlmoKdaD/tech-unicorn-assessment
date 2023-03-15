import "./singleProduct.scss";
import Header from "./../../components/header/Header";
import Navbar from "./../../components/navbar/Navbar";
import starIcon from "./../../images/icon/starIcon.svg";
import heartBtnIcon from "./../../images/icon/heartBtnIcon.svg";
import shopBtnIcon from "./../../images/icon/shopBtnIcon.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="singleProduct">
      <Header />
      <Navbar />
      <div className="productDetails">
        <div className="pathOfProduct">
          <p>
            {product.category} <span>&gt;</span> {product.title}
            Oranges
          </p>
        </div>
        <div className="details">
          <div className="leftSide">
            <div className="image">
              <img src={product.image} alt="Image of Product" />
            </div>
            <div className="images">
              <img src={product.image} alt="Image of Product" />
              <img src={product.image} alt="Image of Product" />
              <img src={product.image} alt="Image of Product" />
            </div>
          </div>
          <div className="rightSide">
            <div className="title">
              <p>{product.title}</p>
            </div>
            <div className="rate">
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
            </div>
            <div className="price">
              <p>${product.price}</p>
            </div>
            <div className="detailsProduct">
              <p>Details Product</p>
            </div>
            <div className="description">
              <p className="first">{product.description}</p>
              <p className="last"> {product.description}</p>
            </div>
            <div className="quantityOfProduct">
              <p className="qty">Quantity</p>
              <input
                type="number"
                name="quantity"
                id="quantity"
                placeholder="2"
                min={1}
              />
              <p className="note">Add note</p>
            </div>
            <div className="total">
              <p>Sub Total</p>
              <p>$10</p>
            </div>
            <div className="buttonDetails">
              <button className="wishlist">
                Wishlist <img src={heartBtnIcon} alt="icon" />
              </button>
              <button className="addCard">
                Add To Cart <img src={shopBtnIcon} alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
