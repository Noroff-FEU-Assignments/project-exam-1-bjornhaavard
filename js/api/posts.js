import { apiUrl, postListUrl } from "./constants.js";

export async function getPosts(categoryId) {
  const url = `${postListUrl}${categoryId}`;
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}
