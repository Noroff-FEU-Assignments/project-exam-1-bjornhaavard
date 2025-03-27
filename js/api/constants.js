export const apiUrl = "https://bjornhaavard.no/blog-api/wp-json/wp/v2/posts/";

export const postListUrl = `${apiUrl}?categories=`;

console.log(postListUrl + "training");

export function setButton() {
  const frontButton = document.querySelector("#frontpage-button");

  frontButton.addEventListener("click", () => {
    location.href = "/about.html";
  });
}
