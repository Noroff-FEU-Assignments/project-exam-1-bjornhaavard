import { getPosts } from "../../api/posts.js";
import { postListUrl } from "../../api/constants.js";

let posts = [];

export default async function displayPostList() {
  let loader = document.querySelector(".lds-ripple");
  posts = await getPosts();
  const container = document.querySelector("#postContainer");
  const morePosts = 10;
  const firstPosts = posts.slice(0, 10);
  renderPosts(firstPosts, "#postContainer");
  if (posts) {
    loader.style.display = "none";
  }
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
    });
    container.appendChild(readMoreButton);
  }
}

export function renderPosts(posts, selector) {
  const container = document.querySelector(selector);
  container.innerHTML = "";
  posts.forEach((post) => {
    const blogPost = createPost(post);
    container.appendChild(blogPost);
    console.log(posts);
  });
}

export function createPost(post) {
  const { id, title, content } = post;
  const div = document.createElement("a");
  const heading = document.createElement("h3");
  const img = getImageFromContent(content.rendered);
  const imageContainer = document.createElement("div");
  const paragraph = document.createElement("p");
  div.classList.add("post-card");
  paragraph.innerText = heading.innerText = title.rendered;
  imageContainer.classList.add("image-container");
  imageContainer.style.backgroundImage = `url(${img})`;
  div.setAttribute("href", `/blog-specific.html?id=${id}`);
  div.append(heading, imageContainer);
  console.log(post);
  return div;
}

export function getImageFromContent(html) {
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(html, "text/html");
  const img = parsedDocument.querySelector("img");
  return img.src;
}

const categoryButtons = document.querySelectorAll(".cat-button");

categoryButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    // button.classList.remove("cat-button");
    button.classList.toggle("active-button");
    if (button === true) {
      button.classList.remove("active-button");
    }
    // button.classList.toggle("active-button");

    console.log(button);
    const categoryId = button.dataset.id;
    const posts = await getPosts(categoryId);
    renderPosts(posts, "#postContainer");
  });
});
