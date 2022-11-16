# Vanilla JS Projects

#### Enroll In The Course

[My Javascript Course](https://www.udemy.com/course/javascript-tutorial-for-beginners-w/?referralCode=DD9FA6C0D976918D3E1C)

#### Support

Find the Content Useful? [You can always buy me a coffee](https://www.buymeacoffee.com/johnsmilga)

## You can see all projects in action here

[Projects](https://www.vanillajavascriptprojects.com/)

1. Color Flipper
2. Counter
3. Reviews
4. Navbar
5. Sidebar
6. Modal
7. Questions
8. Menu
9. Video
10. Scroll
11. Tabs
12. Countdown Timer
13. Lorem Ipsum
14. Grocery Bud
15. Slider

#### Course Exclusive

16. Counters (OOP)
17. Gallery (OOP)
18. Numbers
19. Dark Mode
20. Filters
21. Dad Jokes
22. Products
23. Random User
24. Cocktails
25. Slider
26. Stripe Submenus
27. Pagination
28. Wikipedia
29. Comfy Sloth

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
// **\*\*** event listeners \***\*\*\*\*\***

// submit form
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);

// **\*\*** functions \***\*\*\*\*\***

// add item
function addItem(e) {
e.preventDefault();
const value = grocery.value;
const id = new Date().getTime().toString();

if (value !== "" && !editFlag) {
const element = document.createElement("article");
let attr = document.createAttribute("data-id");
attr.value = id;
element.setAttributeNode(attr);
element.classList.add("grocery-item");
element.innerHTML = `<p class="title">${value}</p> <div class="btn-container"> <!-- edit btn --> <button type="button" class="edit-btn"> <i class="fas fa-edit"></i> </button> <!-- delete btn --> <button type="button" class="delete-btn"> <i class="fas fa-trash"></i> </button> </div> `;
// add event listeners to both buttons;
const deleteBtn = element.querySelector(".delete-btn");
deleteBtn.addEventListener("click", deleteItem);
const editBtn = element.querySelector(".edit-btn");
editBtn.addEventListener("click", editItem);

    // append child
    list.appendChild(element);
    // display alert
    displayAlert("item added to the list", "success");
    // show container
    container.classList.add("show-container");
    // set local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();

} else if (value !== "" && editFlag) {
editElement.innerHTML = value;
displayAlert("value changed", "success");

    // edit  local storage
    editLocalStorage(editID, value);
    setBackToDefault();

} else {
displayAlert("please enter value", "danger");
}
}
// display alert
function displayAlert(text, action) {
alert.textContent = text;
alert.classList.add(`alert-${action}`);
// remove alert
setTimeout(function () {
alert.textContent = "";
alert.classList.remove(`alert-${action}`);
}, 1000);
}

// clear items
function clearItems() {
const items = document.querySelectorAll(".grocery-item");
if (items.length > 0) {
items.forEach(function (item) {
list.removeChild(item);
});
}
container.classList.remove("show-container");
displayAlert("empty list", "danger");
setBackToDefault();
localStorage.removeItem("list");
}

// delete item

function deleteItem(e) {
const element = e.currentTarget.parentElement.parentElement;
const id = element.dataset.id;

list.removeChild(element);

if (list.children.length === 0) {
container.classList.remove("show-container");
}
displayAlert("item removed", "danger");

setBackToDefault();
// remove from local storage
removeFromLocalStorage(id);
}

// edit item
function editItem(e) {
const element = e.currentTarget.parentElement.parentElement;
// set edit item
editElement = e.currentTarget.parentElement.previousElementSibling;
// set form value
grocery.value = editElement.innerHTML;
editFlag = true;
editID = element.dataset.id;
//
submitBtn.textContent = "edit";
}
// set backt to defaults
function setBackToDefault() {
grocery.value = "";
editFlag = false;
editID = "";
submitBtn.textContent = "submit";
}

// **\*\*** local storage \***\*\*\*\*\***

// add to local storage
function addToLocalStorage(id, value) {
const grocery = { id, value };
let items = getLocalStorage();
items.push(grocery);
localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
return localStorage.getItem("list")
? JSON.parse(localStorage.getItem("list"))
: [];
}

function removeFromLocalStorage(id) {
let items = getLocalStorage();

items = items.filter(function (item) {
if (item.id !== id) {
return item;
}
});

localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
let items = getLocalStorage();

items = items.map(function (item) {
if (item.id === id) {
item.value = value;
}
return item;
});
localStorage.setItem("list", JSON.stringify(items));
}

// SETUP LOCALSTORAGE.REMOVEITEM('LIST');

// **\*\*** setup items \***\*\*\*\*\***

function setupItems() {
let items = getLocalStorage();

if (items.length > 0) {
items.forEach(function (item) {
createListItem(item.id, item.value);
});
container.classList.add("show-container");
}
}

function createListItem(id, value) {
const element = document.createElement("article");
let attr = document.createAttribute("data-id");
attr.value = id;
element.setAttributeNode(attr);
element.classList.add("grocery-item");
element.innerHTML = `<p class="title">${value}</p> <div class="btn-container"> <!-- edit btn --> <button type="button" class="edit-btn"> <i class="fas fa-edit"></i> </button> <!-- delete btn --> <button type="button" class="delete-btn"> <i class="fas fa-trash"></i> </button> </div> `;
// add event listeners to both buttons;
const deleteBtn = element.querySelector(".delete-btn");
deleteBtn.addEventListener("click", deleteItem);
const editBtn = element.querySelector(".edit-btn");
editBtn.addEventListener("click", editItem);

// append child
list.appendChild(element);
