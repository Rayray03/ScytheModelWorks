import React from "react";

const navbar = () => {
  return (
    <div>
      <header class="p-2 navbar navbar-top navbar-expand-lg navbar-dark navbar-fixed">
        <div class="container">
          <a class="navbar-brand order-1" href="/">
            <img
              src="/images/Icon.png"
              alt=""
              height="80"
              class="d-inline-block align-text-top"
            />
          </a>

          <ul class="nav navbar-nav order-2">
            <li class="nav-item ">
              <a href="/about" class="about nav-link">
                <span class="nav-link-name">ABOUT</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/customworks" class="customworks nav-link">
                <span class="nav-link-name">CUSTOM WORKS</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/videos" class="videos nav-link">
                <span class="nav-link-name">VIDEOS</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/socialmedia" class="socialmedia nav-link">
                <span class="nav-link-name">SOCIAL MEDIA</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/partners" class="partners nav-link">
                <span class="nav-link-name">PARTNERS </span>
              </a>
            </li>

            <a class="btn btn-danger btn-small" href="/contactme" role="button">
              CONTACT ME
            </a>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default navbar;
