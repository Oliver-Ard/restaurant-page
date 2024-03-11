import locationImg from "../images/location.png";

class Contact {
	#content;

	constructor() {
		this.#content = document.querySelector("#content");
	}

	renderContactTab() {
		const contact = document.createElement("section");
		contact.setAttribute("id", "contact");
		contact.classList.add("container");

		contact.append(this.#createContactCard());

		this.#content.append(contact);
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
		contactCardText.append(this.#markText("Café Savory Delights"));
		contactCardText.append(this.#createTextNode(", please reach us through:"));
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
					listItem.append(this.#markText("Phone Number"));
					listItem.append(this.#createTextNode(": +40 755-555-555"));
					break;
				}
				case 1: {
					listItem.classList.add("email");
					listItem.append(this.#markText("Email"));
					listItem.append(
						this.#createTextNode(": info@cafesavorydelights.com")
					);
					break;
				}
				case 2: {
					listItem.classList.add("location");
					listItem.append(this.#markText("Address"));
					listItem.append(
						this.#createTextNode(": 12 Amzei Square Street, Bucharest, Romania")
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

	// Utility Functions
	#markText(text) {
		const highlightedText = document.createElement("span");
		highlightedText.classList.add("highlighted-text");
		highlightedText.textContent = text;

		return highlightedText;
	}

	#createTextNode(text) {
		return document.createTextNode(text);
	}
}

export default Contact;
