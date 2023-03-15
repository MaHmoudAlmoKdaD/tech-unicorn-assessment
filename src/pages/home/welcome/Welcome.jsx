import Button from "../../../components/button/Button";
import shape1 from "./../../../images/shapes/shape1.svg";
import shape2 from "./../../../images/shapes/shape2.svg";
import shape3 from "./../../../images/shapes/shape3.svg";
import shape4 from "./../../../images/shapes/shape4.svg";
import shape5 from "./../../../images/shapes/shape5.svg";
import shape6 from "./../../../images/shapes/shape6.svg";
import "./welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="wrapperWelcome">
        <div className="leftSide">
          <div className="shape1">
            <img src={shape1} alt="shape" />
          </div>
          <div className="shape2">
            <img src={shape2} alt="shape" />
          </div>
          <div className="shape3">
            <img src={shape3} alt="shape" />
          </div>
          <div className="shape4">
            <img src={shape4} alt="shape" />
          </div>
          <div className="shape5">
            <img src={shape5} alt="shape" />
          </div>
          <div className="shape6">
            <img src={shape6} alt="shape" />
          </div>
          <div className="shape7">
            <img src={shape4} alt="shape" />
          </div>
        </div>
        <div className="rightSide">
          <div className="header">
            {" "}
            <p>Your Premium Sound, Unplugged!</p>
          </div>
          <div className="paragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="btn">
            <Button/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
