let navToggle = document.querySelector('.nav-toggle');
let navLinks = document.querySelectorAll('.nav__link');
let boddy = document.querySelector(".bodyy");
let contactBtn = document.querySelector(".butn1");
let closer = document.querySelector(".close");
let contact = document.getElementById("contact")


navToggle.addEventListener("click", () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => { 
	link.addEventListener("click", () => {
		document.body.classList.remove('nav-open');
	})
});

boddy.addEventListener("click", () => {
	document.body.classList.remove('nav-open');
});

contactBtn.addEventListener("click", () => {
	document.body.classList.toggle("contact-open");
});

closer.addEventListener("click", () => {
	document.body.classList.remove("contact-open");
});

/*boddy.addEventListener("click", () => {
	document.body.classList.remove('contact-open');
});

/*window.addEventListener("click", () => {
	document.body.classList.remove("contact-open")
});

/*navBar.addEventListener("focus", () => {
	document.body.classList.toggle('nav-open');
});

navBar.addEventListener("blur", () => {
	alert("it should be out right around now");
	document.body.classList.remove('nav-open');
});*/
