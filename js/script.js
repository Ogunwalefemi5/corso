// Add custom JavaScript here

// navigation
function scrollTo() {
	const navbar = document.querySelector(".navbar");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 50) {
			navbar.classList.add("bg-dark");
			console.log(window.scrollY);
		} else {
			navbar.classList.remove("bg-dark");
		}
	});
}

window.addEventListener("DOMContentLoaded", scrollTo());
// scrollTo();
