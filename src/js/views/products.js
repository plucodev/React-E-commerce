import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { ProductCard } from "../component/productCard.js";

export class Products extends React.Component {
	render() {
		return (
			<div>
				<div className="h1 text-center mb-4">Products</div>
				<Context.Consumer className="card-deck">
					{({ store }) => {
						return store.products.map((item, index) => {
							return <ProductCard sku={item.sku} key={index} />;
						});
					}}
				</Context.Consumer>
			</div>
		);
	}
}
