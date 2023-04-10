import { getPosts } from "../../api/posts.js";
import { renderPosts } from "./displayPostList.js";

const carouselWrapper = document.querySelector(".carousel-wrapper");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let posts = [];



export async function populateCarousel () {
    posts = await getPosts();
    renderPosts(posts, ".carousel-wrapper");
    // posts.forEach(post => {
        
        // const slide = document.createElement("div");
        // slide.classList.add("carousel-slide");
        // slide.innerHTML = `
        // <h2>${post.title.rendered}</h2>
        // <p>${post.content.rendered}</p>`;
        // carouselWrapper.appendChild(slide)
    // });
    prevButton.addEventListener("click", () => {
        carouselWrapper.scrollBy({
            left: -carouselWrapper.offsetWidth,
            behavior: "smooth"
        });
        
    });
    
    nextButton.addEventListener("click", () => {
        carouselWrapper.scrollBy({
            left: carouselWrapper.offsetWidth,
            behavior: "smooth"
        });
     
    });
}



