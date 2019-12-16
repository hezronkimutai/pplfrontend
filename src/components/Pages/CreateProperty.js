import React, { Fragment } from "react";
const Home = () => {
  return (
    <Fragment>
      <div className="form">
        <img
          className="iconi"
          src="https://res.cloudinary.com/hezzie/image/upload/v1564134873/logoname_pwoann.png"
        />
        <h4 id="error" className="error"></h4>
        <div className="row">
          <div className="col-25">
            <label for="type">Type</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="type"
              name="type"
              placeholder="Your type.."
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="price">Price</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Your price.."
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="state">State</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="state"
              name="state"
              placeholder="Your user state.."
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="city">City</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Your city.."
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="address">Address</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Your address.."
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="imageurl">Image</label>
          </div>
          <div className="col-75">
            <input id="imageurl" type="file" />{" "}
          </div>
        </div>
        <div className="row">
          <button className="submit" onclick="createProperty()">
            Submit
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
