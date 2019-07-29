import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { CartItem } from "../component/cartItem.js";
import "../../styles/cart.css";
import { withRouter } from "react-router-dom";

import { price } from "../component/functional/price.js";

export class Cart extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card shopping-cart">
					<div className="card-header bg-dark text-light">
						<i className="fa fa-shopping-cart" aria-hidden="true" />
						&nbsp;Shopping cart
						<div className="pull-right">Electro Med Plow</div>
						{/*<Link
							to="./products"
							className="btn btn-outline-info btn-sm pull-right">
							Continue Shopping
						</Link>*/}
						<div className="clearfix" />
					</div>
					<div className="card-body">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.cart.map((item, index) => {
									return (
										<CartItem
											index={index}
											sku={item.sku}
											key={index}
											quantity={item.quantity}
											history={this.props.history}
										/>
									);
								});
							}}
						</Context.Consumer>

						{/*<hr>*/}

						<div className="pull-right">
							<Link to="./products" className="btn btn-outline-info pull-right">
								Continue Shopping
							</Link>
						</div>
					</div>
					<div className="card-footer">
						<div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
							<div className="row">
								<div className="col-6">
									<input type="text" className="form-control" placeholder="coupon code" />
								</div>
								<div className="col-6">
									<input type="submit" className="btn btn-default" value="Use coupon" />
								</div>
							</div>
						</div>
						<div className="pull-right margin-10">
							<Link to="./checkout" className="btn btn-success pull-right">
								Checkout
							</Link>

							<Context.Consumer>
								{({ store, actions }) => {
									let cartTotal = 0;
									store.cart.forEach((item, index, history) => {
										let product = store.products.find(products => {
											return products.sku === item.sku;
										});
										cartTotal += product.price * item.quantity;
									});
									return (
										<div className="pull-right margin-5">
											Total price: <b>{price(cartTotal)}</b>
										</div>
									);
								}}
							</Context.Consumer>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Cart.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};
