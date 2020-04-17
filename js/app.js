document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZipcode);

function validateName() {
  const name = document.getElementById('name');
  const regularExpression = /^[a-zA-Z]{2,10}$/;

  if (!regularExpression.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZipcode() {
  const zipcode = document.getElementById('zipcode');
  const regularExpression = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!regularExpression.test(zipcode.value)) {
    zipcode.classList.add('is-invalid');
  } else {
    zipcode.classList.remove('is-invalid');
  }
}
