// Utility Class for reducing repetition
class Utility {
	constructor() {
		this.content = document.querySelector("#content");
	}
	markText(text) {
		const highlightedText = document.createElement("span");
		highlightedText.classList.add("highlighted-text");
		highlightedText.textContent = text;

		return highlightedText;
	}

	createTextNode(text) {
		return document.createTextNode(text);
	}
}

export default Utility;
