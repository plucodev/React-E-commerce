import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/blog.css";

export class Blog extends Component {
	render() {
		return (
			<div className="container mt-5">
				<Context.Consumer>
					{({ store, actions }) => {
						let randFeatured = Math.floor(Math.random() * store.blog.length - 1);
						return (
							<div id="hot-post" className="row hot-post">
								<div className="col-md-8 hot-post-left">
									<div className="post post-thumb">
										<Link to="./blogpost" className="post-img">
											<img className="blogImagePost" src={store.blog[randFeatured].image} />
										</Link>

										<div className="post-body">
											<div className="post-category">
												<Link to=".">{store.blog[randFeatured].category}</Link>
											</div>
											<h3 className="post-title title-lg">
												<Link to="./blogpost">{store.blog[randFeatured].title}</Link>
											</h3>
											<ul className="post-meta">
												<li />
											</ul>
										</div>
									</div>
								</div>
								<div className="col-md-4 hot-post-right">
									<div className="post post-thumb">
										<Link className="post-img" to="./blogpost">
											<img className="blogImagePost" src={store.blog[1].image} alt="" />
										</Link>
										<div className="post-body">
											<div className="post-category">
												<Link to="./blogpost">{store.blog[1].category}</Link>
											</div>
											<h3 className="post-title">
												<Link to="./blogpost">{store.blog[1].title}</Link>
											</h3>
											<ul className="post-meta">
												<li />
											</ul>
										</div>

										<div className="post post-thumb mt-2">
											<Link className="post-img" to="./blogpost">
												<img className="blogImagePost" src={store.blog[2].image} alt="" />
											</Link>
											<div className="post-body">
												<div className="post-category">
													<Link to="./blogpost">{store.blog[2].category}</Link>
												</div>
												<h3 className="post-title">
													<Link to="./blogpost">
														Growing medical grade marijuana in the snow!
													</Link>
												</h3>
												<ul className="post-meta">
													<li />
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

// (<div className="container">
// <div className="text-left ">
// 	<hr className="featurette-divider" />
// 	<h4>Recent Posts</h4>
// </div>
// <div className="row">
// 	<div className="col-lg-4">
// 		<div className="post post-sm">
// 			<div className="post-img">
// 				<img
// 					src="https://i.imgur.com/o8qqxQB.jpg"
// 					alt=""
// 				/>
// 			</div>
// 			<div className="post-body">
// 				<div className="post-category">
// 					<Link to="./blogpost">Snow Plow</Link>
// 				</div>
// 				<h3 className="post-title title-sm">
// 					<Link to="./blogpost">
// 						New year new models
// 					</Link>
// 				</h3>
// 				<ul className="post-meta">
// 					<li />
// 				</ul>
// 			</div>
// 		</div>
// 	</div>

// 	<div className="col-lg-4">
// 		<div className="post post-sm">
// 			<Link to="./blogpost">
// 				<div className="post-img">
// 					<img src="https://blog.reneerouleau.com/wp-content/uploads/2015/06/Renee-Rouleau-Apple-Skincare-Experiment-403x260.jpg" />
// 				</div>
// 			</Link>
// 			<div className="post-body">
// 				<div className="post-category">
// 					<Link to="./blogpost">Mens Health</Link>
// 				</div>
// 				<h3 className="post-title title-sm">
// 					<Link to="./blogpost">
// 						Cold weather calls for skin care too
// 					</Link>
// 				</h3>
// 				<ul className="post-meta">
// 					<li />
// 				</ul>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="col-lg-4">
// 		<div className="post post-sm">
// 			<Link to="./blogpost">
// 				<div className="post-img">
// 					<img src="https://images.pexels.com/photos/274939/pexels-photo-274939.jpeg" />
// 				</div>
// 			</Link>
// 			<div className="post-body">
// 				<div className="post-category">
// 					<Link to="./blogpost">Drones</Link>
// 				</div>
// 				<h3 className="post-title title-sm">
// 					<Link to="./blogpost">
// 						FCC rules for surprising
// 						deregulation
// 					</Link>
// 				</h3>
// 				<ul className="post-meta">
// 					<li />
// 				</ul>
// 			</div>
// 		</div>
// 	</div>
// </div>
// </div>);
