import "./header.scss";
import callIcon from "./../../images/icon/callIcon.svg";
import carIcon from "./../../images/icon/carIcon.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapperHeader">
        <div className="leftSide">
          <p>Dealerz.</p>
        </div>
        <div className="rightSide">
          <div className="wrapperContent">
            <div className="content">
              <img src={callIcon} alt="Call Icon" className="icon" />
              <p className="text">Call Center</p>
            </div>
          </div>
          <div className="wrapperContent">
            <div className="content">
              <img src={carIcon} alt="Car Icon" className="icon" />
              <p className="text">Shipping & Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
