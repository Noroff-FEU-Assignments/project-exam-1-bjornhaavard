import { getPosts } from "../../api/posts.js";

export default async function displayPostList(categoryId, container = "#postContainer") {
  const posts = await getPosts(categoryId);
  renderPosts(posts, container);
}

function renderPosts(posts, container) {
  try {
    const parentElement = document.querySelector(container);

    posts.forEach((post) => {
      const blogPost = createPost(post);
      parentElement.appendChild(blogPost);
      //   const { title, excerpt, content } = post;
      //   parentElement.innerHTML += `<div class="post-container" id="postContainer">
      //                                    <div class="post-grid-container">

      //                                     <h2>${title.rendered}</h2>
      //                                     <div>${content.rendered}</div>
      //                                    </div>

      //                                </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

function createPost(post) {
  const { title, content } = post;
  const div = document.createElement("div");
  const postButton = document.createElement("button");
  const heading = document.createElement("h2");
  const img = getImageFromContent(content.rendered);
  const imageContainer = document.createElement("div")
  div.classList.add("post-card");
  postButton.id = "readPost";
  postButton.innerText = "Read";
  heading.innerText = title.rendered;
  imageContainer.classList.add("image-container")
  imageContainer.style.backgroundImage = `url(${img})`
  div.append(heading, imageContainer, postButton);
  return div;
}

function getImageFromContent(html) {
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(html, "text/html");
  const img = parsedDocument.querySelector("img");
  return img.src;
}
