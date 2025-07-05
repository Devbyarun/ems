import React from "react";

const Registration = () => {
  return (
    <>
      <div className="container-fluid">
        <div class="container-fluid  min-vh-100 d-flex align-items-center justify-content-center bg-light ">
          <div class="row w-100 h-100">
            <div className="container d-flex justify-content-center align-items-center pb-5">
              <h1>NISAU EMS USER REGISTRATION</h1>
            </div>
            <div class="col-md-8 mx-auto p-5 bg-white rounded-5 shadow-sm">
              <form>
                <div className="d-flex flex-row justify-content-center gap-3 mb-3 ">
                  <div className="w-100">
                    <label for="FirstName" class="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control py-2  "
                      id="FirstName"
                    ></input>
                  </div>
                  <div class="w-100">
                    <label for="LastName" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control py-2 "
                      id="LastName"
                    ></input>
                  </div>
                </div>
                <div className="d-flex gap-3 mb-3">
                  <div class="w-100">
                    <label for="InputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control py-2"
                      id="InputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div class="w-100">
                    <label for="Contact Number" class="form-label">
                      Contact Number
                    </label>
                    <input
                      type="number"
                      class="form-control py-2"
                      id="InputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <div class="mb-3">
                    <label for="InputPassword" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control py-2"
                      id="InputPassword"
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="confirmpassword" class="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="confirmpassword"
                      class="form-control py-2"
                      id="InputPassword1"
                    ></input>
                  </div>
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  ></input>
                  <div className="d-flex justify-content-between ">
                    <label class="form-check-label" for="exampleCheck1">
                      I agree with{" "}
                      <a class="text-decoration-none text-primary" href="#">
                        Privacy Policy
                      </a>
                    </label>
                    <p>
                      <a class="text-decoration-none text-primary" href="#">
                        Forgot Password?
                      </a>
                    </p>
                    {/* <p>
                    New User?{" "}
                    <a class="text-decoration-none text-primary" href="#">
                      Register Here
                    </a>
                  </p> */}
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                  <button type="submit" class="btn btn-primary w-100">
                    Register
                  </button>
                </div>
              </form>
              <div className="other-login-options d-flex flex-column pt-4">
                <p className="text-center">Or sign in with</p>
                <p className="text-center">
                  By clicking Continue or the Apple, Google, or Facebook icons,
                  you agree to NISAU's{" "}
                  <a class="text-decoration-none text-primary" href="#">
                    Terms of Service
                  </a>
                  {"  "}and{"  "}
                  <a class="text-decoration-none text-primary" href="#">
                    Privacy Policy.
                  </a>
                </p>
                <div className="d-flex justify-content-center align-items-center py-3 gap-3">
                  <a href="#">
                    <i class="fa-brands fa-facebook fa-2xl text-primary"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-google-plus fa-2xl text-dark"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
