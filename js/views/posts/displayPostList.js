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

console.log("testing switch case");

console.log();

function createPost(post) {
  const { title, content } = post;
  const div = document.createElement("div");
  const aTag = document.createElement("a");
  // aTag.document.location.href = "/blog-specific.html"
  div.classList.add("post-card");
  const heading = document.createElement("h2");
  heading.innerText = title.rendered;
  div.append(heading);
  div.append(aTag)
  const img = getImageFromContent(content.rendered);
  div.append(img);
  return div;
}

function getImageFromContent(html) {
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(html, "text/html");
  const img = parsedDocument.querySelector("img");
  return img;
}
