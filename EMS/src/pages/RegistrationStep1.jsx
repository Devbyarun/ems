import React from "react";
import "../pages/RegistrationStep1.css";
import bg2 from "../assets/bg/bg2.png";

const Step1 = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="card border-0">
                <div className="card-header bg-white py-4 border-bottom text-center">
                  <h5 className="mb-0">#AskNISAU September 25 Intake</h5>
                  <p className="mb-0 text-muted">
                    Starts on Sat, 28 Jun 2025 18:30 IST
                  </p>
                </div>

                <div className="card-body position-relative">
                  <div className="border border-primary rounded-4 p-4 mb-4">
                    <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                      <h4 className="mb-0">General Admission</h4>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-secondary rounded-circle p-0 d-flex align-items-center justify-content-center"
                          style={{ width: "30px", height: "30px" }}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="form-control mx-2 text-center"
                          placeholder="1"
                          style={{ width: "60px" }}
                        />
                        <button
                          className="btn btn-outline-secondary rounded-circle p-0 d-flex align-items-center justify-content-center"
                          style={{ width: "30px", height: "30px" }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <h5>Free</h5>
                      <p className="text-muted">Sales end on 28 Jun 2025</p>
                      <p>
                        Thank you for registering for #AskNISAU. You should
                        receive further details on how to attend the session
                        closer to the day of the event.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end gap-3">
                    {/* Guest Checkout Button with Modal Trigger */}
                    <button
                      className="btn btn-outline-primary px-4 py-2 fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#checkoutModal"
                    >
                      Guest Checkout
                    </button>
                    <button className="btn btn-primary px-4 py-2 fw-semibold text-white">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card bg-body-tertiary">
                <div className="card-body">
                  <div className="mb-4">
                    <img
                      src={bg2}
                      alt="Ask NISAU Event"
                      className="img-fluid rounded"
                    />
                  </div>

                  <div className="px-3">
                    <h5 className="pb-3 border-bottom">Order Summary</h5>
                    <div className="d-flex justify-content-between py-2">
                      <h6 className="mb-0">1x General Admission</h6>
                      <h6 className="mb-0">£0.00</h6>
                    </div>
                    <div className="d-flex justify-content-between pt-3 border-top">
                      <h5 className="mb-0">Total</h5>
                      <h5 className="mb-0">£0.00</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Modal */}
        <div
          className="modal fade"
          id="checkoutModal"
          tabIndex="-1"
          aria-labelledby="checkoutModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="checkoutModalLabel">
                  Guest Checkout
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="+44 1234 567890"
                      required
                    />
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="termsCheck"
                      required
                    />
                    <label className="form-check-label" htmlFor="termsCheck">
                      I agree to the terms and conditions
                    </label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
