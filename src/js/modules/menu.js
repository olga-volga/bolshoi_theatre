function menu() {
	//Mobile menu
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

	//Fixed menu
	const header = document.querySelector('.header'),
		  content = document.querySelector('.content');

	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 800 || document.documentElement.scrollTop > 800) {
			header.classList.add("sticky");
			content.style.marginTop = '0px';
			content.style.paddingTop = '80px';
		} else {
		    header.classList.remove("sticky");
		    content.style.marginTop = '';
			content.style.paddingTop = '';
		}
	});
}

export default menu;