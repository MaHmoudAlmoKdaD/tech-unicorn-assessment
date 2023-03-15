import "./category.scss";
import { NavLink } from "react-router-dom";
const Category = ({ category, setCategory }) => {
  return (
    <li className="cat-item" onClick={() => setCategory(category)}>
      <NavLink to={"#"}>{category}</NavLink>
    </li>
  );
};

export default Category;
