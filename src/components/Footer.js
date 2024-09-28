import React from 'react';
import Company from "./Company";
import Copyright from "./Copyright";
import Legal from "./Legal";
import LifeAtSwiggy from "./LifeAtSwiggy";
import SocialLinks from "./SocialLinks";

const Footer = ()=> {
  return(
        <div className="footerContainer" 
          style={{display: "flex", 
          justifyContent: "space-between", 
          width:"100%", 
          background: "#EEEEEE",
          padding: ".5rem"
          }}>
          <Copyright/>
          <Company/>
          <Legal/>
          <LifeAtSwiggy/>
          <SocialLinks/> 
        </div>
      );
}

export default Footer;