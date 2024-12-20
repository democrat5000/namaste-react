// Application ID:  654561
// Access Key: PKiNF0SBYGhngJqqwqOAg3A28xyJlVGeCVNDRLo4Bg4
// Secret Key: AS-2UkkhRft0qmep7jAkWRVTHoI_SGH-WwDP6v1MCmk

import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(()=> import("./components/Grocery"));

const e = React.createElement;
const r = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
	return (
		<div className='appLayout'>
			<Header />
			<Banner />
			<Outlet />
			<Footer />
		</div>
	);
};

// 1st we create routing configuration. 2nd we pass it root.Render()
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
				errorElement: <Error />,
			},
			{
				path: "/about",
				element: <About />,
				errorElement: <Error />,
			},
			{
				path: "/contact",
				element: <Contact />,
				errorElement: <Error />,
			},
			{
				path: "/grocery",
				element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>,
				errorElement: <Error />,
			},
			{
				path: "/restaurants/:resId",
				element: <RestaurantMenu />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = r;
// direct approach
// root.render(<AppLayout/>);

// using RouterProvider approach. written by ReactRouter company. they also created the component <RouterProvider/>
root.render(<RouterProvider router={appRouter} />);
