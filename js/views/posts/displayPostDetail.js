import { getPostDetails } from "../../api/posts";

// render HTML

export default async function displayPostDetail(container = "#postDetailContainer") {
  const postButton = document.querySelectorAll("#readPost");

  const parentElement = document.querySelector(container);

  const postId = getIdFromQueryString();

  const post = await getPostDetails(postId);
  console.log(postId);
  post.forEach((post) => {
    const blogPost = createPost(post);
    parentElement.appendChild(blogPost);
    const { title, excerpt, content } = post;
    parentElement.innerHTML += `<div class="post-container" id="postContainer">
                                       <div class="post-grid-container">

                                        <h2>${title.rendered}</h2>
                                        <div>${content.rendered}</div>
                                       </div>

                                   </div>`;
  });
  handlePostButtons();
}

function getIdFromQueryString() {
  const url = new URL(window.location);
  const searchParams = url.searchParams;
  return searchParams.get("id");
}

displayPostDetail();

function handlePostButtons() {
  const buttons = document.querySelectorAll("#readPost");

  buttons.forEach(function (button) {
    button.addEventListener("click", displayPostDetail);
    console.log(button);
  });
}
