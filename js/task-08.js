const formRef = document.querySelector('form.login-form')
formRef.addEventListener('submit', (event) => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  if (formElements.email.value && formElements.password.value) {
    console.log({ email, password })
      } else {
      alert('Please complete all fields')
    }
});