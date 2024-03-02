import React from "react";

const BackgroundHome = () => {
  return (
    <div>
      <section className="bannerSection">
        <div
          className="bannerWrapper"
          style={{
            backgroundImage: popular[0]
              ? `url("${IMAGE_URL}${popular[0].poster_path}")`
              : "rgb(16,16,16)",
          }}
        >
          {popular[0] && (
            <div>
              <h1>{popular[0].original_title}</h1>
              <p>{popular[0].overview}</p>
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
    </div>
  );
};

export default BackgroundHome;
