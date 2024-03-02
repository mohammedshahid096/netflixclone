import React, { useEffect, useRef, useState } from "react";
import { CircularProgress } from "@mui/material";
import { IMAGE_URL } from "../utils/tmdb.config";
import {
  NewReleaseAction,
  PopularMoviesAction,
  TopRatedMoviesAction,
  TrendingListAction,
} from "../Redux/Actions/movies.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton, Button } from "@mui/material";

const BackgroundCover = (props) => {
  const { coverData } = props;
  return (
    <section className="bannerSection">
      <div
        className="bannerWrapper"
        style={{
          backgroundImage: coverData
            ? `url("${IMAGE_URL}${coverData.poster_path}")`
            : "rgb(16,16,16)",
        }}
      >
        {coverData && (
          <div>
            <h1>{coverData.original_title}</h1>
            <p>{coverData.overview}</p>
            <span>
              <Button
                variant="contained"
                color="success"
                startIcon={<PlayArrowIcon />}
              >
                Play
              </Button>
              <Button variant="contained" endIcon={<AddIcon />}>
                My List
              </Button>
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

const SingleCard = (props) => {
  const { poster, title, genres } = props;
  const [isHover, setisHover] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className="Card"
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <img src={poster} alt="cover" />
      {isHover && (
        <div className="hoverBox">
          <div className="image-video-container">
            <img
              src={poster}
              alt="movie"
              onClick={() => navigate("/player/video")}
            />
            <video
              src="https://player.vimeo.com/external/371824640.sd.mp4?s=00d75e016db1ee1e770d54065676f5bc841e106b&profile_id=164&oauth2_token_id=57447761"
              autoPlay
              loop
              muted
              onClick={() => navigate("/player/video")}
            />
          </div>
          <div className="infoContainer">
            <h4>{title}</h4>
            <div className="iconsDiv">
              <span>
                <PlayCircleIcon />
                <ThumbUpIcon />
                <ThumbDownAltIcon />
                <AddIcon />
              </span>

              <span>
                <ArrowDropDownIcon />
              </span>
            </div>

            <div className="genresDiv">
              <ul>
                <li>{genres[0] && genres[0]}</li>
                <li>{genres[1] && genres[1]}</li>
                <li>{genres[2] && genres[2]}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const RowWise = (props) => {
  const { title, arrayData, loading } = props;
  const [showControls, setshowControls] = useState(false);

  const listRef = useRef();

  const handleDirection = (direction) => {
    if (direction === "left") {
      listRef.current.scrollLeft -= 100;
    }
    if (direction === "right") {
      listRef.current.scrollLeft += 100;
    }
  };

  return (
    <div className="RowWise">
      <h2>{title}</h2>

      <div
        className="sliderWrapper"
        onMouseEnter={() => setshowControls(true)}
        onMouseLeave={() => setshowControls(false)}
      >
        {showControls ? (
          <div className="sideControl">
            <IconButton onClick={() => handleDirection("left")}>
              <ArrowBackIosIcon />
            </IconButton>
          </div>
        ) : null}

        <main ref={listRef}>
          {loading ? (
            <div className="loader">
              <CircularProgress color="inherit" />
            </div>
          ) : (
            arrayData.map((item, index) => (
              <SingleCard
                key={index}
                poster={`${IMAGE_URL}${item.poster_path}`}
                title={item.title}
                genres={item.genre_ids}
              />
            ))
          )}
        </main>

        {showControls ? (
          <div className="sideControl">
            <IconButton onClick={() => handleDirection("right")}>
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const HomeMovies = () => {
  const dispatch = useDispatch();
  const { loading: l1, trending } = useSelector((state) => state.TrendingList);
  const { loading: l2, upcomming } = useSelector((state) => state.NewRelease);
  const { loading: l3, popular } = useSelector((state) => state.Popular);
  const { loading: l4, top20 } = useSelector((state) => state.TopRated);

  useEffect(() => {
    dispatch(TrendingListAction());
    dispatch(NewReleaseAction());
    dispatch(PopularMoviesAction());
    dispatch(TopRatedMoviesAction());
  }, [dispatch]);

  return (
    <>
      <BackgroundCover coverData={popular ? popular[0] : false} />
      <div>
        <RowWise title="Trending Now" arrayData={trending} loading={l1} />
        <RowWise title="New Releases" arrayData={upcomming} loading={l2} />
        <RowWise title="Popular On Netflix" arrayData={popular} loading={l3} />
        <RowWise title="Top Rated Till Now" arrayData={top20} loading={l4} />
      </div>
    </>
  );
};

export default HomeMovies;
