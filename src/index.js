import "./main.css";

import Utility from "./components/Utility.js";
import Home from "./components/Home.js";
import Menu from "./components/Menu.js";
import Contact from "./components/Contact.js";

class App {
	#homeBtn;
	#menuBtn;
	#contactBtn;
	#utility;
	#home;
	#menu;
	#contact;

	constructor() {
		this.#homeBtn = document.querySelector("#home-btn");
		this.#menuBtn = document.querySelector("#menu-btn");
		this.#contactBtn = document.querySelector("#contact-btn");
		this.#utility = new Utility();
		this.#home = new Home();
		this.#menu = new Menu();
		this.#contact = new Contact();

		this.#loadEventListeners();
	}

	#switchTabs(tab) {
		this.#utility.content.textContent = "";

		switch (tab) {
			case "home": {
				this.#home.renderHomeTab();
				this.#homeBtn.classList.add("active");
				this.#menuBtn.classList.remove("active");
				this.#contactBtn.classList.remove("active");
				break;
			}
			case "menu": {
				this.#menu.renderMenuTab();
				this.#menuBtn.classList.add("active");
				this.#homeBtn.classList.remove("active");
				this.#contactBtn.classList.remove("active");
				break;
			}
			case "contact": {
				this.#contact.renderContactTab();
				this.#contactBtn.classList.add("active");
				this.#homeBtn.classList.remove("active");
				this.#menuBtn.classList.remove("active");
			}
		}
	}

	#loadEventListeners() {
		window.addEventListener("DOMContentLoaded", () => {
			this.#switchTabs("home");
		});

		this.#homeBtn.addEventListener("click", () => {
			this.#switchTabs("home");
		});

		this.#menuBtn.addEventListener("click", () => {
			this.#switchTabs("menu");
		});

		this.#contactBtn.addEventListener("click", () => {
			this.#switchTabs("contact");
		});
	}
}

const app = new App();
