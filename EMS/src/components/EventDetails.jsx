import React from "react";
import dateIcon from "../assets/icons/lets-icons_date-today-light.svg";
import locationIcon from "../assets/icons/ph_video.svg";
import nisaueicon from "../assets/icons/nisau_e.png";
import dummylogo from "../assets/partnerslogo/dummylogo.png";

const EventDetails = () => {
  return (
    <div className="event-details container-fluid py-5">
      <div className="container">
        <div className="row g-4">
          {/* Main Content Column */}
          <div className="col-12 col-lg-8">
            {/* Event Header */}
            <div className="mb-4">
              <time dateTime="2025-06-28" className="d-block mb-2">
                Saturday, 28 June
              </time>
              <h1 className="display-5 fw-bold mb-3">
                #AskNISAU September 25 Intake
              </h1>
              <p className="lead text-muted">
                Special pre-departure briefing for Indian students joining UK
                universities in September 2025. Will also be helpful for current
                students.
              </p>
            </div>

            {/* Partners Section - Fixed Carousel */}
            <div className="mb-5">
              <h2 className="h4 fw-semibold mb-4">Our Partners & Sponsors</h2>
              <div className="bg-light p-4 rounded-3">
                <div
                  id="partnerCarousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {/* First row of logos */}
                    <div className="carousel-item active">
                      <div className="d-flex justify-content-around align-items-center">
                        {[...Array(4)].map((_, i) => (
                          <img
                            key={i}
                            className="partnerlogo img-fluid"
                            src={dummylogo}
                            alt="Partner logo"
                            style={{ maxHeight: "60px" }}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Second row of logos */}
                    <div className="carousel-item">
                      <div className="d-flex justify-content-around align-items-center">
                        {[...Array(4)].map((_, i) => (
                          <img
                            key={i + 4}
                            className="partnerlogo img-fluid"
                            src={dummylogo}
                            alt="Partner logo"
                            style={{ maxHeight: "60px" }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#partnerCarousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#partnerCarousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Rest of the content remains the same */}
            {/* ... (keep all the other sections exactly as they were in the previous version) ... */}
          </div>

          {/* Sidebar Column */}
          <div className="col-12 col-lg-4">
            <div className="sticky-top" style={{ top: "20px" }}>
              <div className="border rounded-4 p-4 shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <span className="d-block fw-bold">Free</span>
                    <span className="d-block text-muted">
                      Jun 28 · 18:30 GMT+5:30
                    </span>
                  </div>
                  <button className="btn btn-primary px-4 py-2 fw-semibold">
                    Get Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
