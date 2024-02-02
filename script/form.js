const firstForm = document.getElementById('application-form');
const secondForm = document.getElementById('application-form-2');
const thirdForm = document.getElementById('application-form-3');


const formHandle = function(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    const obj = {};
    for (let key of formData.keys()) {
        obj[key] = formData.get(key);
    }
    console.log('form: ', obj)
    // Validate phone number
    const phoneNumber = obj['phone'].replace(/\D/g, '');
    if (phoneNumber.length !== 11) {
        return alert('Пожалуйста, введите корректный номер телефона.');
    }

    // Validate name
    const name = obj['name'];
    if (!/^[а-яА-ЯёЁa-zA-Z\s-]+$/.test(name)) {
        return alert('Пожалуйста, введите корректное имя (только буквы).');
    }

    // Form submission success
    window.location.href = '/thanks';
}

firstForm.addEventListener('submit', formHandle);
secondForm.addEventListener('submit', formHandle);
thirdForm.addEventListener('submit', formHandle);