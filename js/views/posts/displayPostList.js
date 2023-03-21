import { getPosts } from "../../api/posts.js";

export default async function displayPostList(categoryId, container = "#postContainer") {
  const posts = await getPosts(categoryId);
  renderPosts(posts, container);
}

function renderPosts(posts, container) {
  try {
    const parentElement = document.querySelector(container);

    posts.forEach((post) => {
      const { title, excerpt, content } = post;
      parentElement.innerHTML += `<div class="post-container" id="postContainer">
                                       <div class="post-grid-container">

                                        <h2>${title.rendered}</h2>
                                        <div>${content.rendered}</div>
                                       </div>
                                       
                                   </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

console.log();
