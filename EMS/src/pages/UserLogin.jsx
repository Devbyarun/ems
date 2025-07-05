import React from "react";
import "../index.css";

const UserLogin = () => {
  return (
    <>
      <div class="container-fluid  min-vh-100 d-flex align-items-center justify-content-center bg-light ">
        <div class="row w-75 h-100">
          <div className="container d-flex justify-content-center align-items-center pb-5">
            <h1>NISAU EMS LOGIN</h1>
          </div>
          <div class="col-md-5 mx-auto p-5 bg-white rounded-5 shadow-sm">
            <form>
              <div class="mb-3">
                <label for="InputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control py-2"
                  id="InputEmail1"
                  aria-describedby="emailHelp"
                ></input>
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="InputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control py-2"
                  id="InputPassword1"
                ></input>
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
                  Login
                </button>
                <button type="submit" class="btn btn-dark w-100">
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
    </>
  );
};

export default UserLogin;
