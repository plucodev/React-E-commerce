const getState = ({ getStore, setStore }) => {
	return {
		store: {
			products: [
				{
					category: "drones",
					sku: "5158601",
					image:
						"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5158/5158601_sd.jpg;maxHeight=640;maxWidth=550",
					name: "Sky Viper Drone",
					description:
						"Set up a custom race course and compete against your " +
						"friends with the Sky Viper hover racer. This quadcopter flies at a maximum speed " +
						"of 20 mph and can hover 3 feet above the ground. Use infrared blasts to attack your " +
						"friends' Sky Viper hover racers as you do battle or play. ",
					price: 299,
					rating: "4"
				},
				{
					category: "drones",
					sku: "5896802",
					image:
						"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5896/5896802_sd.jpg;maxHeight=640;maxWidth=550",
					name: "DJI Spark Drone",
					description:
						"Serve up stunning shots from the air with this DJI Spark drone. An integrated camera lets you take still photographs or 1080p HD video to share with friends and family, and an automatic stabilizer makes each shot a keeper. This DJI Spark drone features a 16-minute flight time before needing a recharge, providing time for dozens of pics.",
					price: 35999,
					rating: "5"
				},
				{
					category: "drones",
					sku: "5937206",
					image:
						"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5937/5937206_sd.jpg;maxHeight=640;maxWidth=550",
					name: "Protocol VR Racer Drone",
					description:
						"Stream live video while you take photos with this Dura VR drone. For a more realistic immersive experience, download the app and plug the VR headset into a phone. Users of any skill level can learn to race this Dura VR drone thanks to its three speed settings and self-stabilizing electronics.",
					price: 6499,
					rating: "3"
				},
				{
					category: "drones",
					sku: "5937208",
					image:
						"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5937/5937208_sd.jpg;maxHeight=640;maxWidth=550",
					name: "Protocol Vento Wifi Drone",
					description:
						"Use the onboard altitude sensor to automatically launch, hover and land this Vento drone. Crash-resistant material helps it survive a tumble, and you can stream live video via Wi-Fi with the device's built-in 480p camera and a smartphone. Fold this Vento drone to take it with you to the next destination.",
					price: 8499,
					rating: 4.5
				},
				{
					category: "snow plows",
					sku: "49836546",
					image: "https://i.imgur.com/WVBxGMg.jpg",
					name: "Tractor Snow Plow",
					description:
						"The durable, fully featured BOSS DXTs are the ultimate tools to fight all things snow and ice. Dual-trip design enhances plow protection when striking obstacles in any position and optional Hardox cutting edges offer extended wear resistance. Flared wings with an enhanced curl throw snow with maximum efficiency and the DXT's multi-position plow blade can quickly and easily switch positions to move large amounts of snow. The smooth running DXT is state of the art for plowing protection and performance.",
					price: 149999,
					rating: "3.5"
				},
				{
					category: "snow plows",
					sku: "449609640",
					image: "https://i.imgur.com/S81bHnF.jpg",
					name: "Meyer Snow Plow",
					description:
						"If you're tired of getting snowed in during the winter and want a better solution than a shovel or a snow blower, then the Meyer Home Plow is like a dream come true. With the easy to operate Quick-Link mounting system and options available to fit a broad range of trucks and sports utility vehicles with a 2 inch front receiver hitch, this personal snow plow is the hassle-free way to make snow removal quick, efficient, and maybe even fun. ",
					price: 167500,
					rating: "4.5"
				},
				{
					category: "snow plows",
					sku: "93209321",
					image: "https://i.imgur.com/o8qqxQB.jpg",
					name: "Garbage Truck Snow Plow",
					description:
						"This Garbage Truck Plow lets you remove snow 50 times faster than conventional snow throwers. The included wireless remote control provides convenient control from inside your vehicle.",
					price: 179900,
					rating: "4"
				},
				{
					category: "snow plows",
					sku: "5569392",
					image: "https://i.imgur.com/NBJKaic.jpg",
					name: "Train Snow Plow",
					description:
						"Polar Tec blades and pneumatic support assures outstanding traction and 360° turnability on snow and icy terrain. Attach the included snow blade for dual sweeping/plowing capabilities. Locking differential feature helps keep you on a straight path. Control broom angle, pressure, and speed directly from the steering-mounted panel. Adjustable height allows comfortable use.",
					price: 745000,
					rating: "5"
				},
				{
					category: "male products",
					sku: "77650321",
					image:
						"https://blog.reneerouleau.com/wp-content/uploads/2015/06/Renee-Rouleau-Apple-Skincare-Experiment-403x260.jpg",
					name: "Apple Vitamin C Lotion",
					description:
						"Visibly correct uneven skin tone, reduce appearance of dark spots & discoloration with the exfoliating power of malic acid from organic green apples, peptides, alpha lipoic acid, CoQ10 and Vitamin C. For all skin types except sensitive / rosacea skin.",
					price: 2999,
					rating: "4.5"
				},
				{
					category: "male products",
					sku: "8799921",
					image:
						"https://images-na.ssl-images-amazon.com/images/I/71r0Rqw820L._SY355_.jpg",
					name: "Bio Fusion Hair Loss Shampoo",
					description:
						"A UNISEX HAIR LOSS SOLUTION This maximum strength DHT fighting shampoo provides a safe and effective solution to the hair thinning naturally, for male and female pattern hair loss. Sesame seed oil, evening primrose oil & rosemary oil all work in synergy to reduce hair shedding and fight hair loss at the root. The minerals such as iron and zinc provide the nutrients needed for hair to encourage healthy hair growth and treat dandruff a well.",
					price: 1999,
					rating: "5"
				},
				{
					category: "male products",
					sku: "74785678",
					image:
						"https://c.shld.net/rpx/i/s/pi/mp/10153480/prod_17141107424?src=http%3A%2F%2Fimages.amiventures.net%2FB07F876KDN_L1.jpg&d=b5dafdd56853b56bdb8b9e8f443be08824bffb99&?hei=64&wid=64&qlt=50",
					name: "Moisturizing & Hydrating Cream",
					description:
						"Harnesses the power of probiotics to help balance the skin resulting in nourished, hydrated and healthy skin. Absorbs instantly and lightweight enough for daytime wear, but formulated to deliver regenerative hydration overnight as well. Helps to reduce the appearance of lines and winkles, even skintone and improve skin's hydration. ",
					price: 2999,
					rating: "5"
				},
				{
					category: "male products",
					sku: "84399221",
					image:
						"https://1stphorm.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/o/post-workout-stack_2.png",
					name: "Protein Shake Powder",
					description:
						"Premium whey packed with 18g of protein per serving, for the protein you need from a quality source — the same cows that produce your milk and cheese. It’s simply filtered and spray-dried to produce all-natural nutritionals.",
					price: 2800,
					rating: "4"
				},
				{
					category: "medical marijuana",
					sku: "34399208",
					image:
						"https://www.cwhemp.com/media/catalog/product/cache/1/small_image/600x/9df78eab33525d08d6e5fb8d27136e95/c/b/cbd-oil-full-strength-30-mct-cat_1_1.jpg",
					name: "Full Strength CBD Oil",
					description:
						"This broad-spectrum hemp extract oil with naturally occurring CBD gives you more than 80 phytocannabinoids and other beneficial plant compounds to support your good health.",
					price: 5999,
					rating: "5"
				},
				{
					category: "medical marijuana",
					sku: "873388288",
					image:
						"http://knoxmedical.com/wp-content/uploads/2018/08/p2-10.png",
					name: "Indica With Mild Sedation",
					description:
						"Sagitta is an Indica-dominant strain with a ratio of 40:1 THC: CBD. It is known for leaving patients feeling calm, uplifted and relaxed. It is best known for treating conditions such as insomnia, chronic stress, anxiety, bipolar disease, and muscle spasms and tremors. ",
					price: 7999,
					rating: "4"
				},
				{
					category: "medical marijuana",
					sku: "55454657",
					image:
						"http://knoxmedical.com/wp-content/uploads/2018/08/p1-10.png",
					name: "Vaporizer Cartridges",
					description:
						"“Vaping” is short for “vaporization”. Effects are felt immediately and unlike smoking, no combustion or burning takes place. Portable vaporizers are very discreet, as vapor dissipates quickly with minimal odor.",
					price: 4000,
					rating: "4.5"
				},
				{
					category: "medical marijuana",
					sku: "44958600",
					image:
						"http://knoxmedical.com/wp-content/uploads/2018/08/capsule-odra.png",
					name: "THC Capsules",
					description:
						"One the most discreet and convenient forms of consumption. The cannabinoids are processed and absorbed by the way of the liver, which means effects are more prolonged than most forms of cannabis ingestion. A diverse variety of options are available.",
					price: 9999,
					rating: "5"
				}
			],

			blog: [
				{
					title: "The farm of the future just may be drone driven",
					category: "Medical Marijuana",
					image:
						"https://images.pexels.com/photos/539124/drone-camera-4k-1080-539124.jpeg",
					content:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				},
				{
					title: "Let it snow! Let it snow!",
					category: "Snow Plow",
					image: "https://i.imgur.com/WVBxGMg.jpg",
					content:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				},
				{
					title: "Growing medical grade marijuana in the snow!",
					category: "Medical Marijuana",
					image:
						"https://images.pexels.com/photos/1466335/pexels-photo-1466335.jpeg",
					content:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				},
				{
					title: "Cold weather calls for skin care too",
					category: "Mens Health",
					image:
						"https://blog.reneerouleau.com/wp-content/uploads/2015/06/Renee-Rouleau-Apple-Skincare-Experiment-403x260.jpg",
					content:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				},
				{
					title: "FCC rules for surprising deregulation",
					category: "Drones",
					image:
						"https://images.pexels.com/photos/274939/pexels-photo-274939.jpeg",
					content:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				}
			],

			cart: [
				/*
				{
					sku: "5896802",
					quantity: 2
				},
				{
					sku: "77650321",
					quantity: 1
				}
				*/
			],

			users: [
				{
					email: "john@gmail.com",
					password: "1234",
					logStatus: false
				},
				{
					email: "mark@gmail.com",
					password: "5678",
					logStatus: false
				}
			]
		},
		actions: {
			updateQuantity: (sku, math, history) => {
				const store = getStore();

				let cartItem = store.cart.find(products => {
					return products.sku === sku;
				});
				if (math === "add") {
					cartItem.quantity = cartItem.quantity + 1;
				} else if (math === "minus" && cartItem.quantity > 0) {
					cartItem.quantity = cartItem.quantity - 1;
				}

				setStore({ store: store });

				history.push("/cart");
			},

			addProductToCart: (sku, quantity) => {
				const store = getStore();

				let index = store.cart.findIndex(products => {
					return products.sku == sku;
				});
				if (index == -1) {
					store.cart.push({
						sku: sku,
						quantity: quantity
					});
				} else if (quantity > 0) {
					store.cart[index].quantity += quantity;
				}

				setStore({ store: store });
			},

			removeItemFromCart: (index, history) => {
				const store = getStore();

				store.cart.splice(index, 1);

				setStore({ store: store });

				history.push("/cart");
			},

			signInUserClick: (emailInput, passwordInput, history) => {
				const store = getStore();
				// let attempt = 3;
				let userLogIndex = store.users.findIndex(x => {
					return x.email === emailInput;
				});
				console.log(userLogIndex);

				if (
					(emailInput === store.users[userLogIndex].email &&
						passwordInput === store.users[userLogIndex].password) ||
					(emailInput === store.users[userLogIndex].email &&
						passwordInput === store.users[userLogIndex].password)
				) {
					alert("Login Successfully");
					store.users[userLogIndex].logStatus = true;
					// alert(store.users[userLogIndex].logStatus);
					setStore({ store: store });
					history.push("/");
				} else {
					// attempt--;
					alert("Try Again");
				}
			}
		}
	};
};

export default getState;