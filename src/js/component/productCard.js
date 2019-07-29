import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { Rating } from "../component/rating.js";

import { price } from "../component/functional/price.js";

export class ProductCard extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					var product = store.products.find(item => {
						return item.sku == this.props.sku;
					});
					return (
						<div className="col-4 mb-3">
							<div className="card text-center px-2">
								<div className="card-header bg-transparent pb-2 mb-2 text-capitalize">
									Category: <h6>{product.category}</h6>
								</div>
								<img
									className="card-img-top"
									src={product.image}
									alt="Generic placeholder image"
									width="140"
									height="140"
								/>
								<h5 className="card-title mt-3 text-truncate">{product.name}</h5>
								<p className="text-truncate font-weight-light">{product.description}</p>
								<p className="font-weight-bold">{price(product.price)}</p>
								<Rating stars={product.rating} />

								<div className="card-footer bg-transparent ">
									<p className="mb-0">
										<Link className="btn btn-success" to={"/product/" + product.sku} role="button">
											View details &raquo;
										</Link>
									</p>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

export default withRouter(ProductCard);

ProductCard.propTypes = {
	sku: PropTypes.string
};
