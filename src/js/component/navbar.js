import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import { Cart } from "../component/cartItem.jsx";
import { CheckoutCart } from "../component/checkoutCart.jsx";

import { price } from "../component/functional/price.jsx";

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="navbar-brand">Navbar</div>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>

					<div
						className="collapse navbar-collapse "
						id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<Link to="/" className="nav-link">
									Home
								</Link>
								<span className="sr-only">(current)</span>
							</li>
							<li className="nav-item">
								<Link to="/products" className="nav-link">
									Products
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/blog" className="nav-link">
									Blog
								</Link>
							</li>
						</ul>

						<form className="form-inline my-2 my-lg-0">
							<ul className="navbar-nav mr-auto">
								<Context.Consumer>
									{({ store, actions }) => {
										let message = "";
										let path = "/login";
										const userStatus = store.users.find(
											user => {
												return user.logStatus === true;
											}
										);
										if (userStatus) {
											message =
												"Welcome " + userStatus.email;
											path = "/logout";
										} else {
											message = "Login";
										}

										return (
											<li className="nav-item active">
												<Link
													to={path}
													className="nav-link">
													{message}
												</Link>
												<span className="sr-only" />
											</li>
										);
									}}
								</Context.Consumer>

								<li className="nav-item active">
									<Link to="/cart" className="nav-link">
										<i className="fas fa-shopping-cart" />
									</Link>
									<span className="sr-only" />
								</li>
							</ul>

							<Context.Consumer>
								{({ store, actions }) => {
									let cartTotal = 0;
									store.cart.forEach(
										(item, index, history) => {
											let product = store.products.find(
												products => {
													return (
														products.sku ===
														item.sku
													);
												}
											);
											cartTotal +=
												product.price * item.quantity;
										}
									);
									return (
										<div className="text-wrap">
											<span className="small badge badge-danger">
												{price(cartTotal)}
											</span>
										</div>
									);
								}}
							</Context.Consumer>
						</form>
					</div>
				</nav>
			</div>
		);
	}
}
