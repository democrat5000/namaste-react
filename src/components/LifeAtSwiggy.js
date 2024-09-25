import {EXPLORE_URL} from "../../src/utils/constants";
import {SUPPORT_URL} from "../../src/utils/constants";
import {PARTNER_URL} from "../../src/utils/constants";
import {RIDE_WITH_US_URL} from "../../src/utils/constants";

const LifeAtSwiggy = ()=> {
  return (
    <div  className="lifeAtSwiggy container"
          style={{
          display: "flex",
          flexDirection: "column",
          cursor: "pointer"}}>
      <h6>Life at Swiggy</h6>
      <a target="_blank" href={EXPLORE_URL}>Explore With Swiggy</a>
      <a target="_blank" href={SUPPORT_URL}>Help and Support</a>
      <a target="_blank" href={PARTNER_URL}>Partner With Us</a>
      <a target="_blank" href={RIDE_WITH_US_URL}>Ride With Us</a>
    </div>
  );
}

export default LifeAtSwiggy;