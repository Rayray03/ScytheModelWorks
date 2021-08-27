import ReactPlayer from "react-player/youtube";

const youtubeplayer = (props) => {
  const { id, playing } = props;
  const url = `https://www.youtube.com/watch?v=${id}`;
  return (
    <div class="embed-responsive embed-responsive-16by9">
      <ReactPlayer className="react-player" url={url} playing={playing} />
    </div>
  );
};

export default youtubeplayer;
