import "./Home.scss";

import { Link } from "react-router-dom";

import captainAmerica from "../../img/captainAmerica.png";
import spiderMan from "../../img/spiderMan.png";
import comics from "../../img/comics.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="Home__title">
          <h1>
            CHOOSE <br /> YOUR WAY
          </h1>
        </div>

        <img src={spiderMan} alt="SpiderMan" />

        <div className="Home__choose container">
          <Link to={"/characters"}>
            <div className="Home__choose__character">
              <div>
                <img src={captainAmerica} alt="Captain america" />
              </div>
              <h2>Characters</h2>
            </div>
          </Link>

          <Link to="/comics">
            <div className="Home__choose__character">
              <div>
                <img src={comics} alt="Comics" />
              </div>
              <h2>Comics</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
