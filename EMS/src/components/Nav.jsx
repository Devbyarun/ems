import React from "react";

const Nav = () => {
  return (
    <>
      <div className="container-fluid shadow-sm sticky-top">
        <div className="container py-3 px-4 d-flex justify-content-end gap-4">
          <a className="text-decoration-none text-dark" href="#">
            Login
          </a>
          <a className="text-decoration-none text-dark" href="#">
            Register
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
