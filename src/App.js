// Application ID:  654561
// Access Key: PKiNF0SBYGhngJqqwqOAg3A28xyJlVGeCVNDRLo4Bg4
// Secret Key: AS-2UkkhRft0qmep7jAkWRVTHoI_SGH-WwDP6v1MCmk

import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "/src/components/Footer";
import Body from "/src/components/Body";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const e = React.createElement;
const r = ReactDOM.createRoot(document.getElementById("root"));



const AppLayout = ()=> {  
  return (
    <div className="appLayout">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

// 1st we create routing configuration. 2nd we pass it root.Render()
const appRouter = createBrowserRouter([
  {path: "/",
    element: <AppLayout/>,
    children: [
      {path: "/",
        element: <Body/>,
        errorElement: <Error/>
      },
      {path: "/about",
        element: <About/>,
        errorElement: <Error/>
      },
      {path: "/contact",
        element: <Contact/>,
        errorElement: <Error/>
      }
    ],
    errorElement: <Error/>
  }
]);

const root = r;
// direct approach
// root.render(<AppLayout/>); 

// using RouterProvider approach. written by ReactRouter company. they also created the component <RouterProvider/>
root.render(<RouterProvider router={appRouter}/>);


