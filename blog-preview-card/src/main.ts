import './style.css'
import blogImg from '/illustration-article.svg'
import avatarImg from '/image-avatar.webp'

const content = {
  title : "HTML & CSS foundations",
  description : "These languages are the backbone of every website, defining structure, content, and presentation.",
  publishedAt : "Published 21 Dec 2023",
  category : "Learning",
  author : "Greg Hooper"
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="card card-shadow">

   <img src="${blogImg}" alt="banner" class="card-header" >
   
   <div class="card-content">
   <div class="content-tag text-sm text">${content.category}</div>
   <p class="text-sm text">${content.publishedAt}</p>
    <h2 class="text-xl text">${content.title}</h2>
    <p class="text-base text">${content.description}</p>
   </div>
    <div class="card-footer">
      <img src="${avatarImg}" alt="avatar" class="avatar">
      <p class="author text">${content.author}</p>
    </div>
  </div>
`

