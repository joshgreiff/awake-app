const $addToppingBtn = document.querySelector('#add-topping');
const $loginForm = document.querySelector('#pizza-form');
const $customToppingsList = document.querySelector('#custom-toppings-list');


const handlePizzaSubmit = event => {
  event.preventDefault();

  const username = $loginForm.querySelector('#username').value;
  const password = $loginForm.querySelector('#password').value;
  const firstName = $loginForm.querySelector('#first-name').value;
  const lastName = $loginForm.querySelector('#last-name').value;

  // const size = $loginForm.querySelector('#pizza-size').value;
  // const toppings = [...$loginForm.querySelectorAll('[name=topping]:checked')].map(topping => {
  //   return topping.value;
  // });

  // if (!pizzaName || !createdBy || !toppings.length) {
  //   return;
  // }

  const formData = { username, password, firstName, lastName, 
  };

  fetch('/api/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(postResponse => {
      alert('Account created successfully!');
      console.log(postResponse);
    })
    .catch(err => {
      console.log(err);
    });
};

$loginForm.addEventListener('submit', handlePizzaSubmit);
