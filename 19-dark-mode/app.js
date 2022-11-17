console.log('dark mode')
const toggleBtn = document.querySelector('.btn')
const articlesContainer = document.querySelector('.articles')

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme')
})

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article
    const formatDate = moment(date).format('MMMM Do, YYYY')
    return `
   <article class='post'>
    <h2 class='post-title'>${title}</h2>
    <div class='post-info'>
     <span class='date'>${formatDate}</span>
     <span class='read time'>${length} min read</span>
    </div>
    <p class='content'>${snippet}</p>
   </article>`
  })
  .join('')

articlesContainer.innerHTML = articlesData
