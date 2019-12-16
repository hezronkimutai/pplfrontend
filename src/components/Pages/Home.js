import React, { Fragment } from "react";
const Home = () => {
  return (
    <Fragment>
      <div class="landing-page-img">
        <div class="landing-page-welcome-note">
          <img
            class="iconi"
            src="https://res.cloudinary.com/hezzie/image/upload/v1564134873/logoname_pwoann.png"
          />
        </div>
      </div>
      <h2>Reviews</h2>
      <div class="reviews">
        <div class="review">
          <div class="prof">
            <img class="revprof" src="https://res.cloudinary.com/hezzie/image/upload/v1564134873/logoname_pwoann.png" />
          </div>
          <div class="rev">First</div>
        </div>
        <div class="review">
          <div class="prof">
            <img class="revprof" src="https://res.cloudinary.com/hezzie/image/upload/v1564134873/logoname_pwoann.png" />
          </div>
          <div class="rev">First</div>
        </div>
        <div class="review">
          <div class="prof">
            <img class="revprof" src="https://res.cloudinary.com/hezzie/image/upload/v1564134873/logoname_pwoann.png" />
          </div>
          <div class="rev">First</div>
        </div>
        <div class="review">
          <div class="prof">
            <img class="revprof" src="https://res.cloudinary.com/hezzie/image/upload/v1564134873/logoname_pwoann.png" />
          </div>
          <div class="rev">First</div>
        </div>
      </div>

      <h2>Featured</h2>
      <div class="featured" id="featured"></div>
    </Fragment>
  );
};
export default Home;
