import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.js";

import { Home } from "./views/home.js";
import { Blog } from "./views/blog.js";
import { BlogPost } from "./views/blogposts.js";
import { Demo } from "./views/demo.js";
import { Checkout } from "./views/checkout.js";
import { Product } from "./views/product.js";
import { LogIn } from "./views/login.js";
import { LogOut } from "./views/logOut.js";
import { Products } from "./views/products.js";
import { Cart } from "./views/cart.js";

import Store from "./store/appContext.js";

import { Navbar } from "./component/navbar.js";
import { NavbarTwo } from "./component/navbarTwo.js";
import { Footer } from "./component/footer.js";
import { Carousel } from "./component/carousel.js";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />

					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route path="/blog" component={Blog} />
						<Route path="/blogpost" component={BlogPost} />
						<Route path="/login" component={LogIn} />
						<Route path="/logout" component={LogOut} />
						<Route path="/checkout" component={Checkout} />
						<Route path="/products" component={Products} />
						<Route path="/product/:theid" component={Product} />
						<Route path="/cart" component={Cart} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
