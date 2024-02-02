const form = document.querySelector('form.ui-upload');
form.addEventListener('submit', submitForm);

async function submitForm(event) {
  event.preventDefault();

  // Get the file input element for identification doc
  const fileInput = document.getElementById('file-uploader-doc-id');
  // Create a new FormData object to send the file
  const formData = new FormData();
  formData.append('image', fileInput.files[0], fileInput.files[0].name);
  // Send the file to the files endpoint and get the response
  const filesResponse = await fetch('https://content.jusaninvest.kz/files', {
    method: 'POST',
    body: formData
  });
  // Parse the response as JSON
  const filesData = await filesResponse.json();


  console.log(typeof document.querySelector('select[name="form[beneficiary_bank]"]').value)

  const data = {
    "fullName": document.querySelector('input[name="form[name]"]').value,
    "iin": document.querySelector('input[name="form[iin]"]').value,
    "iban": document.querySelector('input[name="form[beneficiarys_account]"]').value,
    "bank": document.querySelector('select[name="form[beneficiary_bank]"]').value === 'other' ? document.querySelector('input[name="form[ben_bank]"]').value : document.querySelector('select[name="form[beneficiary_bank]"]').value,
    "correspondentBank": document.querySelector('input[name="form[correspondent_bank]"]').value,
    "correspondentAccaunt": document.querySelector('input[name="form[correspondent_account]"]').value,
    "identificationDocId": filesData.id,
    "rubleAccauntDocId": ''
  };



  console.log(typeof document.querySelector('select[name="form[beneficiary_bank]"]').value)


  // Get the file input element for ruble account doc
  const fileInputReq = document.getElementById('file-uploader-rub-account');
  // Create a new FormData object to send the file
  const formDataReq = new FormData();
  if (fileInputReq.files.length > 0) {
    formDataReq.append('image', fileInputReq.files[0], fileInputReq.files[0].name);
  
    // Send the file to the files endpoint and get the response
    const filesResponseReq = await fetch('https://content.jusaninvest.kz/files', {
      method: 'POST',
      body: formDataReq
    });
    // Parse the response as JSON
    const filesDataReq = await filesResponseReq.json();
  
    // Set the ruble account document ID
    data.rubleAccauntDocId = filesDataReq.id;
  } else {
    // Set the ruble account document ID to an empty string
    data.rubleAccauntDocId = '';
  }


  // Make a POST request with the combined data
  const response = await fetch('https://content.jusaninvest.kz/rus-dividends', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    if (response.ok) {
      // Если ответ сервера успешный, показываем сообщение об успешной отправке
      const successMessage = document.querySelector('.success-message');
      successMessage.style.display = 'block';
    } else {
      // Если ответ сервера неуспешный, показываем сообщение об ошибке
      const errorMessage = document.querySelector('.error-message');
      errorMessage.style.display = 'block';
    }
    form.reset();
  });

  // Parse the response as JSON
  const responseData = await response.json();

  // Log the response data
  
}
