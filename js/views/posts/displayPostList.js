import { getPosts } from "../../api/posts.js";


export default async function displayPostList() {
  
  let loader = document.querySelector(".lds-ripple")
  const posts = await getPosts();
  const container = document.querySelector("#postContainer");
  const morePosts = 10;
  const firstPosts = posts.slice(0, 10);
  renderPosts(firstPosts, "#postContainer");
  if(posts) {
    loader.style.display = "none"
  }
  if (posts.length > morePosts) {
    const readMoreButton = document.createElement("button");
    readMoreButton.classList.add("read-more");
    readMoreButton.innerText = "Read More";
    readMoreButton.dispatchEvent.add = "div";
    readMoreButton.addEventListener("click", () => {
      const restOfThePosts = posts.slice(-2);
      restOfThePosts.forEach((post) => {
        const blogPost = createPost(post);
        container.appendChild(blogPost);
      });
 
      readMoreButton.style.display = "none";
    });
    container.appendChild(readMoreButton);
  }

}


export function renderPosts(posts, selector) {
  const container = document.querySelector(selector)
  posts.forEach((post) => {
    const blogPost = createPost(post);
    container.appendChild(blogPost);
  });
}


export function createPost(post) {

  const { id, title, content } = post;
  const div = document.createElement("a");
  const heading = document.createElement("h2");
  const img = getImageFromContent(content.rendered);
  const imageContainer = document.createElement("div");
  div.classList.add("post-card");
  heading.innerText = title.rendered;
  imageContainer.classList.add("image-container");
  imageContainer.style.backgroundImage = `url(${img})`;
  div.setAttribute("href", `/blog-specific.html?id=${id}`);
  div.append(heading, imageContainer);
  return div;
}

export function getImageFromContent(html) {
  
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(html, "text/html");
  const img = parsedDocument.querySelector("img");
  return img.src;
}


const huntButton = document.querySelector("#hunt")
const trainButton = document.querySelector("#train")
const matchButton = document.querySelector("#match")

// const handleClick = (event) => {
//   const button = event.target.dataset.id


// };
// filterButtons.forEach(button => {
//   button.addEventListener("click", handleClick)
// });

// buttons.forEach.addEventListener("click", (event)  => {
//     const { id } = event.target.dataset

//     newPosts = { id }

//   console.log("test")
// });

// huntButton.addEventListener("click", (event)  => {
//   renderPosts()
//   const id = event.target.dataset.id
//   const newBlogPost = blogPost
//   const url = `newBlogPost${newBlogPost}`;
//   blogPost.appendChild(url)
//   console.log(id)
// });

// trainButton.addEventListener("click", ()  => {
  
//   console.log("train button")
// });

// matchButton.addEventListener("click", ()  => {
  
//   console.log("match button")
// });


