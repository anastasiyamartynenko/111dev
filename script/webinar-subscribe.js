const form = document.querySelector('.webinar-register-from');
const formGrantParent = document.querySelector('.webinar-register'); 
const modal = document.querySelector('.modal-webinars');

form.addEventListener('submit', submitData)

async function submitData(e) {
    e.preventDefault();
    console.log(form);

    validator(form);
    async function validator(form) {
        let error = formValidate(form);
        let formData = new FormData(form);

        if(error === 0) {
            formGrantParent.classList.add('_loading');
            let response = await fetch('https://www.jusaninvest.kz/oldi/webinar-page/index.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                
                form.reset();
                formGrantParent.classList.remove('_loading');
                modal.classList.add('show');
            } else {
                alert('Ошибка');
                formGrantParent.classList.remove('_loading');
            }
        } else {
            alert('Заполните обязательные поля!');
        }
    }
    function formValidate(form) {
		let error = 0;
		let formReq = form.querySelectorAll('._req');
		formReq.forEach(input => {
			formRemoveError(input);
			if (input.value === '') {
				formAddError(input);
				error++;
			}
		});
		return error;
	}

	function formAddError(input) {
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.classList.remove('_error');
	}
}