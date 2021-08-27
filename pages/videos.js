import YoutubeV from "../components/youtubeplayer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";

export async function getStaticProps() {
  const MYPLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;

  /* playlist */
  const PLAYLISTCUSTOMWORK = process.env.YOUTUBE_CUSTOMWORK;
  const PLAYLISTUNBOXING = process.env.YOUTUBE_UNBOXING;
  const PLATLISTSTRAIGHTBUILD = process.env.YOUTUBE_STRAIGHTBUILD;
  const API_KEY = process.env.YOUTUBE_API_KEY;

  /* request urls */
  const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${MYPLAYLIST}&key=${API_KEY}`;
  const REQUEST_URL_CUSTOM = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${PLAYLISTCUSTOMWORK}&key=${API_KEY}`;
  const REQUEST_URL_UNBOXING = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLISTUNBOXING}&key=${API_KEY}`;
  const REQUEST_URL_STRAIGHTBUILD = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLATLISTSTRAIGHTBUILD}&key=${API_KEY}`;

  /*response results */
  const response = await fetch(REQUEST_URL);
  const response_custom = await fetch(REQUEST_URL_CUSTOM);
  const response_unboxing = await fetch(REQUEST_URL_UNBOXING);
  const response_straightbuild = await fetch(REQUEST_URL_STRAIGHTBUILD);

  const results = await response.json();
  const results_custom = await response_custom.json();
  const results_unboxing = await response_unboxing.json();
  const results_straightbuild = await response_straightbuild.json();

  return {
    props: {
      results: results.items,
      results_custom: results_custom.items,
      results_unboxing: results_unboxing.items,
      results_straightbuild: results_straightbuild.items,
    },
    revalidate: 10,
  };
}

const videos = ({
  results,
  results_custom,
  results_unboxing,
  results_straightbuild,
}) => {
  const [currentVideo, setCurrentVideo] = useState(
    results[0],
    results_custom[0],
    results_unboxing[0],
    results_straightbuild[0]
  );
  const [playing, setPlaying] = useState(false);

  //carousel responsive
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div class="container">
      {/* Video Player */}

      <span
        class="d-flex justify-content-center"
        style={{ "padding-top": "5rem", "padding-bottom": "10rem" }}
      >
        <YoutubeV
          id={currentVideo.snippet.resourceId.videoId}
          playing={playing}
        />
      </span>

      {/*Custom Build Carousel*/}
      <div style={{ "padding-bottom": "10rem" }}>
        <u style={{ color: "red" }}>
          <h3 class="text-uppercase font-weight-light" style={{}}>
            Custom Gunpla / GK / Plamodel Works
          </h3>
        </u>

        <p style={{ color: "grey" }}>
          Lastest custom model works by Scythe镰月刃
        </p>

        <Carousel ssr centerMode={true} responsive={responsive}>
          {results_custom &&
            results_custom.map((video) => {
              return (
                <div key={video.id}>
                  <a
                    href="#"
                    onClick={() => {
                      setCurrentVideo(video);
                      setPlaying(true);
                    }}
                  >
                    <img
                      src={video.snippet?.thumbnails?.medium?.url}
                      alt={video.snippet.title}
                    />
                  </a>
                </div>
              );
            })}
        </Carousel>
      </div>

      {/*Unboxing Carousel */}
      <div style={{ "padding-bottom": "10rem" }}>
        <u style={{ color: "red" }}>
          <h3 class="text-uppercase font-weight-light" style={{}}>
            Unboxing &amp; Reviews
          </h3>
        </u>

        <p style={{ color: "grey" }}>
          In-depth reviews of model kits and tools
        </p>
        <Carousel ssr centerMode={true} responsive={responsive}>
          {console.log(results_unboxing)}
          {results_unboxing &&
            results_unboxing.map((video) => {
              return (
                <div key={video.id}>
                  <a
                    href="#"
                    onClick={() => {
                      setCurrentVideo(video);
                      setPlaying(true);
                    }}
                  >
                    <img
                      src={video.snippet?.thumbnails?.medium?.url}
                      alt={video.snippet.title}
                    />
                  </a>
                </div>
              );
            })}
        </Carousel>
      </div>

      {/*Straight Build Carousel */}
      <div style={{ "padding-bottom": "20rem" }}>
        <u style={{ color: "red" }}>
          <h3 class="text-uppercase font-weight-light" style={{}}>
            Gunpla Straight build &amp; Snap fit
          </h3>
        </u>

        <p style={{ color: "grey" }}>
          Sneak peak and snap fit of my cutom projects
        </p>
        <Carousel ssr centerMode={true} responsive={responsive}>
          {results_straightbuild &&
            results_straightbuild.map((video) => {
              return (
                <div key={video.id}>
                  <a
                    href="#"
                    onClick={() => {
                      setCurrentVideo(video);
                      setPlaying(true);
                    }}
                  >
                    <img
                      src={video.snippet?.thumbnails?.medium?.url}
                      alt={video.snippet.title}
                    />
                  </a>
                </div>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
};

export default videos;
