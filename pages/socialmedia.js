import React from "react";

const socialmedia = () => {
  return (
    <div class="container">
      <div
        class="row align-items-start"
        style={{ "padding-top": "5rem", "padding-bottom": "10rem" }}
      >
        <div class="col d-flex justify-content-center">
          <div>
            <u style={{ color: "red" }}>
              <h3>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                LIVE TWEETS
              </h3>
            </u>

            <a
              class="twitter-timeline"
              data-height="600"
              data-width="340"
              href="https://twitter.com/Ray0Scythe?ref_src=twsrc%5Etfw"
            >
              Tweets by Ray0Scythe
            </a>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div>
            <u style={{ color: "red" }}>
              <h3>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                FACEBOOK POSTS
              </h3>
            </u>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fscythemodelworks&tabs=timeline&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=885405258731056"
              width="340"
              height="600"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>

        <div class="col d-flex justify-content-center">
          <div>
            <u style={{ color: "red" }}>
              <h3>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                INSTAGRAM
              </h3>
            </u>
          </div>
        </div>
      </div>

      <script
        async
        src="//platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </div>
  );
};

export default socialmedia;
