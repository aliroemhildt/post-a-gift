const recipientInput = document.querySelector('#recipient');
const giftInput = document.querySelector('#name');
const linkInput = document.querySelector('#link');
const priceInput = document.querySelector('#price');
const submitButton = document.querySelector('button');
let nextIndex;

submitButton.addEventListener('click', postItem);

function getItems() {
  fetch('https://mysterious-mesa-00016.herokuapp.com/items')
    .then(response => response.json())
    .then(data => {
      nextIndex = data.length;
    })
}

async function postItem() {
  const response = await getItems();
  fetch('https://mysterious-mesa-00016.herokuapp.com/items', {
    method: "POST",
    body: JSON.stringify({
      id: nextIndex,
      recipient: recipientInput.value,
      name: giftInput.value,
      link: linkInput.value,
      priceInDollars: parseInt(priceInput.value)
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .catch(error => console.log(error))
}

// to delete:
// fetch('https://mysterious-mesa-00016.herokuapp.com/items/<id>', {method: "DELETE"})
