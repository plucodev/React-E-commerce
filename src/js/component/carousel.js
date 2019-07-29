import React from "react";
import { Link } from "react-router-dom";
import { UncontrolledCarousel } from "reactstrap";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import rigoImage from "../../img/ecommerce.jpg";
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption
} from "reactstrap";

const items = [
	{
		src:
			"https://images.pexels.com/photos/1625876/pexels-photo-1625876.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		altText: "Slide 1",
		caption: "A different point of view",
		content: "Electro Med Plow",

		buttonLink: "/products",
		buttonCaption: "Shop Now"
	},
	{
		src:
			"https://images.pexels.com/photos/352091/pexels-photo-352091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		altText: "Slide 2",
		caption: "on the market",
		content: "Best Snowplows ",
		buttonLink: "/products",
		buttonCaption: "Shop Now"
	},
	{
		src:
			"https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		altText: "Visit Our New Blog Page",
		caption: "and check all the news",
		content: "Visit Our Blog",
		buttonLink: "/blog",
		buttonCaption: "Go to Blog"
	}
];

class CarouselHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === items.length - 1
				? 0
				: this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === 0
				? items.length - 1
				: this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	displayButton(index) {
		if (this.state.activeIndex === 0) {
			return "d-none";
		} else {
			return "buttonSlide";
		}
	}

	render() {
		const { activeIndex } = this.state;

		const slides = items.map(item => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}>
					<img src={item.src} alt={item.altText} />
					<div className="carousel-caption mb-5 custom-caption">
						<CarouselCaption
							captionText={item.caption}
							captionHeader={item.content}
						/>
					</div>

					<div className={this.displayButton(this.activeIndex)}>
						<Link to={item.buttonLink}>
							<Button color="success" pointer="cursor">
								{item.buttonCaption}
							</Button>{" "}
						</Link>
					</div>
				</CarouselItem>
			);
		});

		return (
			<Carousel
				activeIndex={activeIndex}
				next={this.next}
				previous={this.previous}>
				<CarouselIndicators
					items={items}
					activeIndex={activeIndex}
					onClickHandler={this.goToIndex}
				/>
				{slides}
				<CarouselControl
					direction="prev"
					directionText="Previous"
					onClickHandler={this.previous}
				/>
				<CarouselControl
					direction="next"
					directionText="Next"
					onClickHandler={this.next}
				/>
			</Carousel>
		);
	}
}

export default CarouselHome;
