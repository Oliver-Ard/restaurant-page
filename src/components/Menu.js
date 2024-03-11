import Utility from "./Utility.js";

import coffeeIcon from "../images/coffee-cup-icon.png";
import coffeeCup from "../images/coffee-cup.jpg";
import coldBrew from "../images/cold-brew.jpg";
import croissant from "../images/croissants.jpg";
import lightMeal from "../images/light-meal.jpg";
import teaCup from "../images/tea-cup.jpg";

class Menu {
	#utility;

	constructor() {
		this.#utility = new Utility();

		this.signatureDrinks = {
			title: "Signature Drinks",
			imgSrc: coffeeCup,
			imgAlt: "Coffee Cup",
			productOne: {
				productName: "Café Savory Special",
				productPrice: " - €3.50",
			},
			productTwo: {
				productName: "Caramel Crunch Latte",
				productPrice: " - €4.00",
			},
			productThree: {
				productName: "Nutty Affair",
				productPrice: " - €3.80",
			},
			productFour: {
				productName: "Coconut Cream Mocha",
				productPrice: " - €4.20",
			},
		};

		this.teas = {
			title: "Teas",
			imgSrc: teaCup,
			imgAlt: "Tea Cup",
			productOne: {
				productName: "Assorted Hot Teas",
				productPrice: " - €2.50",
			},
			productTwo: {
				productName: "Iced Tea",
				productPrice: " - €2.80",
			},
			productThree: {
				productName: "Chai Latte",
				productPrice: " - €3.00",
			},
			productFour: {
				productName: "Matcha Latte",
				productPrice: " - €3.50",
			},
		};

		this.coldBrews = {
			title: "Cold Brews",
			imgSrc: coldBrew,
			imgAlt: "Cold Brew Glass",
			productOne: {
				productName: "Classic Cold Brew",
				productPrice: " - €3.00",
			},
			productTwo: {
				productName: "Cold Brew with Milk",
				productPrice: " - €3.50",
			},
			productThree: {
				productName: "Nitro Cold Brew",
				productPrice: " - €4.00",
			},
			productFour: {
				productName: "Iced Caramel Macchiato",
				productPrice: " - €4.20",
			},
		};

		this.pastriesAndSnacks = {
			title: "Pastries & Snacks",
			imgSrc: croissant,
			imgAlt: "Croissants",
			productOne: {
				productName: "Croissants",
				productPrice: " - €2.00 each",
			},
			productTwo: {
				productName: "Muffins",
				productPrice: " - €2.50 each",
			},
			productThree: {
				productName: "Cookies",
				productPrice: " - €1.50 each",
			},
			productFour: {
				productName: "Cake Slices",
				productPrice: " - €3.00 each",
			},
		};

		this.lightMeals = {
			title: "Savory Options",
			imgSrc: lightMeal,
			imgAlt: "Fruits Plate",
			productOne: {
				productName: "Avocado Toast",
				productPrice: " - €5.00",
			},
			productTwo: {
				productName: "Breakfast Burrito",
				productPrice: " - €6.50",
			},
			productThree: {
				productName: "Quiche",
				productPrice: " - €4.50",
			},
			productFour: {
				productName: "Bagels with Cream Cheese",
				productPrice: " - €3.50",
			},
		};
	}

	renderMenuTab() {
		const menu = document.createElement("section");
		menu.setAttribute("id", "menu");
		menu.classList.add("container");

		const menuCards = this.#createMenuCards();
		for (let card of menuCards) {
			menu.append(card);
		}

		this.#utility.content.append(menu);
	}

	#createMenuCards() {
		const cardsArray = [];

