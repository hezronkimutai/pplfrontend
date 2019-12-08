import React, { Fragment } from "react";
const Signup = () => {
  return (
    <Fragment>
  <div class="form">
            <img class="iconi" src="https://res.cloudinary.com/hezzie/image/upload/v1564134873/logoname_pwoann.png"/>
             
                <h4 id="error" class="error"></h4>
                <div class="row">
                    <div class="col-25">
                        <label for="firstname">First Name</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="firstname" name="firstname" placeholder="Your name.." required/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lastname">Last Name</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="lastname" name="lastname" placeholder="Your last name.." required/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="username">Username</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="username" name="username" placeholder="Your user name.." required/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="email">Email</label>
                    </div>
                    <div class="col-75">
                        <input type="email" id="email" name="email" placeholder="Your email.." required/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="phonenumber">Phone Number</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="phonenumber" name="phonenumber" placeholder="Your Phone Number..." required/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="address">Address</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="address" name="address" placeholder="Your address.." required/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="password">Password</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="password" name="password" placeholder="Your password.." required/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="confirmpassword">Confirm Password</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="confirmpassword" name="confirmpassword" placeholder="Your password.." required/>
                    </div>
                </div>
                <div class="row">
                    <button  class="submit"  value="Submit" onclick="createUser()">Submit</button>
                </div>
                
        </div>
    </Fragment>
  );
};
export default Signup;
