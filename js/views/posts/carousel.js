import { getPosts } from "../../api/posts.js";
import { renderPosts } from "./displayPostList.js";

const carouselWrapper = document.querySelector(".carousel-wrapper");
const prevButton = document.querySelector(".carousel-prev");

const nextButton = document.querySelector(".carousel-next");


let posts = [];



export async function populateCarousel () {
    prevButton.innerText = "<<<"
    nextButton.innerText = ">>>"
    posts = await getPosts();
    renderPosts(posts, ".carousel-wrapper");
    
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



