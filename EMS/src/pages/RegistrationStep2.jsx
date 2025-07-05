import React from "react";
import "../pages/RegistrationStep2.css";
import TikIcon from "../assets/icons/TikIcon.png";
import TicketIcon from "../assets/icons/TicketIcon.png";
import PenIcon from "../assets/icons/PenIcon.png";

const RegistrationStep2 = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row gx-4">
          {/* Main Form Column */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h5 className="mb-4">Contact Information</h5>
                <form className="needs-validation" noValidate>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="CopyBuyerInformation"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="CopyBuyerInformation"
                    >
                      Copy Buyer information
                    </label>
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Sur Name"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Mobile Number"
                        required
                      />
                    </div>
                  </div>

                  <h5 className="mb-3">I am</h5>
                  <div className="row g-3 mb-4">
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="CurrentlyStudentofaUKUniversity"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="CurrentlyStudentofaUKUniversity"
                        >
                          Currently Student of a UK University
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="AlumniofUKUniversity"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="AlumniofUKUniversity"
                        >
                          Alumni of UK University
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="YoungProfessionalfromIndiaResidingintheUK"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="YoungProfessionalfromIndiaResidingintheUK"
                        >
                          Young Professional from India Residing in the UK
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="CurrentlyConsideringTheOptionsToStudy"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="CurrentlyConsideringTheOptionsToStudy"
                        >
                          Currently considering the options to study (in India
                          or abroad)
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="CurrentlyHoldingOffer"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="CurrentlyHoldingOffer"
                        >
                          Currently holding an offer from one or more UK
                          universities/ an incoming UK universities student
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="Other"
                        />
                        <label className="form-check-label" htmlFor="Other">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="UniversitiesStuding" className="form-label">
                      Universities studying/ studied at/ going to study*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="University Name"
                      required
                      id="UniversitiesStuding"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="Course" className="form-label">
                      Course Studying/ Studied/ going to study**
                    </label>
                    <select className="form-select" id="Course">
                      <option>Select Course</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <p className="small">
                      Privacy Policy (www.nisau.org.uk/docs/privacy_policy.pdf)*
                    </p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="PrivacyPolicyAgree"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="PrivacyPolicyAgree"
                      >
                        I agree to personal data being stored and used in line
                        with the Privacy Policy
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="SpeakerQuestion" className="form-label">
                      Please leave your question for the speakers
                    </label>
                    <textarea
                      className="form-control"
                      id="SpeakerQuestion"
                      rows="3"
                      placeholder="..."
                    ></textarea>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-primary py-2" type="submit">
                      Complete Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 text-center">
                <div className="mb-5 px-3">
                  <h4 className="mb-3">
                    Your Organiser
                    <br />
                    needs more details
                  </h4>
                  <p className="text-muted">
                    To issue your ticket, your organiser needs some more
                    informations. Any personal details will remain private.
                  </p>
                </div>

                <div className="py-4 border-top">
                  <i class="bi bi-patch-check-fill text-success fs-2 "></i>
                  <h5>Order Successful</h5>
                </div>

                <div className="py-4 border-top">
                  <i class="bi bi-pencil text-dark fs-3"></i>
                  <h5>Answer Questions</h5>
                </div>

                <div className="py-4 border-top">
                  <i class="bi bi-ticket-perforated text-dark fs-3"></i>
                  <h5>Get your tickets</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationStep2;
