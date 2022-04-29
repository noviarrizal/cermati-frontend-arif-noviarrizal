const cookieContainer = document.querySelector(".cookie-container");
const btn = document.querySelector(".btn");
const newsLetterContainer = document.querySelector(".newsletter-container");
const newsLetterBtn = document.querySelector("newsletter-close");

btn.addEventListener("click", () => {
	cookieContainer.classList.remove("active");
});

setTimeout(() => {
	cookieContainer.classList.add("active");
}, 1000);

const scrollFunction = () => {
	if (
		document.body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		newsLetterContainer.classList.add("active");
	} else if (
		document.body.scrollTop <= 500 ||
		document.documentElement.scrollTop <= 500
	) {
		newsLetterContainer.classList.add("active");
	} else {
		newsLetterContainer.classList.remove("active");
	}
};

const dateInFuture = new Date(Date.now() + 1000 * 60 * 10);
const dateInFutureStr = dateInFuture.toString();

const closePanel = () => {
	newsLetterContainer.classList.remove("active");
	localStorage.setItem("date", dateInFutureStr);
};

window.onscroll = () => {
	const checkDateStr = localStorage.getItem("date");
	const checkDate = new Date(checkDateStr);

	if (!checkDateStr) {
		scrollFunction();
	} else if (Date.now() > checkDate) {
		localStorage.removeItem(checkDateStr);
		localStorage.removeItem("date");
		console.log("expired");
		scrollFunction();
	} else {
		closePanel();
	}
};
