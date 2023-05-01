import { getPostDetails } from "../../api/posts.js";
import { getImageFromContent } from "./displayPostList.js";
import { createPost } from "./displayPostList.js";

// render HTML

export default async function displayPostDetail(container = "#postDetailContainer") {
  const parentElement = document.querySelector(container);

  const postId = getIdFromQueryString();
  let loader = document.querySelector(".lds-ripple");
  const post = await getPostDetails(postId);
  const titleTag = document.querySelector("#title-tag");

  if (post) {
    loader.style.display = "none";
  }
  // const blogPost = createPost(post);
  // parentElement.innerHTML(blogPost);
  const { title, content } = post;
  parentElement.innerHTML += `<div >
                                       <div class="post-details">
                                        <h2>${title.rendered}</h2>
                                        <div>${content.rendered}</div>
                                       </div>
                                   </div>
               `;

  titleTag.innerText = "PewPewLife | " + title.rendered;
  function setModalImage() {
    const modal = document.querySelector("#modal-container");
    const img = parentElement.querySelector("img");
    let modalImg = document.querySelector(".modal-content");

    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      console.log(img);
    });
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
      modal.appendChild(modalImg);
    };
    return;
  }
  setModalImage();
}

function getIdFromQueryString() {
  const url = new URL(window.location);
  const searchParams = url.searchParams;
  return searchParams.get("id");
}
