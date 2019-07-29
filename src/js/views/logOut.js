import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export class LogOut extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<React.Fragment>
							<div className="container">
								<div className="text-center">
									<h1>Logout</h1>
									<p className="lead">Bootstrap logout modal dialog example</p>
								</div>
							</div>

							<div className="modal" id="logoutModal" tabIndex="-1" role="dialog" aria-hidden="true">
								<div className="modal-dialog modal-sm">
									<div className="modal-content">
										<div className="modal-header">
											<button
												type="button"
												className="close"
												data-dismiss="modal"
												aria-label="Close">
												<span aria-hidden="true">×</span>
											</button>
											<h4>
												Log Out <i className="fa fa-lock" />
											</h4>
										</div>
										<div className="modal-body">
											<p>
												<i className="fa fa-question-circle" /> Are you sure you want to
												log-off? <br />
											</p>
											<div className="actionsBtns">
												<form action="/logout" method="post">
													<input
														type="hidden"
														name="${_csrf.parameterName}"
														value="${_csrf.token}"
													/>
													<input
														type="submit"
														className="btn btn-default btn-primary"
														data-dismiss="modal"
														value="Logout"
													/>
													<button className="btn btn-default" data-dismiss="modal">
														Cancel
													</button>
												</form>
											</div>
										</div>
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

LogOut.propTypes = {
	history: PropTypes.object
};
