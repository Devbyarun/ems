import React from "react";
import bg1 from "../assets/bg/bg1.png";
import bg2 from "../assets/bg/bg2.png";
import "../components/EventHero.css";
import "../index.css";

const EventHero = () => {
  return (
    <>
      <div className="event-main container-fluid py-4 py-md-5">
        <div className="container">
          <div className="event-grid">
            {/* Event Box 1 */}
            <div className="event-box">
              <div className="image-container">
                <img
                  src={bg2}
                  alt="Event banner"
                  className="event-hero w-100 rounded-5"
                />
                <div className="content-overlay p-3 p-md-4 p-lg-5">
                  <h5 className="text-white overlay-subtitle mb-1 mb-md-2">
                    Get started now
                  </h5>
                  <h2 className="text-white overlay-title mb-2 mb-md-3">
                    View our upcoming events here
                  </h2>
                  <button className="btn btn-primary px-3 px-md-4 py-2 rounded-2 fw-semibold">
                    Get Tickets
                  </button>
                </div>
              </div>
            </div>

            {/* Event Box 2 */}
            <div className="event-box">
              <div className="image-container">
                <img
                  src={bg2}
                  alt="Event banner"
                  className="event-hero w-100 rounded-5"
                />
                <div className="content-overlay p-3 p-md-4 p-lg-5">
                  <h5 className="text-white overlay-subtitle mb-1 mb-md-2">
                    Special Event
                  </h5>
                  <h2 className="text-white overlay-title mb-2 mb-md-3">
                    Annual Conference
                  </h2>
                  <button className="btn btn-primary px-3 px-md-4 py-2 rounded-2 fw-semibold">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventHero;
