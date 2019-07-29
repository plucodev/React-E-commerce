import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Rating extends React.Component {
	render() {
		const stars = this.props.stars;
		const rating = [];
		for (var i = 0; i < stars - 1; i++) {
			rating.push(<FontAwesomeIcon key={i} icon="star" />);
		}

		// Checks partial ratings to fill a half star
		if (stars % 1 == 0) {
			rating.push(<FontAwesomeIcon key={i} icon="star" />);
		} else {
			rating.push(<FontAwesomeIcon key={i} icon="star-half-alt" />);
		}

		// Places remaining empty stars
		for (i++; i < 5; i++) {
			rating.push(<FontAwesomeIcon key={i} icon={["far", "star"]} />);
		}

		return <div>{rating}</div>;
	}
}

Rating.propTypes = {
	stars: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
