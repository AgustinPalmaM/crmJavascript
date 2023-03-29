import { newCustomer } from "./API.js";
import { showAlert } from "./funciones.js";

(function() {
  const form = document.querySelector('#formulario');
  
  form.addEventListener( 'submit', validateFormData );

  function validateFormData(e) {
    e.preventDefault();

    const name = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#telefono').value;
    const company = document.querySelector('#empresa').value;

    const customer = {
      name,
      email,
      phone,
      company
    }

    if(validate(customer)) {
      showAlert('you must complete all fields');
      return;
    }

    newCustomer(customer);

  }

  function validate(object) {
    return !Object.values(object).every(input => input !== '');
  }

 
})();