const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to keep the state

let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) {
    return;
  }

  console.log(name);
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  items.push(item);
  console.log(`there are now ${items.length} in your state`);
  e.target.reset();
  // fire off a custom event that will tell anyone else who cares that the items have been updated
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      item => `<li class="shopping-item">
    <input value="${item.id}" type="checkbox" ${item.complete ? 'checked' : ''}>
    <span class="itemName">${item.name}</span>
    <button 
    aria-label="Remove ${item.name}"
    id="${item.id}">&times</button>
    </li>`
    )
    .join('');
  list.innerHTML = html;
  console.log(html);
}

function mirrorToLocalStorage() {
  console.info('saving items to localstorage');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('restoring from localstorage');
  const listItems = JSON.parse(localStorage.getItem('items'));
  if (listItems.length) {
    items.push(...listItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  console.log('deleting item', id);
  items = items.filter(item => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
  console.log(items);
}

function markAsComplete(id) {
  console.log('Marking as complete', id);
  const itemRef = items.find(item => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

// event delegation means we listen for the click in the parent of a non yet created element, but actually get the element if it was created.
list.addEventListener('click', function(e) {
  console.log(e.target, e.currentTarget);
  if (e.target.matches('button')) {
    deleteItem(parseInt(e.target.id));
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(parseInt(e.target.value));
  }
});

restoreFromLocalStorage();
