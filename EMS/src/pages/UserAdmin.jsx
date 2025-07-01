import React from "react";
import "../pages/UserAdmin.css";
import bg2 from "../assets/bg/bg2.png";
import ShareIcon from "../assets/icons/UploadIcon.svg";
import Nav from "../components/Nav";

const UserAdmin = () => {
  return (
    <>
      <div className="container-fluid px-0 bg-light">
        <div>
          <Nav />
        </div>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-12 col-md-4 ">
              <div className="ticketcard shadow pb-0 rounded-bottom-5">
                <div>
                  <img className="ticketImg rounded-top-5" src={bg2} alt="" />
                </div>
                <div className="d-flex flex-column gap-5 px-3">
                  <div>
                    <div className="d-flex justify-content-between align-items-center py-4">
                      <h5>#AskNISAU September 25 Intake</h5>
                      <img
                        className="UploadIcon border border-3 rounded-5 p-1"
                        src={ShareIcon}
                        alt=""
                      />
                    </div>
                    <span>Sat,Jun 28, 2:00 PM</span>
                  </div>
                  <button className="w-100 py-3 rounded-1 bg-white border-light border-1 ">
                    Cancel Order
                  </button>
                  <div className="d-flex flex-column bg-light rounded-2 px-3 py-3">
                    <h6>Refund Policy</h6>
                    <p>
                      Refunds up to <strong> 7 days</strong> before event
                    </p>
                  </div>
                  <div className="d-flex justify-content-center w-100 ">
                    <h6>
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0"
                        href="#"
                      >
                        Contact the organiser
                      </a>
                    </h6>
                  </div>
                  <div className="d-flex justify-content-center w-100 border-top py-3">
                    <h6>
                      <p>Free order No. 12706+506343 on 20 June 2025</p>
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0"
                        href="#"
                      >
                        Contact the organiser
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="border-bottom pb-3 mb-3">
                <h4>General Admission</h4>
              </div>
              <div>
                <form className="needs-validation" action="">
                  <div className="row g-3 ">
                    <div className="col-12">
                      <label For="FirstName">First Name`</label>
                      <input
                        id="FirstName"
                        className="mt-2 py-2 w-100 border-0"
                        type="text"
                        placeholder="Mahesh"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label For="FirstName">Last Name</label>
                      <input
                        id="LastName"
                        className="mt-2 py-2 w-100 border-0"
                        type="text"
                        placeholder="Kumar"
                        required
                      />
                    </div>

                    <div className="col-12 md-12 ">
                      <label For="email">Email Address</label>
                      <input
                        id="email"
                        className="mt-2 py-2 w-100 border-0"
                        type="email"
                        placeholder="test@gmail.com"
                        required
                      />
                    </div>
                    <div className="col-12 md-12 ">
                      <label For="PhoneNumber">Phone Number</label>
                      <input
                        id="PhoneNumber"
                        className="mt-2 py-2 w-100 border-0"
                        type="number"
                        placeholder="999999999"
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
                          Currently considering the options to study (in India
                          or abroad)
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
                          for="UniversitiesStuding"
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
                      <input
                        for="ValidationCustom01"
                        className="px-3 py-2 w-100 "
                        type="text"
                        placeholder=""
                        required
                        id="UniversitiesStuding"
                      />
                    </div>
                    <div class="col-12">
                      <button
                        class="btn btn-primary rounded-1 px-4 py-2"
                        type="submit"
                      >
                        Edit Details
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAdmin;
