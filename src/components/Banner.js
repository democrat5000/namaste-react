import {BANNER_URL} from "../../src/utils/constants";

const Banner = ()=> {
  return(
    <div className="bannerContainer">

      <div className="bannerText">
        <h4>Order Food Online in Bangalore</h4>
      </div>
      
      <div>
        <img className="bannerImage" src={BANNER_URL} ></img>
      </div>
    </div>
  );
}

export default Banner;