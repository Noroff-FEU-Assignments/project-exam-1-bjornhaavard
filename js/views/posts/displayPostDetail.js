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
                                   <form id="contactForm" method="get">
          <div>
            <label>
              Full name (min. 6 characters)
              <input fullName="full name" id="fullName" />
            </label>
            <div class="form-error" id="fullNameError">Please enter your full name (minimum 6 characters)</div>
          </div>
          <div>
            <label>
              Email
              <input name="email" id="email" />
            </label>
            <div class="form-error" id="emailError">Please enter a valid email address</div>
          </div>
          <div>Your message (min. 25 characters)</div>
          <div>
            <textarea aria-label="text area" name="text" id="textArea" cols="24" rows="10"></textarea>
            <div class="form-error" id="textError">message must be over 25 characters</div>
          </div>
          <div class="messageContainer" id="messageSent"></div>
          <button id="submit">Submit</button>
        </form>`;

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
