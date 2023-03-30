import { getCustomer } from "./API.js";

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
    

    

  })

  function showCustomer(customer) {
    const { name, email, phone, company, id } = customer;

    nameInput.value = name;
    emailInput.value = email;
    phoneInput.value = phone;
    companyInput.value = company;
    idInput.value = id;

  }

})();