import { getPostDetails } from "../../api/posts";

// render HTML

export default async function displayPostDetail(container = "#postDetailContainer") {
  const parentElement = document.querySelector(container);

  const postId = getIdFromQueryString();

  const post = await getPostDetails(postId);

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
}

function getIdFromQueryString() {
  const url = new URL(window.location);
  const searchParams = url.searchParams;
  return searchParams.get("id");
}
