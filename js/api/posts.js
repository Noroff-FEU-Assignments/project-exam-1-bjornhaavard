import { apiUrl, postListUrl } from "./constants.js";

export async function getPosts(categoryId) {
  const url = `${postListUrl}${categoryId}&per_page=20`;
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}

export async function getPostDetails(postId) {
  try {
    const url = `${apiUrl}${postId}`;
    const response = await fetch(url);
    const postDetails = await response.json();
    return postDetails;
  } catch (error) {
    console.log(error);
  }
}
