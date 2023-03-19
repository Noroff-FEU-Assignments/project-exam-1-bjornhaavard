import { apiUrl } from "./constants.js";

export async function getPosts(categoryId) {
  const url = `${apiUrl}&${categoryId}`;
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}
