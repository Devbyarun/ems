import React from "react";
import "../pages/RegistrationStep1.css";
import bg2 from "../assets/bg/bg2.png";

const Step1 = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="registrationstep1 container">
          <div className="row ">
            <div className="col-8">
              <div className="py-4 border-bottom">
                <h5 className="text-center">#AskNISAU September 25 Intake</h5>
                <span>
                  <p className="text-center">
                    Starts on Sat, 28 Jun 2025 18:30 IST
                  </p>
                </span>
              </div>
              <div className="py-4 position-relative h-75">
                <div className="position-relative border border-primary rounded-4 py-4">
                  <div className="border-bottom border-dark py-3 px-3  d-flex justify-content-between align-items-center">
                    <h4>General Admission</h4>
                    <div>
                      <button className="border-0 rounded p-1 px-2 bg-dark-subtle text-body-secondary">
                        +
                      </button>
                      <input
                        className="inputcount border-0 text-center"
                        placeholder="1"
                        type="number"
                      />
                      <button className="border-0 rounded p-1 px-2 bg-dark-subtle text-body-secondary">
                        -
                      </button>
                    </div>
                  </div>
                  <div className="pt-4 px-3">
                    <h5>Free</h5>
                    <span>
                      <p>Sales end on 28 Jun 2025</p>
                    </span>
                    <p className="">
                      Thank you for registering for #AskNISAU. You should
                      receive further details on how to attend the session
                      closer to the day of the event.
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <button className="position-absolute  bottom-0 end-0 btnv1 px-4 py-2 border rounded-2 fw-semibold fs-6 text-white bg-primary">
                    Register
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4 bg-body-tertiary">
              <div>
                <img src={bg2} alt="Ask NISAU Event" />
              </div>
              <div className="px-3 pt-3 ">
                <h5 className="pb-3">Order Summery</h5>
                <div className="pb-3 d-flex justify-content-between">
                  <h6>1x General Admission</h6>
                  <h6>£0.00</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h5>Total</h5>
                  <h5>£0.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
