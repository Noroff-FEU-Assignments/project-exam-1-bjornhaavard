import { getPosts } from "../../api/posts.js";

export default async function displayPostList(categoryId, container = "#postContainer") {
  const posts = await getPosts(categoryId);
  renderPosts(posts, container);
}

export function renderPosts(posts, container) {
  // const parentElement = document.querySelector(container);
  // const mainSection = document.querySelector(".blog-main");
  // const firstPosts = posts.slice(0, 10);
  // console.log(posts);
  container = document.querySelector(".blog-main")
  posts.forEach((post) => {
    const blogPost = createPost(post);
    container.appendChild(blogPost);
  });
  
}

export async function createList () {
   const posts = await getPosts()
   container = document.querySelector("#postContainer")
   const morePosts = 10
   const firstPosts = posts.slice(0, 10);
   renderPosts(firstPosts, container)
    if (posts.length > morePosts){
    const readMoreButton = document.createElement("button");
    readMoreButton.classList.add("read-more");
    readMoreButton.innerText = "Read More";
    readMoreButton.dispatchEvent.add = "div";
    readMoreButton.addEventListener("click", () => {
      
      const restOfThePosts = posts.slice(-2);
      restOfThePosts.forEach((post) => {
        const blogPost = createPost(post);
        parentElement.appendChild(blogPost);
      });
      readMoreButton.style.display = "none";
      // console.log(restOfThePosts);
    });
    container.appendChild(readMoreButton);
  }
} 
  
  


function createPost(post) {
  const { id, title, content } = post;
  const div = document.createElement("a");
  const heading = document.createElement("h2");
  const img = getImageFromContent(content.rendered);
  const imageContainer = document.createElement("div");
  div.classList.add("post-card");
  heading.innerText = title.rendered;
  imageContainer.classList.add("image-container");
  imageContainer.style.backgroundImage = `url(${img})`;
  div.setAttribute("href", `/blog-specific.html?id=${id}`);
  div.append(heading, imageContainer);
  // console.log(post)
  return div;
}

function getImageFromContent(html) {
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(html, "text/html");
  const img = parsedDocument.querySelector("img");
  return img.src;
}
