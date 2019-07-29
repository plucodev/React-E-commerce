import React from "react";
import { Link } from "react-router-dom";
import Featured from "../component/featured.js";
import CarouselHome from "../component/carousel.js";
import rigoImage from "../../img/ecommerce.jpg";
import "../../styles/home.css";

import "../../styles/home.css";
import "../../styles/carousel.css";
import "../../styles/featured.css";

export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="d-none d-lg-block">
					<CarouselHome />
				</div>
				<Featured />

				<hr className="featurette-divider" />
				<div className="container">
					<div className="row featurette">
						<div className="col-md-7">
							<h2 className="featurette-heading">
								Electro Med Plow{" "}
								<span className="text-muted h3 font-weight-light">The best shop ever.</span>
							</h2>
							<p className="lead">
								In our E-Commerce you can find all you need to recreation, hobbies, clothing and snow
								issues. Check our blog to be updated on new stuff here in Electro Med Plow.
							</p>
							<p className="mb-0">
								<Link className="btn btn-secondary" to="/blog" role="button">
									View Our Blog &raquo;
								</Link>
							</p>
						</div>
						<div className="col-md-5">
							<img
								className="featurette-image img-fluid mx-auto"
								src={rigoImage}
								alt="Generic placeholder image"
							/>
						</div>
					</div>
				</div>
				<hr className="featurette-divider" />
			</React.Fragment>
		);
	}
}
