import { displayErrorMessage } from "../component/displayError.js";
import { apiUrl, postListUrl } from "./constants.js";

const errorMessage = document.querySelector("#error");

export async function getPosts(categoryId) {
  // const url = `${postListUrl}${categoryId}&per_page=20`;
  // const response = await fetch(url);
  // const posts = await response.json();
  // console.log(url);
  // return posts;
  try {
    let url = apiUrl + "?";
    if (categoryId) {
      url = `${postListUrl}${categoryId}`;
    }
    url += "&per_page=20";
    const response = await fetch(url);
    const posts = await response.json();
    return posts;
  } catch (error) {
    errorMessage.innerHTML = displayErrorMessage("There was an error");
  }
}

export async function getPostDetails(postId) {
  try {
    const url = `${apiUrl}${postId}`;
    const response = await fetch(url);
    const postDetails = await response.json();
    return postDetails;
  } catch (error) {
    console.log(error);
    errorMessage.innerHTML = "!!!There was an error!!!";
  }
}

// function displayError(errorMessage, nav) {
//   const container = document.querySelector(nav);

//   container.innerHTML = `${errorMessage}`;
// }
