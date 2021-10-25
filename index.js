const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const navBar = document.getElementById('navv');


navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => { 
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
});


navBar.addEventListener('blur', () => {
	document.body.classList.remove('nav-open')
});

function focusf() {
	document.getElementById("navv").focus();
}

function blurf() {
	document.getElementById("navv").style.display = "none";
}