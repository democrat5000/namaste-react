import {LOGO_SRC_URL} from "../../src/utils/constants";

const Copyright = ()=>{
  return(
    <div className="copyright">
      <img className="logo" src={LOGO_SRC_URL}
      style={{width: "6rem", 
      marginTop: "1rem",
      marginLeft: "2rem",
      height: "3rem", cursor:"default"}}></img>
      <p style={{cursor: "default", marginLeft: "1rem"}}> &nbsp;  &nbsp;  &#169; 2024 Bundl Technologies Pvt. Ltd</p>
    </div>
  );
}

export default Copyright;