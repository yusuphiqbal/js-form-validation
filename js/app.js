document.getElementById('name').addEventListener('blur', validateName);

function validateName() {
  const name = document.getElementById('name');
  const regularExpression = /^[a-zA-Z]{2,10}$/;

  if (!regularExpression.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}
