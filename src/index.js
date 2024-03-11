import "./main.css";

import Home from "./components/home.js";
import Menu from "./components/menu.js";

class App {
	#content;
	#homeBtn;
	#menuBtn;
	#contactBtn;
	#home;
	#menu;

	constructor() {
		this.#content = document.querySelector("#content");
		this.#homeBtn = document.querySelector("#home-btn");
		this.#menuBtn = document.querySelector("#menu-btn");
		this.#contactBtn = document.querySelector("#contact-btn");
		this.#home = new Home();
		this.#menu = new Menu();

		this.#loadEventListeners();
	}

	#switchTabs(tab) {
		this.#content.textContent = "";

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
