import React from "react";
import { LOGO_SRC_URL } from "../../src/utils/constants";
import { CART_SRC_URL } from "../../src/utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [btnNameReact, setBtnNameReact] = useState("Login");

	// console.log("Header rendered");
	useEffect(() => {
		// console.log("useEffect called");
	}, [btnNameReact]);
	// dependency array [] is optional. default behavior => useEffect called after EVERY render. Empty dependency array [] changes default behavior => useEffect called on initial render once only. If dependency array contains something, e.g.[btnNameReact], then useEffect will be called only when that dependency changes/updates.
	return (
		<div className='header flex bg-indigo-500'>
			<div className='logoContainer'>
				<img className='logo w-8' src={LOGO_SRC_URL}></img>
			</div>

			<div className='navItems'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About Us</Link>
					</li>
					<li>
						<Link to='/contact'>Contact Us</Link>
					</li>
					<li>
						<img src={CART_SRC_URL} className='cart'></img>
					</li>

					<button
						className='login'
						onClick={() => {
							btnNameReact === "Login"
								? setBtnNameReact("Logout")
								: setBtnNameReact("Login");
						}}
					>
						{btnNameReact}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
