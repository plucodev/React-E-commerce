import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
import "../../styles/blog.css";

export class BlogPost extends Component {
	render() {
		return (
			<div className="container mt-5">
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.blog.map((item, index) => {
								return (
									<React.Fragment key={index}>
										<div className="col-lg-12">
											<div className="post2 mb-2 ">
												<img src={item.image} className="blogImagePost2" />
											</div>
											<div className="m-t-2">
												<h4 className="post-title">{item.title}</h4>
												<h6 className="post-title ">{item.category}</h6>
											</div>

											<div className="text-left">{item.content}</div>
											<div>
												<hr className="featurette-divider" />
											</div>
										</div>
									</React.Fragment>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
BlogPost.propTypes = {
	id: PropTypes.number
};
