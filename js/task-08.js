const formRef = document.querySelector('form.login-form')
formRef.addEventListener('submit', (event) => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  if (formElements.email.value === '' || formElements.password.value  === '') {
    alert('Please complete all fields')
    }
    else {
    console.log(formElements.email.value, formElements.password.value)
  }
    formRef.reset();
});
  