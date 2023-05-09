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
  const metaDescription = document.querySelector(`meta[name="description"]`);

  if (post) {
    loader.style.display = "none";
  }
  // const blogPost = createPost(post);
  // parentElement.innerHTML(blogPost);
  const { title, content } = post;
  parentElement.innerHTML += `     
  
       <div>
             <ul class="breadcrumbs">
               <li class="breadcrumbs-item">
               <a href="index.html" class="breadcrumbs-link">Home</a>
               </li>
               <li class="breadcrumbs-item">
               <a href="blog.html" class="breadcrumbs-link">Archive</a>
               </li>
               <li class="breadcrumbs-item">
               <a href="blog-specific.html" class="breadcrumbs-link breadcrumbs-link-active">${title.rendered}</a>
              </li>
             </ul>
       </div>
                                     <div>
                                       <div class="post-details">
                                        <h2>${title.rendered}</h2>
                                        <div>${content.rendered}</div>
                                       </div>
                                   </div>
               `;

  titleTag.innerText = "PewPewLife | " + title.rendered;

  // Get the title of the blog post and change the content of the meta tag with the title of the post

  if (metaDescription) {
    metaDescription.setAttribute("content", "Blog post: " + title.rendered);
  }

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
