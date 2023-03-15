import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import CardProduct from "../../../components/cardProduct/CardProduct";
import Category from "../../../components/category/Category";
import "./products.scss";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [limitProducts, setLimitProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [data, setData] = useState([]);
  const [findMoreProducts, setFindMoreProducts] = useState(6);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState({ from: 0, to: 0 });

  // get all categories and products
  useEffect(() => {
    const getCategories = () => {
      axios
        .get("products/categories")
        .then((res) => setCategories(res.data))
        .catch((err) => console.log(err));
    };
    const getAllProducts = () => {
      axios
        .get("products")
        .then((res) => setAllProducts(res.data))
        .catch((err) => console.log(err));
    };
    getAllProducts();
    getCategories();
  }, []);

  /**
   * will run when the user click on find out more button
   * with limit increases 6 items
   */

  useEffect(() => {
    const getProducts = () => {
      axios(`products?limit=${findMoreProducts}`)
        .then((res) => {
          setLimitProducts(res.data);
          setData(res.data);
          showAllProducts();
        })
        .catch((err) => console.log(err));
    };

    getProducts();
  }, [findMoreProducts]);

  /**
   * render new product when data changed
   * it change in FILTERING
   */

  useEffect(() => {
    showAllProducts(data);
  }, [data]);

  /**
   * filtering by title of the product
   * with applying the functionality
   */
  useEffect(() => {
    if (search || category || price.from > 0 || price.to > 0) {
      setData(
        allProducts.filter((product) => {
          let verdict = true;
          if (search) {
            verdict =
              verdict &&
              product?.title.toLowerCase().includes(search.toLowerCase());
          }
          if (price.from > 0 && price.to > 0) {
            verdict =
              verdict &&
              product?.price >= price.from &&
              product?.price <= price.to;
          }
          if (category) {
            if (category == "All Products") {
              return verdict
            } else {
              verdict = verdict && product?.category == category;
            }
          }
          return verdict;
        })
      );
    } else {
      setData(limitProducts);
    }
  }, [search, category, price.from, price.to]);

  // render all categories
  const showAllCategories = () => {
    const returnCategories = categories?.map((cat, index) => {
      return <Category key={index} category={cat} setCategory={setCategory} />;
    });
    return returnCategories;
  };

  // render all Products
  const showAllProducts = () => {
    const returnProducts = data?.map((product) => {
      return (
        <CardProduct
          key={product.id}
          id={product.id}
          title={product.title}
          category={product.category}
          image={product.image}
        />
      );
    });
    return returnProducts;
  };

  // set state findMoreProducts and increase it 6 number (items)
  const findMoreProductsFun = () => {
    setFindMoreProducts((prev) => prev + 6);
  };

  return (
    <div className="products">
      <div className="wrapperProducts">
        <div className="header">
          <p>Our Premium Collection</p>
        </div>
        <div className="wrapperCategoryFilter">
          <div className="categories">
            <ul className="cat-list">
              <Category category={"All Products"} setCategory={setCategory} />
              {showAllCategories()}
            </ul>
          </div>
          <div className="filter">
            <div className="headFilter">
              <p>FILTER</p>
            </div>
            <div className="inputSearch">
              <input
                type="text"
                placeholder="Search Products"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="inputRangePrice">
              <label htmlFor="fromPrice">Price Range</label>
              <input
                type="number"
                placeholder="Enter the low price"
                className="inputPrice"
                id="fromPrice"
                min="1"
                onChange={(e) => setPrice({ ...price, from: e.target.value })}
              />
              <label htmlFor="toPrice">To</label>
              <input
                type="number"
                placeholder="Enter the high price"
                className="inputPrice"
                id="toPrice"
                min="1"
                onChange={(e) => setPrice({ ...price, to: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="wrapperProductsCard">{showAllProducts()}</div>
      </div>
      <div className="btn">
        <Button findMore={findMoreProductsFun} />
      </div>
    </div>
  );
};

export default Products;
