import Utility from "./Utility.js";

import coffeeIcon from "../images/coffee-cup-icon.png";
import coffeeMachineImg from "../images/coffee-machine.jpg";

class Home {
	#utility;

	constructor() {
		this.#utility = new Utility();
	}

	renderHomeTab() {
		const home = document.createElement("section");
		home.setAttribute("id", "home");
		home.classList.add("container");

		home.append(this.#createHeroCard());
		home.append(this.#createHoursCard());

		this.#utility.content.append(home);
	}

	#createHeroCard() {
		// --Hero Card--
		const heroCard = document.createElement("div");
		heroCard.classList.add("hero-card", "card");

		// --Card Icon--
		const cardIcon = document.createElement("img");
		cardIcon.src = coffeeIcon;
		cardIcon.alt = "Coffee Cup Icon";
		cardIcon.classList.add("card-icon");
		heroCard.append(cardIcon);

		// --Hero Card Wrapper--
		// We use a loop here because we need to create two identical divs but with different content
		for (let i = 0; i < 2; i++) {
			const heroCardWrapper = document.createElement("div");
			heroCardWrapper.classList.add("hero-card-wrapper");

			if (i === 0) {
				// Brand Motto
				const brandMotto = document.createElement("h2");
				brandMotto.classList.add("brand-motto");
				brandMotto.textContent = `"Where Every Sip is a Savory Delight!"`;
				heroCardWrapper.append(brandMotto);
				// Hero Text
				const heroText = document.createElement("p");
				heroText.classList.add("hero-text");
				heroText.textContent = "Welcome to ";
				heroText.append(this.#utility.markText("Café Savory Delights"));
				heroText.append(
					this.#utility.createTextNode(
						"! Experience the cozy atmosphere and delicious coffee creations that make our café a local favorite "
					)
				);
				heroText.append(this.#utility.markText("since 1966"));
				heroText.append(this.#utility.createTextNode("."));
				heroCardWrapper.append(heroText);
			} else {
				// Hero Image
				const heroImg = document.createElement("img");
				heroImg.src = coffeeMachineImg;
				heroImg.alt = "Coffee Machine";
				heroImg.classList.add("coffee-machine-img");
				heroCardWrapper.append(heroImg);
			}

			heroCard.append(heroCardWrapper);
		}

		return heroCard;
	}

	#createHoursCard() {
		// --Hours Card--
		const hoursCard = document.createElement("div");
		hoursCard.classList.add("hours-card", "card");

		// --Hours Card Title--
		const hoursCardTitle = document.createElement("h2");
		hoursCardTitle.classList.add("hours-card-title");
		hoursCardTitle.textContent = "Hours";
		hoursCard.append(hoursCardTitle);

		// --Hours List--
		const hoursList = document.createElement("ul");
		for (let i = 0; i < 7; i++) {
			const listItem = document.createElement("li");

			switch (i) {
				case 0: {
					listItem.append(this.#utility.markText("Monday"));
					listItem.append(this.#utility.createTextNode(": 12:00 - 21:00"));
					break;
				}
				case 1: {
					listItem.append(this.#utility.markText("Tuesday"));
					listItem.append(this.#utility.createTextNode(": 8:00 - 17:00"));
					break;
				}
				case 2: {
					listItem.append(this.#utility.markText("Wednesday"));
					listItem.append(this.#utility.createTextNode(": 12:00 - 21:00"));
					break;
				}
				case 3: {
					listItem.append(this.#utility.markText("Thursday"));
					listItem.append(this.#utility.createTextNode(": 8:00 - 17:00"));
					break;
				}
				case 4: {
					listItem.append(this.#utility.markText("Friday"));
					listItem.append(this.#utility.createTextNode(": 12:00 - 21:00"));
					break;
				}
				case 5: {
					listItem.append(this.#utility.markText("Saturday"));
					listItem.append(this.#utility.createTextNode(": 16:00 - 2:00"));
					break;
				}
				case 6: {
					listItem.append(this.#utility.markText("Saturday"));
					listItem.append(this.#utility.createTextNode(": Closed"));
					break;
				}
			}
			hoursList.append(listItem);
		}
		hoursCard.append(hoursList);

		return hoursCard;
	}
}

export default Home;
