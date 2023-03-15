import { Link } from "react-router-dom";
import arrowRight from "./../../images/icon/arrowRight.svg";
import "./cardProduct.scss";

const CardProduct = ({ id, title, image, category }) => {
  return (
    <div className="cardProduct">
      <div className="image">
        <img src={image} alt="Product image" />
      </div>
      <div className="details">
        <div className="categoryName">
          <p>{category}</p>
        </div>
        <div className="productName">
          <p>{title}</p>
        </div>
        <div className="arrowRight">
          <div className="icon">
            <Link to={`product/${id}`}>
              <img src={arrowRight} alt="Icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
