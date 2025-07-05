import React from "react";
import "../components/EventDetails.css";
import "../index.css";
import dateIcon from "../assets/icons/lets-icons_date-today-light.svg";
import locationIcon from "../assets/icons/ph_video.svg";
import nisaueicon from "../assets/icons/nisau_e.png";
import dummylogo from "../assets/partnerslogo/dummylogo.png";

const EventDetails = () => {
  return (
    <div className="event-details container-fluid py-5 d-flex align-items-center">
      <div className="container">
        <div className="row">
          {/* Main Content Section */}
          <div className="col-12 col-md-8">
            {/* Event Header */}
            <div className="event-header">
              <time dateTime="2025-06-28">Saturday, 28 June</time>
              <h1 className="fs-1 fw-bold">#AskNISAU September 25 Intake</h1>
              <p className="text-body-tertiary">
                Special pre-departure briefing for Indian students joining UK
                universities in September 2025. Will also be helpful for current
                students.
              </p>
            </div>

            {/* Partners Section */}
            <div className="partners-section py-3">
              <h2 className="fs-4 fw-semibold">Our Partners & Sponcers</h2>
              <div className="pc-5">
                <div className="row align-items-center h-100">
                  <div className="logoslider rounded">
                    <div className="slider">
                      <div className="logos">
                        <div></div>
                        <img className="partnerlogo" src={dummylogo} alt="" />
                        <img className="partnerlogo" src={dummylogo} alt="" />
                        <img className="partnerlogo" src={dummylogo} alt="" />
                        <img className="partnerlogo" src={dummylogo} alt="" />
                      </div>
                      <div className="logos">
                        <img className="partnerlogo" src={dummylogo} alt="" />
                        <img className="partnerlogo" src={dummylogo} alt="" />
                        <img className="partnerlogo" src={dummylogo} alt="" />
                        <img className="partnerlogo" src={dummylogo} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Info Section */}
            <div className="event-info-section">
              <div className="py-3">
                <h2 className="fs-4 fw-semibold">Date and time</h2>
                <div className="d-flex gap-3 align-items-center">
                  <img className="icon" src={dateIcon} alt="" />
                  <span>Starts on Sat, 28 Jun 2025 18:30 GMT+5:30</span>
                </div>
              </div>

              <div className="py-3">
                <h2 className="fs-4 fw-semibold">Location</h2>
                <div className="d-flex gap-3 align-items-center">
                  <img className="icon" src={locationIcon} alt="" />
                  <span>Online</span>
                </div>
              </div>
            </div>

            {/* Event Description Sections */}
            <div className="event-description">
              <div className="py-3">
                <h2 className="fs-5 fw-semibold">
                  #ASKNISAU: Your UK Journey Begins Here
                </h2>
              </div>

              <div className="py-3">
                <h3 className="fs-6 fw-semibold">
                  Exclusive Pre-Departure Session for Indian Students –
                  September 2025 Intake
                </h3>
                <p className="text-body-tertiary">
                  <strong className=".text-black-50">Date:</strong> Saturday, 28
                  June 2025
                </p>
                <p className="text-body-tertiary">
                  <strong className="fw-semibold">Time: </strong> 2 PM UK | 6:30
                  PM India
                </p>
                <p className="text-body-tertiary">
                  <strong className="fw-semibold">Where:</strong> Online | Free
                  Admission
                </p>
              </div>

              <div className="py-3">
                <p className="text-body-tertiary">
                  <strong className="fw-semibold">
                    Flying to the UK soon?
                  </strong>
                </p>
                <p className="text-body-tertiary">
                  <strong className="fw-semibold">
                    Still mulling over your options?
                  </strong>
                </p>
                <p className="text-body-tertiary">
                  <strong className="fw-semibold">
                    Already on campus but looking for clarity?
                  </strong>
                </p>
                <p className="text-body-tertiary">
                  Start your journey feeling confident, informed, and connected.
                  <strong className="fw-semibold">#ASKNISAU</strong> is the UK's
                  most trusted pre-departure session tailored specifically for
                  Indian students. Hosted by the{" "}
                  <strong className="fw-semibold">
                    National Indian Students and Alumni Union UK (NISAU)
                  </strong>
                  , this live, interactive event ensures you get authentic,
                  unbiased advice directly from those who've been in your shoes.
                </p>
              </div>

              <div className="py-3">
                <h3 className="fs-6 fw-semibold">
                  What makes #ASKNISAU special?
                </h3>
                <ul>
                  <li>
                    <p className="text-body-tertiary">
                      <strong className="fw-semibold">Honest answers:</strong>{" "}
                      Real students, real alumni, real experts.
                    </p>
                  </li>
                  <li>
                    <p className="text-body-tertiary">
                      <strong className="fw-semibold">Zero bias:</strong> We
                      tell you what others won't.
                    </p>
                  </li>
                  <li>
                    <p className="text-body-tertiary">
                      <strong className="fw-semibold">
                        Instant community:
                      </strong>{" "}
                      Meet your peers even before landing in the UK.
                    </p>
                  </li>
                  <li>
                    <p className="text-body-tertiary">
                      <strong className="fw-semibold">Insider insights:</strong>{" "}
                      Scholarships, part-time jobs, accommodation, visas & more.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="py-3">
                <h3 className="fs-6 fw-semibold">
                  Topics we'll cover include:
                </h3>
                <p className="text-body-tertiary">
                  Life in the UK: What to expect, myths vs reality
                </p>
                <p className="text-body-tertiary">
                  Accommodation hacks: Safe, comfortable & affordable living
                </p>
                <p className="text-body-tertiary">
                  Graduate Route (Post-Study Work Visa): Updates & how to
                  leverage it
                </p>
                <p className="text-body-tertiary">
                  Funding your studies: Loans, budgeting tips, exclusive NISAU
                  scholarships
                </p>
                <p className="text-body-tertiary">
                  Career success: Finding jobs, internships & building your UK
                  network
                </p>
                <p className="text-body-tertiary">
                  Navigating recent UK policy changes & what they mean for you
                </p>
              </div>

              <div className="py-3">
                <h3 className="fs-6 fw-semibold">
                  Live Q&A – Submit your questions when you register!
                </h3>
                <p className="text-body-tertiary">
                  Our experienced panel will answer your questions live during
                  the session.
                  <strong className="fw-semibold">
                    This is your chance
                  </strong>{" "}
                  to clear doubts, eliminate stress, and begin your UK journey
                  with absolute confidence.
                </p>
              </div>

              <div className="py-3">
                <h3 className="fs-6 fw-semibold">Why attend?</h3>
                <p className="text-body-tertiary">
                  Thousands of students trust #ASKNISAU every year to make their
                  transition smooth and stress-free. Don't miss your chance to
                  start your UK experience feeling ready and supported.
                  <strong className="fw-semibold">
                    <p>
                      <br />
                      <a href="#">www.nisau.org.uk</a>
                    </p>
                    <br />
                    Seats fill fast. Register now to secure your place.
                  </strong>{" "}
                </p>
                <p className="text-body-tertiary">
                  Follow us for session updates & live broadcasts!
                </p>
                <i className="text-body-tertiary">
                  Note: NISAU sessions do not constitute immigration or legal
                  advice. Information provided reflects personal experiences of
                  students and alumni.
                </i>
              </div>
            </div>

            {/* Tags Section */}
            <div className="tags-section py-3">
              <h2 className="fs-4 fw-semibold">Tags</h2>
              <div className="my-4">
                <div className="d-flex gap-2">
                  <div data-masonry="">
                    <div className="d-flex flex-wrap gap-2">
                      <span className="tags py-2 px-3 rounded-5">
                        Online Events
                      </span>
                      <span className="tags py-2 px-3 rounded-5">
                        Things To Do Online
                      </span>
                      <span className="tags py-2 px-3 rounded-5">
                        Online Seminars
                      </span>
                      <span className="tags py-2 px-3 rounded-5">
                        Online Family & Educations Seminars
                      </span>
                      <span className="tags py-2 px-3 rounded-5">
                        #Students
                      </span>
                      <span className="tags py-2 px-3 rounded-5">#India</span>
                      <span className="tags py-2 px-3 rounded-5">
                        #studyabroad
                      </span>
                      <span className="tags py-2 px-3 rounded-5">
                        #Internationalstudents
                      </span>
                      <span className="tags py-2 px-3 rounded-5">
                        #studyinuk
                      </span>
                      <span className="tags py-2 px-3 rounded-5">
                        #studyabroadwebinar
                      </span>
                      <span className="tags py-2 px-3 rounded-5">#ukindia</span>
                      <span className="tags py-2 px-3 rounded-5">
                        #indiastudentinuk
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Organizer Section */}
            <div className="organizer-section py-3">
              <h2 className="fs-4 fw-semibold">Organized by</h2>
              <div className="py-4 mt-5 px-4 rounded-5 bg-secondary-subtle">
                <div className="d-flex gap-4 align-items-center mb-4">
                  <img className="icon" src={nisaueicon} alt="" width="65px" />
                  <p className="text-primary pt-3">
                    By National Indian Students and Alumni
                    <br />
                    Union UK
                  </p>
                </div>
                <p className="text-body-tertiary lh-lg">
                  National Indian Students and Alumni Union UK (NISAU) is the
                  apex UK organisation representing students, alumni and young
                  professionals of Indian origin. We are the umbrella
                  organisation for India and India-related student societies in
                  the UK and aim to bring a unified voice of India's diaspora
                  youth, on a single, international platform, promote Indian
                  culture and further the UK-India relationship by fostering a
                  dynamic youth-led leadership ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="col-12 col-md-4">
            <div className="cta-booking border border-2 rounded-4 p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="d-block">free</span>
                  <span className="d-block">Jun 28 · 18:30 GMT+5:30</span>
                </div>
                <div>
                  <button className="btnv1 px-4 py-2 border rounded-2 fw-semibold fs-6 text-white bg-primary">
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
