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
          {/* <button className=" px-4 py-2 border rounded-2 fw-semibold fs-6 text-white bg-primary position-absolute bottom-50 start-50 translate-middle">
            Get Tickets
          </button> */}
        </div>
      </div>
    </>
  );
};

export default EventHero;
