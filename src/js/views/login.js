import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export class LogIn extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					// let user = store.users.find(users => {
					// 	return (
					// 		users.email ===
					// 			document.querySelector("[name=email").value &&
					// 		user.password ===
					// 			document.querySelector("[name=password").value
					// 	);
					// });

					return (
						<React.Fragment>
							<div className="text-center mt-5">
								<div className="brand mb-2">
									<img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" />
								</div>
								Please sign up
								<div className="container mb-5 mt-1 ">
									<div className="row d-flex justify-content-center">
										<div />
										<form>
											<div className="form-group">
												<input
													type="text"
													name="email"
													className="form-control"
													placeholder="Email address"
												/>
											</div>
											<div className="form-group">
												<input
													type="text"
													name="password"
													className="form-control"
													placeholder="Password"
												/>
											</div>

											<button
												type="button"
												onClick={() =>
													actions.signInUserClick(
														document.querySelector("[name=email").value,
														document.querySelector("[name=password").value,
														this.props.history
													)
												}
												className="btn btn-primary mb-2 mt-1 ">
												Sign in
											</button>
										</form>
									</div>
								</div>
							</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

LogIn.propTypes = {
	history: PropTypes.array
};
