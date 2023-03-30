import { getCustomer, updateCustomer } from "./API.js";
import { validate, showAlert } from "./funciones.js";

(function () {
  
  const nameInput = document.querySelector('#nombre');
  const emailInput = document.querySelector('#email');
  const phoneInput = document.querySelector('#telefono');
  const companyInput = document.querySelector('#empresa');
  const idInput = document.querySelector('#id');

  document.addEventListener('DOMContentLoaded', async () => {

    const paramsUrl = new URLSearchParams(window.location.search);
    const idParam = parseInt(paramsUrl.get('id'));

    const customer = await getCustomer(idParam);

    showCustomer(customer);
    
    const form = document.querySelector('#formulario');
    form.addEventListener('submit', validateCustomerData );
    

  })

  function showCustomer(customer) {
    const { name, email, phone, company, id } = customer;

    nameInput.value = name;
    emailInput.value = email;
    phoneInput.value = phone;
    companyInput.value = company;
    idInput.value = id;

  }

  function validateCustomerData(e) {
    
    e.preventDefault();

    const customer = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      company: companyInput.value,
      id: parseInt(idInput.value)
    }

    if(validate(customer)) {
      showAlert('you must complete all fields');
      return;
    }

    updateCustomer(customer);
  }

})();