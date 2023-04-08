import { hamburgerMenu } from "../js/constants/hamburger.js";
import displayPostList from "../js/views/posts/displayPostList.js";
import displayPostDetail from "./views/posts/displayPostDetail.js";

hamburgerMenu();

async function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/blog.html":
      displayPostList();

      return;

    case "/blog-specific.html":
      displayPostDetail();

      return;
  }
}

router();
