import React from "react";
import bg1 from "../assets/bg/bg1.png";
import bg2 from "../assets/bg/bg2.png";
import "../components/EventHero.css";
import "../index.css";

const EventHero = () => {
  return (
    <>
      <div className="event-main container-fluid py-4 py-md-5 d-flex align-items-center ">
        <div className="container d-flex align-items-start flex-column gap-4 position-relative">
          <img
            src={bg2}
            alt=""
            className="event-hero rounded-5 object-fit-cover"
          />
          <div className="position-absolute bottom-50 ps-5 ">
            <h5 className="text-white">Get started now</h5>
            <h1 className="text-white">View our upcoming events here</h1>
            <button className="mt-4 px-4 py-2 border rounded-2 fw-semibold fs-6 text-white bg-primary  ">
              Get Tickets
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventHero;
