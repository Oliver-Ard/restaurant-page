import Utility from "./Utility.js";

import locationImg from "../images/location.png";

class Contact {
	#utility;

	constructor() {
		this.#utility = new Utility();
	}

	renderContactTab() {
		const contact = document.createElement("section");
		contact.setAttribute("id", "contact");
		contact.classList.add("container");

		contact.append(this.#createContactCard());

		this.#utility.content.append(contact);
	}

	#createContactCard() {
		// Contact Card
		const contactCard = document.createElement("div");
		contactCard.classList.add("contact-card", "card");

		// Title
		const contactCardTitle = document.createElement("h2");
		contactCardTitle.classList.add("contact-card-title");
		contactCardTitle.textContent = "Contact Us";
		contactCard.append(contactCardTitle);

		// Text
		const contactCardText = document.createElement("p");
		contactCardText.textContent =
			"If you have general questions or concerns about ";
		contactCardText.append(this.#utility.markText("Café Savory Delights"));
		contactCardText.append(
			this.#utility.createTextNode(", please reach us through:")
		);
		contactCard.append(contactCardText);

		// List
		const contactList = document.createElement("ul");
		contactList.classList.add("contact-list");
		// --List Items--
		for (let i = 0; i < 3; i++) {
			const listItem = document.createElement("li");

			switch (i) {
				case 0: {
					listItem.classList.add("phone");
					listItem.append(this.#utility.markText("Phone Number"));
					listItem.append(this.#utility.createTextNode(": +40 755-555-555"));
					break;
				}
				case 1: {
					listItem.classList.add("email");
					listItem.append(this.#utility.markText("Email"));
					listItem.append(
						this.#utility.createTextNode(": info@cafesavorydelights.com")
					);
					break;
				}
				case 2: {
					listItem.classList.add("location");
					listItem.append(this.#utility.markText("Address"));
					listItem.append(
						this.#utility.createTextNode(
							": 12 Amzei Square Street, Bucharest, Romania"
						)
					);
					break;
				}
			}
			contactList.append(listItem);
		}
		contactCard.append(contactList);

		// Location Image
		const addressImg = document.createElement("img");
		addressImg.src = locationImg;
		addressImg.alt = "Google Maps location for Café Savory Delights";
		addressImg.classList.add("location-img");
		contactCard.append(addressImg);

		return contactCard;
	}
}

export default Contact;
