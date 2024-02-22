import { hamburgerMenu } from "../js/constants/hamburger.js";
import displayPostList from "../js/views/posts/displayPostList.js";
import displayPostDetail from "./views/posts/displayPostDetail.js";
import { populateCarousel } from "./views/posts/carousel.js";
import { setButton } from "./api/constants.js";
import { displayErrorMessage } from "./component/displayError.js";

hamburgerMenu();
displayErrorMessage();

async function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/blog.html":
      displayPostList();

      return;

    case "/blog-specific.html":
      displayPostDetail();

      return;

    case "/index.html":
    case "/":
      populateCarousel();
      setButton();

      return;
  }
}

router();
