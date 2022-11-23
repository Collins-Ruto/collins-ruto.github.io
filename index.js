let navToggle = document.querySelector('.nav-toggle');
let navLinks = document.querySelectorAll('.nav__link');
let boddy = document.querySelector(".bodyy");
let contactBtn = document.querySelector(".butn1");
let closer = document.querySelector(".close");
let contact = document.getElementById("contact")
let portDesc = document.querySelector(".port-desc");
let portImg = document.querySelector(".portfolio__item");
let pdesc = document.getElementById("pdesc");
let portfolio = document.querySelectorAll(".portfolio__item");

document.querySelectorAll(".anim").forEach(element => {
	element.classList.add("slow");	
})

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

portDesc.addEventListener("mouseover", () => {
	document.body.classList.remove("port-desc");
	
})

portfolio.forEach(item => {
	item.addEventListener("mouseover", () => {
		let idesc = item.querySelector(".descp");
		idesc.classList.add("desc-off");
		console.log("got here")
	});
})

portfolio.forEach(item => {
	item.addEventListener("mouseout", () => {
		pdesc.classList.remove("desc-off");
		let idesc = item.querySelector(".descp");
    	idesc.classList.remove("desc-off");
	});
})

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show')
		} else {
			entry.target.classList.remove("show");
		}
	})
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el))