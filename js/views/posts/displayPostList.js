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

// export default async function displayPostList(categoryId, container = "#postContainer") {
//   const posts = await getPosts(categoryId);
//   const parentElement = document.querySelector(container);
//   const initialPosts = posts.slice(0, 6); // get the first 6 posts

//   initialPosts.forEach((post) => {
//     const blogPost = createPost(post);
//     parentElement.appendChild(blogPost);
//   });

//   if (posts.length > 6) {
//     // add a "Read More" button if there are more than 6 posts
//     const readMoreButton = document.createElement("button");
//     readMoreButton.innerText = "Read More";
//     readMoreButton.addEventListener("click", () => {
//       const remainingPosts = posts.slice(6); // get the remaining posts
//       remainingPosts.forEach((post) => {
//         const blogPost = createPost(post);
//         parentElement.appendChild(blogPost);
//       });
//       readMoreButton.style.display = "none"; // hide the "Read More" button
//     });
//     parentElement.appendChild(readMoreButton);
//   }
// }

function createPost(post) {
  const { title, content } = post;
  const div = document.createElement("a");
  const heading = document.createElement("h2");
  const img = getImageFromContent(content.rendered);
  const imageContainer = document.createElement("div");
  div.classList.add("post-card");
  heading.innerText = title.rendered;
  imageContainer.classList.add("image-container");
  imageContainer.style.backgroundImage = `url(${img})`;
  div.setAttribute("href", "/blog-specific.html");
  div.append(heading, imageContainer);
  return div;
}

function getImageFromContent(html) {
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(html, "text/html");
  const img = parsedDocument.querySelector("img");
  return img.src;
}
