import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { CheckoutCart } from "../component/checkoutCart.js";
import Modal from "../component/modal.js";

export class Checkout extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};
	}
	render() {
		return (
			<div className="container mt-2">
				<div className="row">
					<div className="col-md-4 order-md-2 mb-4">
						<h4 className="d-flex justify-content-between align-items-center mb-3">
							<span className="text-muted">Your cart</span>
							<Context.Consumer>
								{({ store, actions }) => {
									let cartLength = store.cart.length;
									return <span className="badge badge-secondary badge-pill">{cartLength}</span>;
								}}
							</Context.Consumer>
						</h4>
						<ul className="list-group mb-3">
							<Context.Consumer>
								{({ store, actions }) => {
									return store.cart.map((item, index) => {
										return (
											<CheckoutCart
												sku={item.sku}
												key={index}
												quantity={item.quantity}
												history={this.props.history}
											/>
										);
									});
								}}
							</Context.Consumer>

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
										<li className="list-group-item d-flex justify-content-between">
											<span>Total (USD)</span>
											<strong>${cartTotal}</strong>
										</li>
									);
								}}
							</Context.Consumer>
						</ul>
					</div>

					<div className="col-md-8 order-md-1">
						<h4 className="mb-3">Billing Address</h4>
						<form className="needs-validation">
							<div className="form-group">
								<label>Full Name</label>
								<input id="name" type="name" className="form-control" placeholder="Enter full name" />
							</div>
							<div className="form-group">
								<label>Email</label>
								<input id="email" type="email" className="form-control" placeholder="Enter email" />
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input id="phone" type="phone" className="form-control" placeholder="Enter phone" />
							</div>
							<div className="form-group">
								<label>Address</label>
								<input id="address" type="text" className="form-control" placeholder="Enter address" />
							</div>

							<h4 className="mb-3">Payment</h4>
							<div className="form-group">
								<div className="row">
									<div className="col-md-6">
										<label>First Name</label>
										<input
											id="first-name"
											type="text"
											className="form-control"
											placeholder="First Name"
										/>
									</div>
									<div className="col-md-6">
										<label>Last Name</label>
										<input
											id="last-name"
											type="text"
											className="form-control"
											placeholder="Last Name"
										/>
									</div>
								</div>
							</div>
							<div className=" col-md-6 form-group">
								<label>Credit card number</label>
								<input
									id="cc-number"
									type="text"
									className="form-control"
									placeholder="Enter Credit Card Number"
								/>
							</div>
							<div className="form-group">
								<label className="col-sm-3 control-label" htmlFor="expiry-month">
									Expiration Date
								</label>
								<div className="col-sm-9">
									<div className="row">
										<div className="col-xs-3">
											<select className="form-control" name="expiry-month" id="expiry-month">
												<option>Month</option>
												<option value="01">Jan (01)</option>
												<option value="02">Feb (02)</option>
												<option value="03">Mar (03)</option>
												<option value="04">Apr (04)</option>
												<option value="05">May (05)</option>
												<option value="06">June (06)</option>
												<option value="07">July (07)</option>
												<option value="08">Aug (08)</option>
												<option value="09">Sep (09)</option>
												<option value="10">Oct (10)</option>
												<option value="11">Nov (11)</option>
												<option value="12">Dec (12)</option>
											</select>
										</div>
										<div className="col-xs-3">
											<select className="form-control" name="expiry-year">
												<option value="13">2013</option>
												<option value="14">2014</option>
												<option value="15">2015</option>
												<option value="16">2016</option>
												<option value="17">2017</option>
												<option value="18">2018</option>
												<option value="19">2019</option>
												<option value="20">2020</option>
												<option value="21">2021</option>
												<option value="22">2022</option>
												<option value="23">2023</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div>
								<button
									type="button"
									onClick={() => this.setState({ showModal: true })}
									className="btn btn-success">
									Submit payment
								</button>
							</div>
						</form>
					</div>
				</div>
				<Modal show={this.state.showModal} onClose={() => this.setState({ showModal: false })} />
			</div>
		);
	}
}

Checkout.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};
