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

import data from './data.js'
const container = document.querySelector('.slide-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

// if length is 1 hide buttons
if (data.length === 1) {
nextBtn.style.display = 'none'
prevBtn.style.display = 'none'
}

// if length is 2, add copies of slides
let people = [...data]
if (data.length === 2) {
people = [...data, ...data]
}
container.innerHTML = people
.map((person, slideIndex) => {
const { img, name, job, text } = person
let position = 'next'
if (slideIndex === 0) {
position = 'active'
}
if (slideIndex === people.length - 1) {
position = 'last'
}
if (data.length <= 1) {
position = 'active'
}
return `<article class="slide ${position}">
<img src=${img} class="img" alt="${name}"/>

  <h4>${name}</h4>
  <p class="title">${job}</p>
  <p class="text">
   ${text}
  </p>
<div class="quote-icon">
<i class="fas fa-quote-right"></i>
</div>
 </article>`
  })
  .join('')

const startSlider = (type) => {
// get all three slides active,last next
const active = document.querySelector('.active')
const last = document.querySelector('.last')
let next = active.nextElementSibling
if (!next) {
next = container.firstElementChild
}
active.classList.remove('active')
last.classList.remove('last')
next.classList.remove('next')

if (type === 'prev') {
active.classList.add('next')
last.classList.add('active')
next = last.previousElementSibling
if (!next) {
next = container.lastElementChild
}
next.classList.remove('next')
next.classList.add('last')
return
}
active.classList.add('last')
last.classList.add('next')
next.classList.add('active')
}
nextBtn.addEventListener('click', () => {
startSlider()
})
prevBtn.addEventListener('click', () => {
startSlider('prev')
})

const people = [
{
img:
"https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959121/person-1_aufeoq.jpg",
name: "peter doe",
job: "product manager",
text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
},
{
img:
"https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-2_ipcjws.jpg",
name: "susan doe",
job: "developer",
text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
},
{
img:
"https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
name: "emma doe",
job: "designer",
text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
},
];

export default people;
