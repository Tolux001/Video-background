// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and sub frames to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector(".switch-btn");
const videoContainer = document.querySelector(".video-container");
const switchButton = document.querySelector(".switch");

btn.addEventListener("click", () => {
	if (!videoContainer.paused) {
		videoContainer.pause();
		switchButton.classList.add("slide");
	} else {
		videoContainer.play();
		switchButton.classList.remove("slide");
	}
});