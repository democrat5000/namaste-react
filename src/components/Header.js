import Search from "./Search";
import SearchButton from "./SearchButton";


const Header = ()=> {
  return (
    <div className="header">
      
      <div className="logoContainer">
        <img className="logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png"></img>
      </div>

      <div className="searchContainer">
      <Search/>
      </div>
      
      <div className="navItems">
        <ul>
          <li><a target="_blank" href="https://careers.swiggy.com/#/about">Home</a></li>
          <li><a target="_blank" href="https://www.swiggy.com/corporate/contact-us/">Contact Us</a></li>
          <li><img src="https://cdn-icons-png.freepik.com/256/5733/5733218.png?ga=GA1.1.129955454.1725203153&semt=ais_hybrid" className="cart"></img></li>
        </ul>
      </div>
    </div>
    );
}


export default Header;