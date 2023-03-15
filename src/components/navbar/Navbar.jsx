import searchIcon from "./../../images/icon/searchIcon.svg";
import notificationIcon from "./../../images/icon/notificationIcon.svg";
import shopIcon from "./../../images/icon/shopIcon.svg";
import heartIcon from "./../../images/icon/heartIcon.svg";
import numberOfShopNotification from "./../../images/icon/numberOfShopNotification.svg";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapperNavbar">
        <div className="nav-pages">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">Shop</a>
            </li>
            <li className="nav-item">
              <a href="#">Promo</a>
            </li>
            <li className="nav-item">
              <a href="#">About</a>
            </li>
            <li className="nav-item">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search what you need"
            className="searchInput"
          />
        </div>
        <div className="nav-profile">
          <ul className="profile-list">
            <li className="profile-item">
              <a href="#">
                <img src={heartIcon} alt="heart Icon" />
              </a>
            </li>
            <li className="profile-item">
              <a href="#">
                <img src={shopIcon} alt="heart Icon" />
                <img
                  src={numberOfShopNotification}
                  alt="heart Icon"
                  className="numberOfShopNotification"
                />
              </a>
            </li>
            <li className="profile-item">
              <a href="#">
                <i className="fa fa-user-o" aria-hidden="true"></i>
              </a>
            </li>
            <li className="profile-item">
              <a href="#">
                <img src={notificationIcon} alt="heart Icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
