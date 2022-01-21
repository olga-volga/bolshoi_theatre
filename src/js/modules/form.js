import postData from '../services/requests';
import {calcScrollWidth} from './modal';
import {openModal} from './modal';
import {closeModal} from './modal';

function form() {
	const form = document.querySelector('form'),
		  statusModal = document.querySelector('#status');

	const message = {
        successTitle: "Спасибо за вашу заявку!",
        successDescr: "Мы свяжемся с вами в ближайшее время!",
        failTitle: "Произошла ошибка...",
        failDescr: "Попробуйте еще раз позднее"
    };

	function showStatusMessage(title, descr) {
		const messageTitle = statusModal.querySelector('.modal__subtitle'),
              messageDescr = statusModal.querySelector('.modal__descr');

        messageTitle.textContent = title;
        messageDescr.textContent = descr;

        openModal(statusModal);
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const formData = new FormData(form);

		postData('php/server.php', formData)
                .then(res => {
                    console.log(res);
                    showStatusMessage(message.successTitle, message.successDescr);
                })
                .catch(() => {
                    showStatusMessage(message.failTitle, message.failDescr);
                })
                .finally(() => {
                    form.reset();
                    setTimeout(() => {
                        closeModal(statusModal);
                    }, 5000);
                })
	});
}

export default form;