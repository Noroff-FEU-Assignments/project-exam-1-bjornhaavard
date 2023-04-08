import { getPosts } from "../../api/posts.js";

export default async function displayPostList(categoryId, container = "#postContainer") {
  const posts = await getPosts(categoryId);
  renderPosts(posts, container);
}

function renderPosts(posts, container) {
  const parentElement = document.querySelector(container);
  const firstPosts = posts.slice(0, 10);
  console.log(posts);
  firstPosts.forEach((post) => {
    const blogPost = createPost(post);
    parentElement.appendChild(blogPost);
  });

  let index = 10;

  const readMoreButton = document.createElement("button");
  readMoreButton.classList.add("read-more");
  readMoreButton.innerText = "Read More";
  readMoreButton.addEventListener("click", () => {
    const restOfThePosts = posts.slice(index, index + 2);
    // restOfThePosts.forEach((post) => {
    //   const blogPost = createPost(post);
    //   parentElement.appendChild(blogPost);
    renderPosts(restOfThePosts, container);
    index += 2;
    if (index >= posts.length) {
      readMoreButton.style.display = "none";
    }
  });
  if (posts.length > 9) {
    const parentElement = document.querySelector(container);
    parentElement.appendChild(readMoreButton);
  }
}

// console.log(firstPosts);

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
  return div;
}

function getImageFromContent(html) {
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(html, "text/html");
  const img = parsedDocument.querySelector("img");
  return img.src;
}
