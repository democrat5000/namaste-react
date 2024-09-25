import {LINKEDIN_URL} from "../../src/utils/constants";
import {LINKEDIN_SRC_URL} from "../../src/utils/constants";
import {FACEBOOK_URL} from "../../src/utils/constants";
import {FACEBOOK_SRC_URL} from "../../src/utils/constants";
import {TWITTER_URL} from "../../src/utils/constants";
import {TWITTER_SRC_URL} from "../../src/utils/constants";

const SocialLinks = ()=> {
  return(
    <div className="socialLinks"
          style={{
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          marginRight: "2rem"}}>
      <h6>Social Links</h6>
      <div className="links"
            style={{
            display: "flex",
            justifyContent: "space-around"}}>
        <a href={LINKEDIN_URL} target="_blank"><img src={LINKEDIN_SRC_URL}
        className="linkedin"
        style={{
        width: "1rem",
        height: "1rem"}}
        ></img></a>
        <a href={FACEBOOK_URL}><img src={FACEBOOK_SRC_URL} 
        className="facebook"
        style={{
        width: "1rem",
        height: "1rem"}}></img></a>
        <a href={TWITTER_URL} target="_blank"><img src={TWITTER_SRC_URL} 
        className="twitter"
        style={{
        width: "1rem",
        height: "1rem"}}></img></a>
      </div>
    </div>
  );
}

export default SocialLinks;