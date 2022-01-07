let recipientInput = document.querySelector('#recipient');
let giftInput = document.querySelector('#name');
let linkInput = document.querySelector('#link');
let priceInput = document.querySelector('#price');
let submitButton = document.querySelector('button');
let currentID;

submitButton.addEventListener('click', postItem);
window.addEventListener('load', getItems)

function getItems() {
  return fetch('https://mysterious-mesa-00016.herokuapp.com/items')
    .then(response => response.json())
    .then(data => {
      currentID = data.length;
      console.log('get / update next ID');
    })
}

function resetForm() {
  recipientInput.value = '';
  giftInput.value = '';
  linkInput.value = '';
  priceInput.value = '';
  console.log('reset')
}

function postItem(e) {
  e.preventDefault();
  fetch('https://mysterious-mesa-00016.herokuapp.com/items', {
    method: "POST",
    body: JSON.stringify({
      id: currentID + 1,
      recipient: recipientInput.value,
      name: giftInput.value,
      link: linkInput.value,
      priceInDollars: parseInt(priceInput.value)
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(console.log('post'))
    .then(getItems())
    .then(resetForm())
    .catch(error => console.log(error))
}

// to delete:
// fetch('https://mysterious-mesa-00016.herokuapp.com/items/<id>', {method: "DELETE"})
