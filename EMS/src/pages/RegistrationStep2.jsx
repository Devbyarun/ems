import React from "react";
import "../pages/RegistrationStep2.css";
import TikIcon from "../assets/icons/TikIcon.png";
import TicketIcon from "../assets/icons/TicketIcon.png";
import PenIcon from "../assets/icons/PenIcon.png";

const RegistrationStep2 = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h5>Contact Information</h5>
              <form className="needs-validation" action="">
                <div class="form-check my-3">
                  <input
                    class="rounded-0  form-check-input"
                    type="checkbox"
                    value=""
                    id="CopyBuyerInformation"
                  ></input>
                  <label
                    class="form-check-label ms-1"
                    for="CopyBuyerInformation"
                  >
                    Copy Buyer information
                  </label>
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div className="row g-3 ">
                  <div className="col-6 md-12">
                    <input
                      className="px-3 py-2 w-100 "
                      type="text"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-6 md-12 ">
                    <input
                      className="px-3 py-2 w-100"
                      type="text"
                      placeholder="Sur Name"
                      required
                    />
                  </div>
                  <div className="col-12 md-12 ">
                    <input
                      className="px-3 py-2 w-100"
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="col-12 md-12 ">
                    <input
                      className="px-3 py-2 w-100"
                      type="number"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                  <div className="row g-3">
                    <h5>I am</h5>
                    <div class="form-check">
                      <input
                        class="rounded-0 form-check-input"
                        type="checkbox"
                        value=""
                        id="CurrentlyStudentofaUKUniversity"
                      ></input>
                      <label
                        class="form-check-label ms-1"
                        for="CurrentlyStudentofaUKUniversity"
                      >
                        Currently Student of a UK University
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="rounded-0 form-check-input"
                        type="checkbox"
                        value=""
                        id="AlumniofUKUniversity"
                      ></input>
                      <label
                        class="form-check-label ms-1"
                        for="AlumniofUKUniversity"
                      >
                        Alumni of UK University
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="rounded-0 form-check-input"
                        type="checkbox"
                        value=""
                        id="YoungProfessionalfromIndiaResidingintheUK"
                      ></input>
                      <label
                        class="form-check-label ms-1"
                        for="YoungProfessionalfromIndiaResidingintheUK"
                      >
                        Young Professional from India Residing in the UK
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="rounded-0 form-check-input"
                        type="checkbox"
                        value=""
                        id="CurrentlyConsideringTheOptionsToStudy"
                      ></input>
                      <label
                        class="form-check-label ms-1"
                        for="CurrentlyConsideringTheOptionsToStudy"
                      >
                        Currently considering the options to study (in India or
                        abroad)
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="rounded-0 form-check-input"
                        type="checkbox"
                        value=""
                        id="CurrentlyHoldingOffer"
                      ></input>
                      <label
                        class="form-check-label ms-1"
                        for="CurrentlyHoldingOffer"
                      >
                        Currently holding an offer from one or more UK
                        universities/ an incoming UK univerisities srtudent
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="rounded-0 form-check-input"
                        type="checkbox"
                        value=""
                        id="Other"
                      ></input>
                      <label class="form-check-label ms-1" for="Other">
                        Other
                      </label>
                    </div>
                    <div className="col-12">
                      <label class="ms-1 mb-2" for="UniversitiesStuding">
                        Univerisities studing/ studied at/ going to study*
                      </label>
                      <input
                        for="ValidationCustom01"
                        className="px-3 py-2 w-100 "
                        type="text"
                        placeholder="University Name"
                        required
                        id="UniversitiesStuding"
                      />
                    </div>

                    <div class="col-12">
                      <label class="ms-1 mb-2" for="Course">
                        Course Studing/ Stideid/ going to study**
                      </label>
                      <select
                        class="form-control px-3 py-2 rounded-1 border-dark w-100"
                        id="Course"
                      >
                        <option>Select Course</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <span>
                    Privacy Policy (www.nisau.org.uk/docs/privacy_policy.pdf)*
                  </span>
                  <div class="form-check">
                    <input
                      class="rounded-0 form-check-input"
                      type="checkbox"
                      value=""
                      id="PrivacyPolicyAgree"
                    ></input>
                    <label
                      class="form-check-label ms-1"
                      for="PrivacyPolicyAgree"
                    >
                      I agree to paersonal data being stored and used in line
                      with the Privacy Policy
                    </label>
                  </div>
                  <div className="col-12">
                    <label class="ms-1 mb-2" for="UniversitiesStuding">
                      Please leave your question for the speakers
                    </label>

                    <textarea
                      class="form-control px-3 py-2 w-100 border-dark"
                      id="UniversitiesStuding"
                      rows="3"
                      placeholder="..."
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button
                      class="btn btn-primary rounded-1 px-4 py-2"
                      type="submit"
                    >
                      Complete Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-4 bg-light">
              <div className="row">
                <div className="col-12 px-5 bg-white">
                  <h4 className="text-center">
                    Your Organiser<br></br>needs more details
                  </h4>
                  <p className="text-center">
                    To issue your ticket, your organiser needs some more
                    informations. Any personal details will remain private.
                  </p>
                </div>
                <div className="py-5 d-flex flex-column align-items-center gap-2">
                  <img
                    className="ticket icon"
                    src={TikIcon}
                    alt="Order Successful"
                  />
                  <h5>Order Successful</h5>
                </div>
                <div className="py-5 d-flex flex-column align-items-center gap-2">
                  <img
                    className="ticket icon"
                    src={PenIcon}
                    alt="Order Successful"
                  />
                  <h5>Answer Questions</h5>
                </div>
                <div className="py-5 d-flex flex-column align-items-center gap-2">
                  <img
                    className="ticket icon"
                    src={TicketIcon}
                    alt="Order Successful"
                  />
                  <h5>Get your tickets</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationStep2;
