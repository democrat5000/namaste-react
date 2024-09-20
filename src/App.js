// Application ID:  654561
// Access Key: PKiNF0SBYGhngJqqwqOAg3A28xyJlVGeCVNDRLo4Bg4
// Secret Key: AS-2UkkhRft0qmep7jAkWRVTHoI_SGH-WwDP6v1MCmk

import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "/src/components/Footer";
import Body from "/src/components/Body";
import Search from "./components/Search";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Image from "./components/Image";



const e = React.createElement;
const r = ReactDOM.createRoot(document.getElementById("root"));



const AppLayout = ()=> {  
  return (
    <div className="appLayout">
      <Header/>
      <Banner/>
      <Body/>
      <Footer/>
    </div>
  );
}


const root = r;
root.render(<AppLayout/>);


