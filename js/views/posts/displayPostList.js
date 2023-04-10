import { getPosts } from "../../api/posts.js";

export default async function displayPostList() {
  const posts = await getPosts();
  const container = document.querySelector("#postContainer");
  const morePosts = 10;
  const firstPosts = posts.slice(0, 10);
  renderPosts(firstPosts, "#postContainer");
  if (posts.length > morePosts) {
    const readMoreButton = document.createElement("button");
    readMoreButton.classList.add("read-more");
    readMoreButton.innerText = "Read More";
    readMoreButton.dispatchEvent.add = "div";
    readMoreButton.addEventListener("click", () => {
      const restOfThePosts = posts.slice(-2);
      restOfThePosts.forEach((post) => {
        const blogPost = createPost(post);
        container.appendChild(blogPost);
      });
      readMoreButton.style.display = "none";
      // console.log(restOfThePosts);
    });
    container.appendChild(readMoreButton);
  }
}

export function renderPosts(posts, selector) {
  // const parentElement = document.querySelector(container);
  // const mainSection = document.querySelector(".blog-main");
  // const firstPosts = posts.slice(0, 10);
  // console.log(posts);
  const container = document.querySelector(selector)
  posts.forEach((post) => {
    const blogPost = createPost(post);
    container.appendChild(blogPost);
  });
  
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
