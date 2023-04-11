import { getPostDetails } from "../../api/posts.js";
// import { getImageFromContent } from "./displayPostList.js";
import { createPost } from "./displayPostList.js";

// render HTML

export default async function displayPostDetail(container = "#postDetailContainer") {
  const parentElement = document.querySelector(container);

  const postId = getIdFromQueryString();

  const post = await getPostDetails(postId);
  
  
    // const blogPost = createPost(post);
    // parentElement.innerHTML(blogPost);
    const { title, content } = post;
    parentElement.innerHTML += `<div >
                                       <div class="post-details">

                                        <h2>${title.rendered}</h2>
                                        <div>${content.rendered}</div>
                                       </div>

                                   </div>`;
                                   
  console.log(content.rendered)
}


function getIdFromQueryString() {
  const url = new URL(window.location);
  const searchParams = url.searchParams;
  return searchParams.get("id");
}

export function setModalImage( ) {
  const img = document.querySelector("img.src");
  // getImageFromContent()

  console.log(img)
  return;
  }
