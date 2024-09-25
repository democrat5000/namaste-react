
import {LOGO_SRC_URL} from "../../src/utils/constants";
import {HOME_URL} from "../../src/utils/constants";
import {CONTACT_URL} from "../../src/utils/constants";
import {CART_SRC_URL} from "../../src/utils/constants";

const Header = ()=> {
  return (
    <div className="header">
      
      <div className="logoContainer">
        <img className="logo" src={LOGO_SRC_URL}></img>
      </div>

      <div className="navItems">
        <ul>
          <li><a target="_blank" href={HOME_URL}>Home</a></li>
          <li><a target="_blank" href={CONTACT_URL}>Contact Us</a></li>
          <li><img src={CART_SRC_URL}className="cart"></img></li>
        </ul>
      </div>
    </div>
    );
}


export default Header;