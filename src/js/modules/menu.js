function menu() {
	const body = document.querySelector('body'),
		  burger = document.querySelector('.header__burger'),
		  menu = document.querySelector('.header__menu');

	burger.addEventListener('click', () => {
		menu.classList.toggle('active');
		body.classList.toggle('lock');
	});

	menu.addEventListener('click', (e) =>  {
		menu.classList.remove('active');
		body.classList.remove('lock');
	});
}

export default menu;