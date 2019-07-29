import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { Rating } from "./rating.jsx";

import { price } from "../component/functional/price.jsx";

class Featured extends React.Component {
	render() {
		return (
			<div className="container mt-5">
				<Context.Consumer>
					{({ store, actions }) => {
						let randDrone = Math.floor(Math.random() * 4);
						let randSnow = Math.floor(Math.random() * (8 - 5)) + 5;
						let randMale = Math.floor(Math.random() * (12 - 9)) + 9;
						let randMed =
							Math.floor(Math.random() * (16 - 13)) + 13;
						return (
							<React.Fragment>
								<div className="h1 text-center mb-4">
									Featured Products
								</div>
								<div className="card-deck">
									<div className="card text-center  px-2">
										<div className="card-header bg-transparent pb-2 mb-2 text-capitalize">
											Category:{" "}
											<h6>
												{
													store.products[randDrone]
														.category
												}
											</h6>
										</div>
										<img
											className="card-img-top"
											src={
												store.products[randDrone].image
											}
											alt="Generic placeholder image"
											width="140"
											height="140"
										/>
										<h5 className="card-title mt-3 text-truncate">
											{store.products[randDrone].name}
										</h5>
										<p className="text-truncate font-weight-light">
											{
												store.products[randDrone]
													.description
											}
										</p>
										<p className="font-weight-bold">
											{price(
												store.products[randDrone].price
											)}
										</p>
										<div className="font-weight-light">
											<Rating
												stars={
													store.products[randDrone]
														.rating
												}
											/>
										</div>

										<div className="card-footer bg-transparent ">
											<p className="mb-0">
												<Link
													className="btn btn-success"
													to={
														"/product/" +
														store.products[
															randDrone
														].sku
													}
													role="button">
													View details &raquo;
												</Link>
											</p>
										</div>
									</div>
									<div className="card text-center">
										<div className="card-header bg-transparent pb-2 mb-2 text-capitalize">
											Category:{" "}
											<h6>
												{
													store.products[randSnow]
														.category
												}
											</h6>
										</div>
										<img
											className="card-img-top"
											src={store.products[randSnow].image}
											alt="Generic placeholder image"
											width="140"
											height="140"
										/>
										<h5 className="card-title mt-3 text-truncate">
											{store.products[randSnow].name}
										</h5>
										<p className="text-truncate font-weight-light">
											{
												store.products[randSnow]
													.description
											}
										</p>
										<p className="font-weight-bold">
											{price(
												store.products[randSnow].price
											)}
										</p>
										<div className="font-weight-light">
											<Rating
												stars={
													store.products[randSnow]
														.rating
												}
											/>
										</div>
										<div className="card-footer bg-transparent ">
											<p className="mb-0">
												<Link
													className="btn btn-success"
													to={
														"/product/" +
														store.products[randSnow]
															.sku
													}
													role="button">
													View details &raquo;
												</Link>
											</p>
										</div>
									</div>
									<div className="card text-center">
										<div className="card-header bg-transparent pb-2 mb-2 text-capitalize">
											Category:{" "}
											<h6>
												{
													store.products[randMale]
														.category
												}
											</h6>
										</div>
										<img
											className="card-img-top"
											src={store.products[randMale].image}
											alt="Generic placeholder image"
											width="140"
											height="140"
										/>
										<h5 className="card-title mt-3 text-truncate">
											{store.products[randMale].name}
										</h5>
										<p className="text-truncate font-weight-light">
											{
												store.products[randMale]
													.description
											}
										</p>
										<p className="font-weight-bold">
											{price(
												store.products[randMale].price
											)}
										</p>
										<div className="font-weight-light">
											<Rating
												stars={
													store.products[randMale]
														.rating
												}
											/>
										</div>
										<div className="card-footer bg-transparent ">
											<p className="mb-0">
												<Link
													className="btn btn-success"
													to={
														"/product/" +
														store.products[randMale]
															.sku
													}
													role="button">
													View details &raquo;
												</Link>
											</p>
										</div>
									</div>
									<div className="card text-center">
										<div className="card-header bg-transparent pb-2 mb-2 text-capitalize">
											Category:{" "}
											<h6>
												{
													store.products[randMed]
														.category
												}
											</h6>
										</div>
										<img
											className="card-img-top"
											src={store.products[randMed].image}
											alt="Generic placeholder image"
											width="140"
											height="140"
										/>
										<h5 className="card-title mt-3 text-truncate">
											{store.products[randMed].name}
										</h5>
										<p className="text-truncate font-weight-light">
											{
												store.products[randMed]
													.description
											}
										</p>
										<p className="font-weight-bold">
											{price(
												store.products[randMed].price
											)}
										</p>
										<div className="font-weight-light">
											<Rating
												stars={
													store.products[randMed]
														.rating
												}
											/>
										</div>
										<div className="card-footer bg-transparent ">
											<p className="mb-0">
												<Link
													className="btn btn-success"
													to={
														"/product/" +
														store.products[randMed]
															.sku
													}
													role="button">
													View details &raquo;
												</Link>
											</p>
										</div>
									</div>
								</div>
							</React.Fragment>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
export default withRouter(Featured);