		for (let i = 0; i < 6; i++) {
			// Menu Cards
			const menuCard = document.createElement("div");
			menuCard.classList.add("menu-card", "card");

			switch (i) {
				case 0: {
					const menuDescriptionCard = this.#createDescriptionCard();
					for (let element of menuDescriptionCard) {
						menuCard.append(element);
					}
					break;
				}

				case 1: {
					const signatureDrinksCard = this.#createProductsCard(
						this.signatureDrinks
					);
					for (let element of signatureDrinksCard) {
						menuCard.append(element);
					}
					break;
				}

				case 2: {
					const teasCard = this.#createProductsCard(this.teas);
					for (let element of teasCard) {
						menuCard.append(element);
					}
					break;
				}

				case 3: {
					const coldBrewsCard = this.#createProductsCard(this.coldBrews);
					for (let element of coldBrewsCard) {
						menuCard.append(element);
					}
					break;
				}

				case 4: {
					const pastriesAndSnacksCard = this.#createProductsCard(
						this.pastriesAndSnacks
					);
					for (let element of pastriesAndSnacksCard) {
						menuCard.append(element);
					}
					break;
				}

				case 5: {
					const lightMealsCard = this.#createProductsCard(this.lightMeals);
					for (let element of lightMealsCard) {
						menuCard.append(element);
					}
					break;
				}
			}
			cardsArray.push(menuCard);
		}

		return cardsArray;
	}

	#createDescriptionCard() {
		const elementsArray = [];

		// --Card Icon--
		const cardIcon = document.createElement("img");
		cardIcon.src = coffeeIcon;
		cardIcon.alt = "Coffee Cup Icon";
		cardIcon.classList.add("card-icon");
		elementsArray.push(cardIcon);

		// --Card Title--
		const cardTitle = this.#createCardTitle("Menu");
		elementsArray.push(cardTitle);

		// --Card Paragraph--
		const para = document.createElement("p");
		para.textContent =
			"Indulge in our exquisite selection of handcrafted coffees, refreshing teas, and delectable treats at ";
		para.append(this.#utility.markText("Café Savory Delights"));
		para.append(
			this.#utility.createTextNode(
				". From our signature drinks to savory options and sweet pastries, there's something to satisfy every craving. Join us for a delightful culinary experience that promises to tantalize your taste buds and elevate your coffee break to new heights."
			)
		);
		elementsArray.push(para);

		return elementsArray;
	}

	#createProductsCard(categoryObj) {
		const elementsArray = [];

		// --Title--
		const title = this.#createCardTitle(categoryObj.title);
		elementsArray.push(title);
		// --Image--
		const image = this.#createCardImage(categoryObj.imgSrc, categoryObj.imgAlt);
		elementsArray.push(image);

		// --Products List--
		const productsList = document.createElement("ul");
		productsList.classList.add("menu-products");
		// --List Items--
		const listItems = this.#createListItems(4);
		// First Product
		listItems[0].append(
			this.#utility.markText(categoryObj.productOne.productName)
		);
		listItems[0].append(
			this.#utility.createTextNode(categoryObj.productOne.productPrice)
		);
		productsList.append(listItems[0]);
		// Second Product
		listItems[1].append(
			this.#utility.markText(categoryObj.productTwo.productName)
		);
		listItems[1].append(
			this.#utility.createTextNode(categoryObj.productTwo.productPrice)
		);
		productsList.append(listItems[1]);
		// Third Product
		listItems[2].append(
			this.#utility.markText(categoryObj.productThree.productName)
		);
		listItems[2].append(
			this.#utility.createTextNode(categoryObj.productThree.productPrice)
		);
		productsList.append(listItems[2]);
		// Fourth Product
		listItems[3].append(
			this.#utility.markText(categoryObj.productFour.productName)
		);
		listItems[3].append(
			this.#utility.createTextNode(categoryObj.productFour.productPrice)
		);
		productsList.append(listItems[3]);

		elementsArray.push(productsList);

		return elementsArray;
	}

	// Helper Functions
	#createCardTitle(title) {
		const titleEl = document.createElement("h2");
		titleEl.classList.add("menu-card-title");
		titleEl.textContent = title;

		return titleEl;
	}

	#createCardImage(src, alt) {
		const cardImg = document.createElement("img");
		cardImg.src = src;
		cardImg.alt = alt;
		cardImg.classList.add("menu-card-image");

		return cardImg;
	}

	#createListItems(ItemsNr) {
		const itemsArray = [];

		for (let i = 0; i < ItemsNr; i++) {
			const listItem = document.createElement("li");
			itemsArray.push(listItem);
		}

		return itemsArray;
	}
}

export default Menu;
