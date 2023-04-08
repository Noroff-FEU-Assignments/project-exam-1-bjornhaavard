import { getPostDetails } from "../../api/posts.js";

// render HTML

export default async function displayPostDetail(container = "#postDetailContainer") {
  const parentElement = document.querySelector(container);

  const postId = getIdFromQueryString();

  const post = await getPostDetails(postId);
  console.log(postId);
  
    // const blogPost = createPost(post);
    // parentElement.innerHTML(blogPost);
    const { title, excerpt, content } = post;
    parentElement.innerHTML += `<div >
                                       <div class="post-details">

                                        <h2>${title.rendered}</h2>
                                        <div>${content.rendered}</div>
                                       </div>

                                   </div>`;
  
}

function getIdFromQueryString() {
  const url = new URL(window.location);
  const searchParams = url.searchParams;
  return searchParams.get("id");
}

// function handlePostButtons() {
//   const buttons = document.querySelectorAll("#readPost");

//   buttons.forEach(function (button) {
//     button.addEventListener("click", displayPostDetail);
//     console.log(button);
//   });
// }
