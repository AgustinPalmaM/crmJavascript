const url = 'http://localhost:3000/clientes';

// create a new customer then get all customers
export const newCustomer = async customer => {
  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(customer),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    window.location.href = 'index.html';
  } catch (error) {
    console.log(error);
  }
}

// get all customers
export const getCustomers = async () => {
  try {
    const response = await fetch(url);
    const customers = await response.json();
    return customers;
  } catch (error) {
    console.log(error);
  }
}