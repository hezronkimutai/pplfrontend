import React, { Fragment } from "react";
const Profile = () => {
  return (
    <Fragment>
      <div>
        <div class="landing-page-img">
          <div class="landing-page-welcome-note">
            <img
              class="iconi"
              src="https://res.cloudinary.com/hezzie/image/upload/v1564134873/logoname_pwoann.png"
            />
          </div>
        </div>

        <h2>Featured</h2>
        <div class="featured" id="featured"></div>
      </div>
    </Fragment>
  );
};
export default Profile;
