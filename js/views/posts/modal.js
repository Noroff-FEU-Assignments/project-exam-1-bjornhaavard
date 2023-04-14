import displayPostDetail from "./displayPostDetail";




export function  setModalImage() {
    displayPostDetail()
    const modal = document.querySelector("#modal-container")
    const img = parentElement.querySelector("img")
    let modalImg = document.querySelector(".modal-content")
    
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      console.log(img);
    });
   
    modal.appendChild(modalImg)
    
    span.addEventListener ("click", () => {
        modal.style.display = "none"
    });
    return;
}