//mode button
const modeBtn = document.querySelector('.header_inner nav ul li.switch a');
modeBtn.onclick = (e) => {
	document.body.classList.toggle('switchMode');
	e.preventDefault();
};
//burger menu
const burger = document.querySelector('.burger');
const burger__line = document.querySelector('.burger__line');
const burger__menu = document.querySelector('.burger__menu');

burger.onclick = (e) => {
	burger__line.classList.toggle('active');
	burger__menu.classList.toggle('open');
	document.body.classList.toggle('close');
};
burger__menu.onclick = (e) => {
	burger__line.classList.toggle('active');
	document.body.classList.toggle('close');
	burger__menu.classList.toggle('open');
};

//scroll to the section
const homeSection = document.querySelector('.header_body');
const aboutSection = document.querySelector('#about');
const portfolioSection = document.querySelector('#portfolio');
const contactsSection = document.querySelector('#contact');

const logoLink = document.querySelector('.logo');
const scrollTopBtn = document.querySelector('.scrollTop');
const aboutLink = document.querySelector('.about_link');
const portfolioLink = document.querySelector('.portfolio_link');
const contactsLink = document.querySelector('.contacts_link');
const contactBtn = document.querySelector('.btn');

const aboutBurgerLink = document.querySelector('.about_burger_link');
const portfolioBurgerLink = document.querySelector('.portfolio_burger_link');
const contactsBurgerLink = document.querySelector('.contacts_burger_link');

const scrollToAbout = () => {
	aboutSection.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
};
const scrollToPortfolio = () => {
	portfolioSection.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
};
const scrollToContacts = () => {
	contactsSection.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
};
const scrollToHome = () => {
	homeSection.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
};

aboutLink.addEventListener('click', scrollToAbout);
aboutBurgerLink.addEventListener('click', scrollToAbout);
portfolioLink.addEventListener('click', scrollToPortfolio);
portfolioBurgerLink.addEventListener('click', scrollToPortfolio);
contactsLink.addEventListener('click', scrollToContacts);
contactsBurgerLink.addEventListener('click', scrollToContacts);
contactBtn.addEventListener('click', scrollToContacts);
logoLink.addEventListener('click', scrollToHome);
scrollTopBtn.addEventListener('click', scrollToHome);

window.onscroll = () => {
	if (window.pageYOffset > 700) {
		scrollTopBtn.style.display = 'block';
	} else {
		scrollTopBtn.style.display = 'none';
	}
};
