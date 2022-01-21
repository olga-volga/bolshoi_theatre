function calcScrollWidth() {
     let div = document.createElement('div');
    div.style.cssText = 'width:50px;height:50px;overflow-y:scroll;visibility:hidden;';
    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return scrollWidth;
}

function openModal(elem) {
    elem.style.display = 'block';
    document.body.style.paddingRight = `${calcScrollWidth()}px`;
    document.body.style.overflow = 'hidden';
}

function closeModal(elem) {
    elem.style.display = '';
    document.body.style.paddingRight = '0px';
    document.body.style.overflow = '';
}

function modal() {
	const close = document.querySelector('.modal__close'),
		  modal = document.querySelector('.modal');

	modal.addEventListener('click', (e) => {
		if (e.target == modal || e.target.parentElement == close) {
			closeModal(modal);
		}
	});
}

export default modal;
export {calcScrollWidth};
export {openModal};
export {closeModal};