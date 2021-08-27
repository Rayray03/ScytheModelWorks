import React from "react";

const footer = () => {
  return (
    <div>
      <footer class="p-1 ">
        <ul class="nav justify-content-center">
          <li>
            <a href="https://www.youtube.com/scythemodelworks">
              <img src="/images/footer/Youtube.svg" />
            </a>
            &nbsp;&nbsp;
          </li>
          <li>
            <a href="https://www.instagram.com/ray3656">
              <img src="/images/footer/Instagram.svg" />
            </a>
            &nbsp;&nbsp;
          </li>
          <li>
            <a href="https://www.facebook.com/scythemodelworks">
              <img src="/images/footer/Facebook.svg" />
            </a>
            &nbsp;&nbsp;
          </li>
          <li>
            <a href="https://www.twitter.com/ray0scythe">
              <img src="/images/footer/Twitter.svg" />
            </a>
          </li>
        </ul>
        <p>
          <a href="/" class="nav-link">
            <text
              class="d-flex justify-content-center fontfamily-lato text-white"
              style={{
                fontSize: "14px",
              }}
            >
              SCYTHE MODEL WORKS
            </text>
          </a>
          <text
            class="d-flex justify-content-center fontfamily-lato text-white"
            style={{
              fontSize: "14px",
            }}
          >
            &copy;Copyright 2021. 2016-2021
          </text>
        </p>
      </footer>
    </div>
  );
};

export default footer;
