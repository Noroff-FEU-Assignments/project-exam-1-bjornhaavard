import { getPosts } from "../../api/posts.js";

export default async function displayPostList(categoryId, container = "#postContainer") {
  const posts = await getPosts(categoryId);
  renderPosts(posts, container);
}

function renderPosts(posts, container) {
  try {
    const parentElement = document.querySelector(container);

    posts.forEach((post) => {
      parentElement.innerHTML += `<div id="postContainer">
                                       <div>${post.title}</div>
                                   </div>`;
      console.log(getPosts);
    });
  } catch (error) {
    console.log(error);
  }
}

console.log("hello");
