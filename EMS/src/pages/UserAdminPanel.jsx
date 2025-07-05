import React from "react";
import "../pages/UserAdminPanel.css";

const UserAdminPanel = () => {
  return (
    <>
      <div className="container-fluid user-dashboard">
        <div className="py-3">
          {/* Mobile Navigation Toggle - More Descriptive */}
          <button
            className="btn btn-primary d-lg-none mb-3 w-100"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle dashboard navigation"
          >
            <i className="bi bi-list me-2"></i> Dashboard Menu
          </button>

          <div className="d-flex flex-column flex-lg-row align-items-start admin-panel-container">
            {/* Sidebar Navigation - Improved with better labels */}
            <div
              className="offcanvas-lg offcanvas-start admin-sidebar"
              id="sidebarMenu"
              aria-labelledby="sidebarMenuLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarMenuLabel">
                  My Account
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#sidebarMenu"
                  aria-label="Close navigation menu"
                ></button>
              </div>
              <div className="offcanvas-body p-0">
                <div
                  className="nav flex-column nav-pills me-lg-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active text-start d-flex align-items-center"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="true"
                  >
                    <i className="bi bi-person me-2"></i>
                    <span>My Profile</span>
                  </button>
                  <button
                    className="nav-link text-start d-flex align-items-center"
                    id="v-pills-events-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-events"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-events"
                    aria-selected="false"
                  >
                    <i className="bi bi-calendar-event me-2"></i>
                    <span>My Events</span>
                  </button>
                  <button
                    className="nav-link text-start d-flex align-items-center"
                    id="v-pills-Tickets-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-Tickets"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-Tickets"
                    aria-selected="false"
                  >
                    <i className="bi bi-ticket-perforated me-2"></i>
                    <span>My Tickets</span>
                  </button>
                  <button
                    className="nav-link text-start d-flex align-items-center"
                    id="v-pills-payments-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-payments"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-payments"
                    aria-selected="false"
                  >
                    <i className="bi bi-credit-card me-2"></i>
                    <span>Payment Methods</span>
                  </button>
                  <button
                    className="nav-link text-start d-flex align-items-center"
                    id="v-pills-notifications-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-notifications"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-notifications"
                    aria-selected="false"
                  >
                    <i className="bi bi-bell me-2"></i>
                    <span>Notification Settings</span>
                  </button>
                  <button
                    className="nav-link text-start d-flex align-items-center"
                    id="v-pills-localization-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-localization"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-localization"
                    aria-selected="false"
                  >
                    <i className="bi bi-globe me-2"></i>
                    <span>Language & Region</span>
                  </button>
                  <button
                    className="nav-link text-start d-flex align-items-center"
                    id="v-pills-accmng-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-accmng"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-accmng"
                    aria-selected="false"
                  >
                    <i className="bi bi-gear me-2"></i>
                    <span>Account Settings</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content Area - Improved with better section organization */}
            <div
              className="tab-content flex-grow-1 w-100"
              id="v-pills-tabContent"
            >
              {/* Profile Tab */}
              <div
                className="tab-pane fade show active"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
                tabIndex="0"
              >
                <div className="card admin-profile-card">
                  <div className="card-header bg-primary text-white py-3">
                    <h4 className="mb-0">
                      <i className="bi bi-person-gear me-2"></i> My Profile
                    </h4>
                    <p className="mb-0 small">
                      Update your personal information and security settings
                    </p>
                  </div>
                  <div className="card-body p-4">
                    <div className="row">
                      {/* Profile Picture Section */}
                      <div className="col-md-4 border-end pe-4">
                        <div className="text-center mb-4">
                          <div className="position-relative d-inline-block">
                            <img
                              src="https://via.placeholder.com/200"
                              alt="Profile"
                              className="rounded-circle shadow-sm profile-picture"
                              width="200"
                              height="200"
                            />
                            <button
                              className="btn btn-sm btn-primary rounded-circle position-absolute bottom-0 end-0"
                              aria-label="Update profile picture"
                            >
                              <i className="bi bi-camera"></i>
                            </button>
                          </div>
                          <h5 className="mt-3 mb-1">John Doe</h5>
                          <p className="text-muted small">Member since 2022</p>
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="profilePicture"
                            className="form-label fw-bold"
                          >
                            Upload New Photo
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="profilePicture"
                            accept="image/*"
                            aria-describedby="profilePictureHelp"
                          />
                          <div id="profilePictureHelp" className="form-text">
                            JPG, GIF or PNG. Max size of 2MB
                          </div>
                        </div>
                      </div>

                      {/* Personal Information Section */}
                      <div className="col-md-8 ps-4">
                        <section aria-labelledby="personalInfoHeading">
                          <h5
                            id="personalInfoHeading"
                            className="mb-4 text-primary"
                          >
                            <i className="bi bi-person-lines-fill me-2"></i>
                            Personal Information
                          </h5>

                          <div className="row g-3 mb-4">
                            <div className="col-md-6">
                              <label htmlFor="firstName" className="form-label">
                                First Name{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="Enter first name"
                                aria-required="true"
                              />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="lastName" className="form-label">
                                Last Name <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Enter last name"
                                aria-required="true"
                              />
                            </div>
                          </div>

                          <div className="mb-4">
                            <label htmlFor="email" className="form-label">
                              Email Address{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="bi bi-envelope"></i>
                              </span>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email address"
                                aria-required="true"
                              />
                            </div>
                          </div>

                          <div className="mb-4">
                            <label htmlFor="phoneNumber" className="form-label">
                              Phone Number
                            </label>
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="bi bi-telephone"></i>
                              </span>
                              <input
                                type="tel"
                                className="form-control"
                                id="phoneNumber"
                                placeholder="Enter phone number"
                              />
                            </div>
                          </div>

                          <hr className="my-4" />
                        </section>

                        {/* Password Change Section */}
                        <section aria-labelledby="passwordChangeHeading">
                          <h5
                            id="passwordChangeHeading"
                            className="mb-4 text-primary"
                          >
                            <i className="bi bi-shield-lock me-2"></i>
                            Password Change
                          </h5>

                          <div className="mb-3">
                            <label
                              htmlFor="currentPassword"
                              className="form-label"
                            >
                              Current Password
                            </label>
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="bi bi-lock"></i>
                              </span>
                              <input
                                type="password"
                                className="form-control"
                                id="currentPassword"
                                placeholder="Enter current password"
                              />
                            </div>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">
                              New Password
                            </label>
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="bi bi-key"></i>
                              </span>
                              <input
                                type="password"
                                className="form-control"
                                id="newPassword"
                                placeholder="Enter new password"
                                aria-describedby="passwordHelp"
                              />
                            </div>
                            <div id="passwordHelp" className="form-text">
                              Minimum 8 characters with at least one number
                            </div>
                          </div>

                          <div className="mb-4">
                            <label
                              htmlFor="confirmPassword"
                              className="form-label"
                            >
                              Confirm New Password
                            </label>
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="bi bi-key-fill"></i>
                              </span>
                              <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm new password"
                              />
                            </div>
                          </div>
                        </section>

                        {/* Form Actions */}
                        <div className="d-flex justify-content-end gap-3 pt-2">
                          <button
                            className="btn btn-outline-secondary px-4"
                            type="button"
                          >
                            Cancel
                          </button>
                          <button
                            className="btn btn-primary px-4"
                            type="submit"
                          >
                            <i className="bi bi-save me-2"></i> Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Events Tab - Improved with better accessibility */}
              <div
                className="tab-pane fade"
                id="v-pills-events"
                role="tabpanel"
                aria-labelledby="v-pills-events-tab"
                tabIndex="0"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <div className="card mb-4">
                        <div className="card-header bg-primary text-white">
                          <h5 className="mb-0">
                            <i className="bi bi-calendar-event me-2"></i> My
                            Events
                          </h5>
                          <p className="mb-0 small">
                            Manage your upcoming and past event registrations
                          </p>
                        </div>
                        <div className="card-body">
                          {/* Events Navigation */}
                          <ul
                            className="nav nav-tabs mb-4"
                            id="eventsTab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="upcoming-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#upcoming"
                                type="button"
                                role="tab"
                                aria-controls="upcoming"
                                aria-selected="true"
                              >
                                Upcoming Events
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="past-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#past"
                                type="button"
                                role="tab"
                                aria-controls="past"
                                aria-selected="false"
                              >
                                Past Events
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="saved-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#saved"
                                type="button"
                                role="tab"
                                aria-controls="saved"
                                aria-selected="false"
                              >
                                Saved Events
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="wishlist-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#wishlist"
                                type="button"
                                role="tab"
                                aria-controls="wishlist"
                                aria-selected="false"
                              >
                                Wishlist
                              </button>
                            </li>
                          </ul>

                          {/* Events Content */}
                          <div className="tab-content" id="eventsTabContent">
                            {/* Upcoming Events */}
                            <div
                              className="tab-pane fade show active"
                              id="upcoming"
                              role="tabpanel"
                              aria-labelledby="upcoming-tab"
                            >
                              <div className="alert alert-info">
                                <i className="bi bi-info-circle me-2"></i>
                                You have 2 upcoming events
                              </div>
                              <div className="table-responsive">
                                <table
                                  className="table table-hover"
                                  aria-label="Upcoming events"
                                >
                                  <thead>
                                    <tr>
                                      <th scope="col">Event</th>
                                      <th scope="col">Date</th>
                                      <th scope="col">Location</th>
                                      <th scope="col">Ticket Status</th>
                                      <th scope="col">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <img
                                            src="https://via.placeholder.com/60"
                                            alt="Music Festival 2023"
                                            className="rounded me-3"
                                            width="60"
                                            height="60"
                                          />
                                          <div>
                                            <h6 className="mb-0">
                                              Music Festival 2023
                                            </h6>
                                            <small className="text-muted">
                                              Category: Music
                                            </small>
                                          </div>
                                        </div>
                                      </td>
                                      <td>Oct 15, 2023</td>
                                      <td>New York, NY</td>
                                      <td>
                                        <span className="badge bg-success">
                                          Confirmed
                                        </span>
                                      </td>
                                      <td>
                                        <button
                                          className="btn btn-sm btn-outline-primary me-2"
                                          aria-label="View Music Festival details"
                                        >
                                          View
                                        </button>
                                        <button
                                          className="btn btn-sm btn-outline-danger"
                                          aria-label="Cancel Music Festival ticket"
                                        >
                                          Cancel
                                        </button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <img
                                            src="https://via.placeholder.com/60"
                                            alt="Tech Conference"
                                            className="rounded me-3"
                                            width="60"
                                            height="60"
                                          />
                                          <div>
                                            <h6 className="mb-0">
                                              Tech Conference
                                            </h6>
                                            <small className="text-muted">
                                              Category: Technology
                                            </small>
                                          </div>
                                        </div>
                                      </td>
                                      <td>Nov 5, 2023</td>
                                      <td>San Francisco, CA</td>
                                      <td>
                                        <span className="badge bg-warning text-dark">
                                          Pending
                                        </span>
                                      </td>
                                      <td>
                                        <button
                                          className="btn btn-sm btn-outline-primary me-2"
                                          aria-label="View Tech Conference details"
                                        >
                                          View
                                        </button>
                                        <button
                                          className="btn btn-sm btn-outline-danger"
                                          aria-label="Cancel Tech Conference ticket"
                                        >
                                          Cancel
                                        </button>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>

                            {/* Past Events */}
                            <div
                              className="tab-pane fade"
                              id="past"
                              role="tabpanel"
                              aria-labelledby="past-tab"
                            >
                              <div className="alert alert-info">
                                <i className="bi bi-info-circle me-2"></i>
                                You've attended 2 events in the past
                              </div>
                              <div className="table-responsive">
                                <table
                                  className="table table-hover"
                                  aria-label="Past events"
                                >
                                  <thead>
                                    <tr>
                                      <th scope="col">Event</th>
                                      <th scope="col">Date</th>
                                      <th scope="col">Location</th>
                                      <th scope="col">Status</th>
                                      <th scope="col">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <img
                                            src="https://via.placeholder.com/60"
                                            alt="Summer Festival 2023"
                                            className="rounded me-3"
                                            width="60"
                                            height="60"
                                          />
                                          <div>
                                            <h6 className="mb-0">
                                              Summer Festival 2023
                                            </h6>
                                            <small className="text-muted">
                                              Category: Festival
                                            </small>
                                          </div>
                                        </div>
                                      </td>
                                      <td>Jul 20, 2023</td>
                                      <td>Chicago, IL</td>
                                      <td>
                                        <span className="badge bg-secondary">
                                          Completed
                                        </span>
                                      </td>
                                      <td>
                                        <button
                                          className="btn btn-sm btn-outline-primary me-2"
                                          aria-label="View Summer Festival details"
                                        >
                                          View
                                        </button>
                                        <button
                                          className="btn btn-sm btn-outline-success"
                                          aria-label="Rate Summer Festival"
                                        >
                                          Rate
                                        </button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <img
                                            src="https://via.placeholder.com/60"
                                            alt="Food Expo"
                                            className="rounded me-3"
                                            width="60"
                                            height="60"
                                          />
                                          <div>
                                            <h6 className="mb-0">Food Expo</h6>
                                            <small className="text-muted">
                                              Category: Food
                                            </small>
                                          </div>
                                        </div>
                                      </td>
                                      <td>May 12, 2023</td>
                                      <td>Austin, TX</td>
                                      <td>
                                        <span className="badge bg-secondary">
                                          Completed
                                        </span>
                                      </td>
                                      <td>
                                        <button
                                          className="btn btn-sm btn-outline-primary me-2"
                                          aria-label="View Food Expo details"
                                        >
                                          View
                                        </button>
                                        <button
                                          className="btn btn-sm btn-outline-success"
                                          aria-label="Rate Food Expo"
                                        >
                                          Rate
                                        </button>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>

                            {/* Saved Events */}
                            <div
                              className="tab-pane fade"
                              id="saved"
                              role="tabpanel"
                              aria-labelledby="saved-tab"
                            >
                              <div className="alert alert-info">
                                <i className="bi bi-info-circle me-2"></i>
                                You have 2 saved events
                              </div>
                              <div className="row">
                                <div className="col-md-6 col-lg-4 mb-4">
                                  <div className="card h-100">
                                    <img
                                      src="https://via.placeholder.com/300x200"
                                      className="card-img-top"
                                      alt="Jazz Night event"
                                    />
                                    <div className="card-body">
                                      <h5 className="card-title">Jazz Night</h5>
                                      <p className="card-text text-muted">
                                        <small>
                                          <i className="bi bi-calendar me-1"></i>{" "}
                                          Dec 10, 2023
                                        </small>
                                        <br />
                                        <small>
                                          <i className="bi bi-geo-alt me-1"></i>{" "}
                                          New Orleans, LA
                                        </small>
                                      </p>
                                    </div>
                                    <div className="card-footer bg-white border-top-0">
                                      <div className="d-flex justify-content-between">
                                        <button
                                          className="btn btn-sm btn-outline-primary"
                                          aria-label="Mark Jazz Night as interested"
                                        >
                                          Interested
                                        </button>
                                        <button
                                          className="btn btn-sm btn-outline-danger"
                                          aria-label="Remove Jazz Night from saved events"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4">
                                  <div className="card h-100">
                                    <img
                                      src="https://via.placeholder.com/300x200"
                                      className="card-img-top"
                                      alt="Art Exhibition event"
                                    />
                                    <div className="card-body">
                                      <h5 className="card-title">
                                        Art Exhibition
                                      </h5>
                                      <p className="card-text text-muted">
                                        <small>
                                          <i className="bi bi-calendar me-1"></i>{" "}
                                          Jan 15, 2024
                                        </small>
                                        <br />
                                        <small>
                                          <i className="bi bi-geo-alt me-1"></i>{" "}
                                          Miami, FL
                                        </small>
                                      </p>
                                    </div>
                                    <div className="card-footer bg-white border-top-0">
                                      <div className="d-flex justify-content-between">
                                        <button
                                          className="btn btn-sm btn-outline-primary"
                                          aria-label="Mark Art Exhibition as interested"
                                        >
                                          Interested
                                        </button>
                                        <button
                                          className="btn btn-sm btn-outline-danger"
                                          aria-label="Remove Art Exhibition from saved events"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Wishlist */}
                            <div
                              className="tab-pane fade"
                              id="wishlist"
                              role="tabpanel"
                              aria-labelledby="wishlist-tab"
                            >
                              <div className="alert alert-info">
                                <i className="bi bi-info-circle me-2"></i>
                                You have 2 events in your wishlist
                              </div>
                              <div className="row">
                                <div className="col-md-6 col-lg-4 mb-4">
                                  <div className="card h-100">
                                    <img
                                      src="https://via.placeholder.com/300x200"
                                      className="card-img-top"
                                      alt="Winter Music Festival event"
                                    />
                                    <div className="card-body">
                                      <h5 className="card-title">
                                        Winter Music Festival
                                      </h5>
                                      <p className="card-text text-muted">
                                        <small>
                                          <i className="bi bi-calendar me-1"></i>{" "}
                                          Feb 5, 2024
                                        </small>
                                        <br />
                                        <small>
                                          <i className="bi bi-geo-alt me-1"></i>{" "}
                                          Denver, CO
                                        </small>
                                      </p>
                                    </div>
                                    <div className="card-footer bg-white border-top-0">
                                      <div className="d-flex justify-content-between">
                                        <button
                                          className="btn btn-sm btn-primary"
                                          aria-label="Book Winter Music Festival tickets"
                                        >
                                          Book Now
                                        </button>
                                        <button
                                          className="btn btn-sm btn-outline-danger"
                                          aria-label="Remove Winter Music Festival from wishlist"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4">
                                  <div className="card h-100">
                                    <img
                                      src="https://via.placeholder.com/300x200"
                                      className="card-img-top"
                                      alt="Tech Summit 2024 event"
                                    />
                                    <div className="card-body">
                                      <h5 className="card-title">
                                        Tech Summit 2024
                                      </h5>
                                      <p className="card-text text-muted">
                                        <small>
                                          <i className="bi bi-calendar me-1"></i>{" "}
                                          Mar 20, 2024
                                        </small>
                                        <br />
                                        <small>
                                          <i className="bi bi-geo-alt me-1"></i>{" "}
                                          Seattle, WA
                                        </small>
                                      </p>
                                    </div>
                                    <div className="card-footer bg-white border-top-0">
                                      <div className="d-flex justify-content-between">
                                        <button
                                          className="btn btn-sm btn-primary"
                                          aria-label="Book Tech Summit tickets"
                                        >
                                          Book Now
                                        </button>
                                        <button
                                          className="btn btn-sm btn-outline-danger"
                                          aria-label="Remove Tech Summit from wishlist"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tickets Tab - Improved with better organization */}
              <div
                className="tab-pane fade"
                id="v-pills-Tickets"
                role="tabpanel"
                aria-labelledby="v-pills-Tickets-tab"
                tabIndex="0"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <div className="card mb-4">
                        <div className="card-header bg-primary text-white">
                          <h5 className="mb-0">
                            <i className="bi bi-ticket-perforated me-2"></i> My
                            Tickets
                          </h5>
                          <p className="mb-0 small">
                            View and manage all your event tickets
                          </p>
                        </div>
                        <div className="card-body">
                          {/* Tickets Filter Options */}
                          <div className="row mb-4">
                            <div className="col-md-6">
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="bi bi-search"></i>
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search tickets by event name..."
                                  aria-label="Search tickets"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <label
                                htmlFor="eventFilter"
                                className="visually-hidden"
                              >
                                Filter by event type
                              </label>
                              <select
                                className="form-select"
                                id="eventFilter"
                                aria-label="Filter tickets by event type"
                              >
                                <option value="">All Events</option>
                                <option value="upcoming">
                                  Upcoming Events
                                </option>
                                <option value="past">Past Events</option>
                              </select>
                            </div>
                          </div>

                          {/* Tickets List */}
                          <div className="table-responsive">
                            <table
                              className="table table-hover align-middle"
                              aria-label="My tickets"
                            >
                              <thead>
                                <tr>
                                  <th scope="col">Event</th>
                                  <th scope="col">Date</th>
                                  <th scope="col">Ticket Type</th>
                                  <th scope="col">Quantity</th>
                                  <th scope="col">Payment Status</th>
                                  <th scope="col">Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {/* Ticket 1 */}
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src="https://via.placeholder.com/60"
                                        alt="Music Festival 2023"
                                        className="rounded me-3"
                                        width="60"
                                        height="60"
                                      />
                                      <div>
                                        <h6 className="mb-0">
                                          Music Festival 2023
                                        </h6>
                                        <small className="text-muted">
                                          Order #12345
                                        </small>
                                      </div>
                                    </div>
                                  </td>
                                  <td>Oct 15, 2023</td>
                                  <td>VIP Pass</td>
                                  <td>2</td>
                                  <td>
                                    <span className="badge bg-success">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="dropdown">
                                      <button
                                        className="btn btn-sm btn-outline-primary dropdown-toggle"
                                        type="button"
                                        id="ticketActions1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        aria-label="Manage Music Festival tickets"
                                      >
                                        <i className="bi bi-gear"></i> Manage
                                      </button>
                                      <ul
                                        className="dropdown-menu"
                                        aria-labelledby="ticketActions1"
                                      >
                                        <li>
                                          <button className="dropdown-item">
                                            <i className="bi bi-qr-code me-2"></i>
                                            View/Download Ticket
                                          </button>
                                        </li>
                                        <li>
                                          <button className="dropdown-item">
                                            <i className="bi bi-receipt me-2"></i>
                                            Download Invoice
                                          </button>
                                        </li>
                                        <li>
                                          <button className="dropdown-item">
                                            <i className="bi bi-calendar-event me-2"></i>
                                            Reschedule
                                          </button>
                                        </li>
                                        <li>
                                          <button className="dropdown-item text-danger">
                                            <i className="bi bi-x-circle me-2"></i>
                                            Cancel Ticket
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </td>
                                </tr>

                                {/* Ticket 2 */}
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src="https://via.placeholder.com/60"
                                        alt="Tech Conference"
                                        className="rounded me-3"
                                        width="60"
                                        height="60"
                                      />
                                      <div>
                                        <h6 className="mb-0">
                                          Tech Conference
                                        </h6>
                                        <small className="text-muted">
                                          Order #12346
                                        </small>
                                      </div>
                                    </div>
                                  </td>
                                  <td>Nov 5, 2023</td>
                                  <td>General Admission</td>
                                  <td>1</td>
                                  <td>
                                    <span className="badge bg-warning text-dark">
                                      Pending
                                    </span>
                                  </td>
                                  <td>
                                    <div className="dropdown">
                                      <button
                                        className="btn btn-sm btn-outline-primary dropdown-toggle"
                                        type="button"
                                        id="ticketActions2"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        aria-label="Manage Tech Conference tickets"
                                      >
                                        <i className="bi bi-gear"></i> Manage
                                      </button>
                                      <ul
                                        className="dropdown-menu"
                                        aria-labelledby="ticketActions2"
                                      >
                                        <li>
                                          <button
                                            className="dropdown-item"
                                            disabled
                                          >
                                            <i className="bi bi-qr-code me-2"></i>
                                            Ticket Pending
                                          </button>
                                        </li>
                                        <li>
                                          <button className="dropdown-item">
                                            <i className="bi bi-receipt me-2"></i>
                                            View Payment
                                          </button>
                                        </li>
                                        <li>
                                          <button className="dropdown-item text-danger">
                                            <i className="bi bi-x-circle me-2"></i>
                                            Cancel Order
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </td>
                                </tr>

                                {/* Ticket 3 */}
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src="https://via.placeholder.com/60"
                                        alt="Food Expo"
                                        className="rounded me-3"
                                        width="60"
                                        height="60"
                                      />
                                      <div>
                                        <h6 className="mb-0">Food Expo</h6>
                                        <small className="text-muted">
                                          Order #12347 (Promo Used)
                                        </small>
                                      </div>
                                    </div>
                                  </td>
                                  <td>May 12, 2023</td>
                                  <td>Early Bird</td>
                                  <td>3</td>
                                  <td>
                                    <span className="badge bg-success">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="dropdown">
                                      <button
                                        className="btn btn-sm btn-outline-primary dropdown-toggle"
                                        type="button"
                                        id="ticketActions3"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        aria-label="Manage Food Expo tickets"
                                      >
                                        <i className="bi bi-gear"></i> Manage
                                      </button>
                                      <ul
                                        className="dropdown-menu"
                                        aria-labelledby="ticketActions3"
                                      >
                                        <li>
                                          <button className="dropdown-item">
                                            <i className="bi bi-qr-code me-2"></i>
                                            View Ticket
                                          </button>
                                        </li>
                                        <li>
                                          <button className="dropdown-item">
                                            <i className="bi bi-receipt me-2"></i>
                                            Download Invoice
                                          </button>
                                        </li>
                                        <li>
                                          <button className="dropdown-item">
                                            <i className="bi bi-tag me-2"></i>
                                            View Promo Details
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          {/* Ticket QR Preview Modal */}
                          <div
                            className="modal fade"
                            id="ticketModal"
                            tabIndex="-1"
                            aria-hidden="true"
                            aria-labelledby="ticketModalLabel"
                          >
                            <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="ticketModalLabel"
                                  >
                                    Your Ticket
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body text-center">
                                  <div className="border p-3 mb-3">
                                    <img
                                      src="https://via.placeholder.com/200"
                                      alt="QR Code for ticket"
                                      className="img-fluid mb-3"
                                    />
                                    <h5>Music Festival 2023</h5>
                                    <p className="text-muted">
                                      VIP Pass - Order #12345
                                    </p>
                                    <p>
                                      <i className="bi bi-calendar me-1"></i>{" "}
                                      Oct 15, 2023
                                      <br />
                                      <i className="bi bi-geo-alt me-1"></i>{" "}
                                      Main Stage, New York
                                    </p>
                                  </div>
                                  <button
                                    className="btn btn-primary me-2"
                                    aria-label="Download ticket"
                                  >
                                    <i className="bi bi-download me-1"></i>{" "}
                                    Download
                                  </button>
                                  <button
                                    className="btn btn-outline-secondary"
                                    aria-label="Print ticket"
                                  >
                                    <i className="bi bi-printer me-1"></i> Print
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Promo Code Section */}
                          <div className="card mt-4">
                            <div className="card-header">
                              <h6 className="mb-0">
                                <i className="bi bi-tag me-2"></i> Promo Codes &
                                Discounts
                              </h6>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="border p-3 rounded mb-3">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                      <strong>SUMMER20</strong>
                                      <span className="badge bg-success">
                                        Applied
                                      </span>
                                    </div>
                                    <small className="text-muted">
                                      20% off on all summer events. Expires Aug
                                      31, 2023
                                    </small>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="border p-3 rounded mb-3">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                      <strong>EARLYBIRD</strong>
                                      <span className="badge bg-secondary">
                                        Used
                                      </span>
                                    </div>
                                    <small className="text-muted">
                                      15% off early bird tickets. Used on May
                                      10, 2023
                                    </small>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3">
                                <label
                                  htmlFor="promoCodeInput"
                                  className="visually-hidden"
                                >
                                  Enter promo code
                                </label>
                                <div className="input-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="promoCodeInput"
                                    placeholder="Enter promo code"
                                    aria-label="Enter promo code"
                                  />
                                  <button
                                    className="btn btn-primary"
                                    aria-label="Apply promo code"
                                  >
                                    Apply
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payments Tab - Improved with better section organization */}
              <div
                className="tab-pane fade"
                id="v-pills-payments"
                role="tabpanel"
                aria-labelledby="v-pills-payments-tab"
                tabIndex="0"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <div className="card mb-4">
                        <div className="card-header bg-primary text-white">
                          <h5 className="mb-0">
                            <i className="bi bi-credit-card me-2"></i> Payments
                            & Billing
                          </h5>
                          <p className="mb-0 small">
                            Manage your payment methods and view billing history
                          </p>
                        </div>
                        <div className="card-body">
                          {/* Payment Methods Section */}
                          <section aria-labelledby="paymentMethodsHeading">
                            <div className="mb-5">
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <h5 id="paymentMethodsHeading">
                                  <i className="bi bi-wallet2 me-2"></i> Payment
                                  Methods
                                </h5>
                                <button
                                  className="btn btn-sm btn-primary"
                                  data-bs-toggle="modal"
                                  data-bs-target="#addPaymentMethodModal"
                                  aria-label="Add new payment method"
                                >
                                  <i className="bi bi-plus-lg me-1"></i> Add New
                                </button>
                              </div>

                              <div className="row">
                                {/* Credit Card 1 */}
                                <div className="col-md-6 mb-3">
                                  <div className="card border-primary">
                                    <div className="card-body">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <h6 className="mb-1">
                                            <i className="bi bi-credit-card-fill me-2"></i>
                                            Visa ending in 4242
                                          </h6>
                                          <small className="text-muted">
                                            Expires 04/2025
                                          </small>
                                        </div>
                                        <div className="dropdown">
                                          <button
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                            type="button"
                                            id="cardActions1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Manage Visa card"
                                          >
                                            <i className="bi bi-three-dots-vertical"></i>
                                          </button>
                                          <ul
                                            className="dropdown-menu"
                                            aria-labelledby="cardActions1"
                                          >
                                            <li>
                                              <button className="dropdown-item">
                                                <i className="bi bi-pencil me-2"></i>
                                                Edit
                                              </button>
                                            </li>
                                            <li>
                                              <button className="dropdown-item text-danger">
                                                <i className="bi bi-trash me-2"></i>
                                                Remove
                                              </button>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="form-check form-switch mt-3">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="defaultCard1"
                                          checked
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="defaultCard1"
                                        >
                                          Default payment method
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Credit Card 2 */}
                                <div className="col-md-6 mb-3">
                                  <div className="card">
                                    <div className="card-body">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <h6 className="mb-1">
                                            <i className="bi bi-credit-card-fill me-2"></i>
                                            Mastercard ending in 5555
                                          </h6>
                                          <small className="text-muted">
                                            Expires 12/2024
                                          </small>
                                        </div>
                                        <div className="dropdown">
                                          <button
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                            type="button"
                                            id="cardActions2"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Manage Mastercard"
                                          >
                                            <i className="bi bi-three-dots-vertical"></i>
                                          </button>
                                          <ul
                                            className="dropdown-menu"
                                            aria-labelledby="cardActions2"
                                          >
                                            <li>
                                              <button className="dropdown-item">
                                                <i className="bi bi-pencil me-2"></i>
                                                Edit
                                              </button>
                                            </li>
                                            <li>
                                              <button className="dropdown-item text-danger">
                                                <i className="bi bi-trash me-2"></i>
                                                Remove
                                              </button>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="form-check form-switch mt-3">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="defaultCard2"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="defaultCard2"
                                        >
                                          Default payment method
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* PayPal */}
                                <div className="col-md-6 mb-3">
                                  <div className="card">
                                    <div className="card-body">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <h6 className="mb-1">
                                            <i className="bi bi-paypal me-2"></i>
                                            PayPal Account
                                          </h6>
                                          <small className="text-muted">
                                            user@example.com
                                          </small>
                                        </div>
                                        <div className="dropdown">
                                          <button
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                            type="button"
                                            id="paypalActions"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Manage PayPal account"
                                          >
                                            <i className="bi bi-three-dots-vertical"></i>
                                          </button>
                                          <ul
                                            className="dropdown-menu"
                                            aria-labelledby="paypalActions"
                                          >
                                            <li>
                                              <button className="dropdown-item text-danger">
                                                <i className="bi bi-trash me-2"></i>
                                                Remove
                                              </button>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Billing History Section */}
                          <section aria-labelledby="billingHistoryHeading">
                            <div className="mb-5">
                              <h5 id="billingHistoryHeading" className="mb-4">
                                <i className="bi bi-receipt me-2"></i> Billing
                                History
                              </h5>
                              <div className="table-responsive">
                                <table
                                  className="table table-hover"
                                  aria-label="Billing history"
                                >
                                  <thead>
                                    <tr>
                                      <th scope="col">Date</th>
                                      <th scope="col">Description</th>
                                      <th scope="col">Amount</th>
                                      <th scope="col">Status</th>
                                      <th scope="col">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {/* Payment 1 */}
                                    <tr>
                                      <td>Oct 15, 2023</td>
                                      <td>
                                        Music Festival 2023 - 2 VIP Tickets
                                      </td>
                                      <td>$249.98</td>
                                      <td>
                                        <span className="badge bg-success">
                                          Completed
                                        </span>
                                      </td>
                                      <td>
                                        <button
                                          className="btn btn-sm btn-outline-primary"
                                          aria-label="Download invoice for Music Festival"
                                        >
                                          <i className="bi bi-download me-1"></i>{" "}
                                          Invoice
                                        </button>
                                      </td>
                                    </tr>

                                    {/* Payment 2 */}
                                    <tr>
                                      <td>Sep 28, 2023</td>
                                      <td>
                                        Tech Conference - General Admission
                                      </td>
                                      <td>$89.50</td>
                                      <td>
                                        <span className="badge bg-success">
                                          Completed
                                        </span>
                                      </td>
                                      <td>
                                        <button
                                          className="btn btn-sm btn-outline-primary"
                                          aria-label="Download invoice for Tech Conference"
                                        >
                                          <i className="bi bi-download me-1"></i>{" "}
                                          Invoice
                                        </button>
                                      </td>
                                    </tr>

                                    {/* Refund */}
                                    <tr>
                                      <td>Aug 10, 2023</td>
                                      <td>Summer Festival - Refund</td>
                                      <td>-$120.00</td>
                                      <td>
                                        <span className="badge bg-info">
                                          Refunded
                                        </span>
                                      </td>
                                      <td>
                                        <button
                                          className="btn btn-sm btn-outline-secondary"
                                          aria-label="View refund details for Summer Festival"
                                        >
                                          <i className="bi bi-receipt me-1"></i>{" "}
                                          Details
                                        </button>
                                      </td>
                                    </tr>

                                    {/* Failed Payment */}
                                    <tr>
                                      <td>Jul 22, 2023</td>
                                      <td>Food Expo - 3 Tickets</td>
                                      <td>$75.00</td>
                                      <td>
                                        <span className="badge bg-danger">
                                          Failed
                                        </span>
                                      </td>
                                      <td>
                                        <button
                                          className="btn btn-sm btn-outline-primary"
                                          aria-label="Retry payment for Food Expo"
                                        >
                                          <i className="bi bi-credit-card me-1"></i>{" "}
                                          Retry
                                        </button>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </section>

                          {/* Refunds Section */}
                          <section aria-labelledby="refundStatusHeading">
                            <div>
                              <h5 id="refundStatusHeading" className="mb-4">
                                <i className="bi bi-arrow-left-right me-2"></i>{" "}
                                Refund Status
                              </h5>
                              <div className="card">
                                <div className="card-body">
                                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                                    <div>
                                      <h6 className="mb-1">
                                        Summer Festival Ticket Refund
                                      </h6>
                                      <small className="text-muted">
                                        Requested on Aug 5, 2023
                                      </small>
                                    </div>
                                    <div>
                                      <span className="badge bg-success">
                                        Completed
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    className="progress mb-3"
                                    style={{ height: "8px" }}
                                    aria-label="Refund progress"
                                  >
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "100%" }}
                                      aria-valuenow="100"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                  <div className="row text-center">
                                    <div className="col">
                                      <small className="text-muted">
                                        Requested
                                      </small>
                                      <div className="text-success">
                                        <i className="bi bi-check-circle-fill"></i>
                                      </div>
                                      <small>Aug 5</small>
                                    </div>
                                    <div className="col">
                                      <small className="text-muted">
                                        Processed
                                      </small>
                                      <div className="text-success">
                                        <i className="bi bi-check-circle-fill"></i>
                                      </div>
                                      <small>Aug 7</small>
                                    </div>
                                    <div className="col">
                                      <small className="text-muted">
                                        Completed
                                      </small>
                                      <div className="text-success">
                                        <i className="bi bi-check-circle-fill"></i>
                                      </div>
                                      <small>Aug 10</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add Payment Method Modal */}
                <div
                  className="modal fade"
                  id="addPaymentMethodModal"
                  tabIndex="-1"
                  aria-hidden="true"
                  aria-labelledby="addPaymentMethodModalLabel"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title"
                          id="addPaymentMethodModalLabel"
                        >
                          Add Payment Method
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <ul
                          className="nav nav-tabs mb-4"
                          id="paymentMethodTabs"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="creditCard-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#creditCard"
                              type="button"
                              role="tab"
                              aria-controls="creditCard"
                              aria-selected="true"
                            >
                              Credit Card
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="paypal-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#paypal"
                              type="button"
                              role="tab"
                              aria-controls="paypal"
                              aria-selected="false"
                            >
                              PayPal
                            </button>
                          </li>
                        </ul>

                        <div
                          className="tab-content"
                          id="paymentMethodTabsContent"
                        >
                          <div
                            className="tab-pane fade show active"
                            id="creditCard"
                            role="tabpanel"
                            aria-labelledby="creditCard-tab"
                          >
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="cardNumber"
                                  className="form-label"
                                >
                                  Card Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="cardNumber"
                                  placeholder="1234 5678 9012 3456"
                                />
                              </div>
                              <div className="row mb-3">
                                <div className="col-md-6">
                                  <label
                                    htmlFor="expiryDate"
                                    className="form-label"
                                  >
                                    Expiry Date
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="expiryDate"
                                    placeholder="MM/YY"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label htmlFor="cvv" className="form-label">
                                    CVV
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="cvv"
                                    placeholder="123"
                                  />
                                </div>
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="cardName"
                                  className="form-label"
                                >
                                  Name on Card
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="cardName"
                                  placeholder="John Doe"
                                />
                              </div>
                              <div className="form-check mb-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="makeDefault"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="makeDefault"
                                >
                                  Set as default payment method
                                </label>
                              </div>
                            </form>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="paypal"
                            role="tabpanel"
                            aria-labelledby="paypal-tab"
                          >
                            <div className="text-center py-4">
                              <p>
                                You'll be redirected to PayPal to complete your
                                payment setup
                              </p>
                              <button
                                className="btn btn-primary"
                                aria-label="Connect PayPal account"
                              >
                                <i className="bi bi-paypal me-2"></i> Connect
                                PayPal Account
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                          aria-label="Cancel adding payment method"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          aria-label="Save payment method"
                        >
                          Save Payment Method
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notification Tab - Improved with better organization */}
              <div
                className="tab-pane fade"
                id="v-pills-notifications"
                role="tabpanel"
                aria-labelledby="v-pills-notifications-tab"
                tabIndex="0"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <div className="card mb-4">
                        <div className="card-header bg-primary text-white">
                          <h5 className="mb-0">
                            <i className="bi bi-bell me-2"></i> Notification
                            Preferences
                          </h5>
                          <p className="mb-0 small">
                            Customize how you receive notifications
                          </p>
                        </div>
                        <div className="card-body">
                          {/* Notification Channels Section */}
                          <section aria-labelledby="notificationChannelsHeading">
                            <div className="mb-5">
                              <h5
                                id="notificationChannelsHeading"
                                className="mb-4"
                              >
                                <i className="bi bi-envelope me-2"></i>{" "}
                                Notification Channels
                              </h5>

                              <div className="card mb-4">
                                <div className="card-body">
                                  <div className="row align-items-center">
                                    <div className="col-md-8">
                                      <h6 className="mb-1">
                                        <i className="bi bi-envelope-check me-2"></i>
                                        Email Notifications
                                      </h6>
                                      <p className="text-muted small mb-0">
                                        Receive important updates and
                                        announcements via email
                                      </p>
                                    </div>
                                    <div className="col-md-4 text-md-end">
                                      <div className="form-check form-switch d-inline-block">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="emailNotifications"
                                          checked
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="emailNotifications"
                                        ></label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="card">
                                <div className="card-body">
                                  <div className="row align-items-center">
                                    <div className="col-md-8">
                                      <h6 className="mb-1">
                                        <i className="bi bi-phone me-2"></i>
                                        SMS Notifications
                                      </h6>
                                      <p className="text-muted small mb-0">
                                        Get time-sensitive alerts via text
                                        message
                                      </p>
                                    </div>
                                    <div className="col-md-4 text-md-end">
                                      <div className="form-check form-switch d-inline-block">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="smsNotifications"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="smsNotifications"
                                        ></label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Event Reminders Section */}
                          <section aria-labelledby="eventRemindersHeading">
                            <div className="mb-5">
                              <h5 id="eventRemindersHeading" className="mb-4">
                                <i className="bi bi-calendar-event me-2"></i>{" "}
                                Event Reminders
                              </h5>

                              <div className="card mb-3">
                                <div className="card-body">
                                  <h6 className="mb-3">
                                    <i className="bi bi-alarm me-2"></i>
                                    Reminder Timing
                                  </h6>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="reminderTiming"
                                      className="form-label"
                                    >
                                      Send reminders before events
                                    </label>
                                    <select
                                      className="form-select"
                                      id="reminderTiming"
                                    >
                                      <option value="1">1 hour before</option>
                                      <option value="3">3 hours before</option>
                                      <option value="6">6 hours before</option>
                                      <option value="12">
                                        12 hours before
                                      </option>
                                      <option value="24" selected>
                                        1 day before
                                      </option>
                                      <option value="48">2 days before</option>
                                      <option value="168">1 week before</option>
                                    </select>
                                  </div>

                                  <div className="form-check mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="additionalReminder"
                                      checked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="additionalReminder"
                                    >
                                      Send an additional reminder 1 hour before
                                      the event
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div className="card">
                                <div className="card-body">
                                  <h6 className="mb-3">
                                    <i className="bi bi-ticket-perforated me-2"></i>
                                    Ticket Notifications
                                  </h6>

                                  <div className="form-check mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="ticketPurchase"
                                      checked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="ticketPurchase"
                                    >
                                      Notify me when tickets are purchased
                                    </label>
                                  </div>

                                  <div className="form-check mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="ticketCancellation"
                                      checked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="ticketCancellation"
                                    >
                                      Notify me when tickets are cancelled
                                    </label>
                                  </div>

                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="eventChanges"
                                      checked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="eventChanges"
                                    >
                                      Notify me about event changes or
                                      cancellations
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Marketing Preferences Section */}
                          <section aria-labelledby="marketingPreferencesHeading">
                            <div>
                              <h5
                                id="marketingPreferencesHeading"
                                className="mb-4"
                              >
                                <i className="bi bi-megaphone me-2"></i>{" "}
                                Marketing Preferences
                              </h5>

                              <div className="card">
                                <div className="card-body">
                                  <div className="form-check mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="promotionalEmails"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="promotionalEmails"
                                    >
                                      Receive promotional emails and special
                                      offers
                                    </label>
                                  </div>

                                  <div className="form-check mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="partnerOffers"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="partnerOffers"
                                    >
                                      Receive offers from our partners
                                    </label>
                                  </div>

                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="eventRecommendations"
                                      checked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="eventRecommendations"
                                    >
                                      Receive personalized event recommendations
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Save Button */}
                          <div className="d-flex justify-content-end mt-4">
                            <button
                              className="btn btn-primary"
                              aria-label="Save notification preferences"
                            >
                              <i className="bi bi-save me-2"></i> Save
                              Preferences
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Localization Tab - Improved with better labels */}
              <div
                className="tab-pane fade"
                id="v-pills-localization"
                role="tabpanel"
                aria-labelledby="v-pills-localization-tab"
                tabIndex="0"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <div className="card mb-4">
                        <div className="card-header bg-primary text-white">
                          <h5 className="mb-0">
                            <i className="bi bi-globe me-2"></i> Language &
                            Region Settings
                          </h5>
                          <p className="mb-0 small">
                            Customize your language, timezone, and currency
                            preferences
                          </p>
                        </div>
                        <div className="card-body">
                          {/* Timezone Setting */}
                          <section aria-labelledby="timezoneSettingsHeading">
                            <div className="mb-4">
                              <h5 id="timezoneSettingsHeading" className="mb-3">
                                <i className="bi bi-clock me-2"></i> Timezone
                                Settings
                              </h5>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="timezoneSelect"
                                      className="form-label"
                                    >
                                      Select Your Timezone
                                    </label>
                                    <select
                                      className="form-select"
                                      id="timezoneSelect"
                                    >
                                      <option value="">
                                        -- Select Timezone --
                                      </option>
                                      <option value="ET" selected>
                                        Eastern Time (ET)
                                      </option>
                                      <option value="CT">
                                        Central Time (CT)
                                      </option>
                                      <option value="MT">
                                        Mountain Time (MT)
                                      </option>
                                      <option value="PT">
                                        Pacific Time (PT)
                                      </option>
                                      <option value="GMT">
                                        Greenwich Mean Time (GMT)
                                      </option>
                                      <option value="CET">
                                        Central European Time (CET)
                                      </option>
                                      <option value="AEST">
                                        Australian Eastern Time (AEST)
                                      </option>
                                    </select>
                                  </div>
                                  <div className="form-text">
                                    All event times will be displayed in your
                                    selected timezone.
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="card bg-light">
                                    <div className="card-body">
                                      <h6 className="card-title">
                                        <i className="bi bi-info-circle me-2"></i>
                                        Current Time
                                      </h6>
                                      <p className="mb-1">
                                        Your timezone:{" "}
                                        <strong>Eastern Time (ET)</strong>
                                      </p>
                                      <p className="mb-0">
                                        Current time:{" "}
                                        <strong>
                                          {new Date().toLocaleString()}
                                        </strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Language Setting */}
                          <section aria-labelledby="languageSettingsHeading">
                            <div className="mb-4">
                              <h5 id="languageSettingsHeading" className="mb-3">
                                <i className="bi bi-translate me-2"></i>{" "}
                                Language Preferences
                              </h5>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="languageSelect"
                                      className="form-label"
                                    >
                                      Preferred Language
                                    </label>
                                    <select
                                      className="form-select"
                                      id="languageSelect"
                                    >
                                      <option value="en" selected>
                                        English
                                      </option>
                                      <option value="es">
                                        Español (Spanish)
                                      </option>
                                      <option value="fr">
                                        Français (French)
                                      </option>
                                      <option value="de">
                                        Deutsch (German)
                                      </option>
                                      <option value="zh">中文 (Chinese)</option>
                                      <option value="ja">
                                        日本語 (Japanese)
                                      </option>
                                      <option value="ar">
                                        العربية (Arabic)
                                      </option>
                                    </select>
                                  </div>
                                  <div className="form-text">
                                    This will change the language of the
                                    interface.
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="card bg-light">
                                    <div className="card-body">
                                      <h6 className="card-title">
                                        <i className="bi bi-info-circle me-2"></i>
                                        Language Preview
                                      </h6>
                                      <p className="mb-0">
                                        Current language:{" "}
                                        <strong>English</strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Currency Setting */}
                          <section aria-labelledby="currencySettingsHeading">
                            <div className="mb-4">
                              <h5 id="currencySettingsHeading" className="mb-3">
                                <i className="bi bi-currency-exchange me-2"></i>{" "}
                                Currency Settings
                              </h5>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="currencySelect"
                                      className="form-label"
                                    >
                                      Preferred Currency
                                    </label>
                                    <select
                                      className="form-select"
                                      id="currencySelect"
                                    >
                                      <option value="USD" selected>
                                        US Dollar (USD)
                                      </option>
                                      <option value="EUR">Euro (EUR)</option>
                                      <option value="GBP">
                                        British Pound (GBP)
                                      </option>
                                      <option value="JPY">
                                        Japanese Yen (JPY)
                                      </option>
                                      <option value="CAD">
                                        Canadian Dollar (CAD)
                                      </option>
                                      <option value="AUD">
                                        Australian Dollar (AUD)
                                      </option>
                                      <option value="CNY">
                                        Chinese Yuan (CNY)
                                      </option>
                                    </select>
                                  </div>
                                  <div className="form-text">
                                    All prices will be displayed in your
                                    selected currency.
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="card bg-light">
                                    <div className="card-body">
                                      <h6 className="card-title">
                                        <i className="bi bi-info-circle me-2"></i>
                                        Currency Preview
                                      </h6>
                                      <p className="mb-0">
                                        Current currency:{" "}
                                        <strong>US Dollar (USD)</strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Save Settings Button */}
                          <div className="d-flex justify-content-end mt-4">
                            <button
                              className="btn btn-primary me-2"
                              aria-label="Save language and region settings"
                            >
                              <i className="bi bi-save me-2"></i> Save Settings
                            </button>
                            <button
                              className="btn btn-outline-secondary"
                              aria-label="Reset to default settings"
                            >
                              Reset to Defaults
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Management Tab - Improved with better warnings */}
              <div
                className="tab-pane fade"
                id="v-pills-accmng"
                role="tabpanel"
                aria-labelledby="v-pills-accmng-tab"
                tabIndex="0"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <div className="card mb-4">
                        <div className="card-header bg-primary text-white">
                          <h5 className="mb-0">
                            <i className="bi bi-gear me-2"></i> Account Settings
                          </h5>
                          <p className="mb-0 small">
                            Manage your account security and preferences
                          </p>
                        </div>
                        <div className="card-body">
                          {/* Account Information Section */}
                          <section aria-labelledby="accountInfoHeading">
                            <div className="mb-5">
                              <h5 id="accountInfoHeading" className="mb-4">
                                <i className="bi bi-person-circle me-2"></i>{" "}
                                Account Information
                              </h5>
                              <div className="row mb-4">
                                <div className="col-md-6">
                                  <div className="card">
                                    <div className="card-body">
                                      <h6 className="card-title">
                                        <i className="bi bi-person-badge me-2"></i>
                                        Basic Information
                                      </h6>
                                      <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                          <span>Account Status</span>
                                          <span className="badge bg-success">
                                            Active
                                          </span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                          <span>Member Since</span>
                                          <span>January 15, 2022</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                          <span>Last Login</span>
                                          <span>Today, 10:30 AM</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="card">
                                    <div className="card-body">
                                      <h6 className="card-title">
                                        <i className="bi bi-shield-lock me-2"></i>
                                        Security
                                      </h6>
                                      <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                          <span>Password</span>
                                          <button
                                            className="btn btn-sm btn-outline-primary"
                                            aria-label="Change password"
                                          >
                                            Change
                                          </button>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                          <span>Two-Factor Authentication</span>
                                          <button
                                            className="btn btn-sm btn-outline-secondary"
                                            aria-label="Enable two-factor authentication"
                                          >
                                            Enable
                                          </button>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                          <span>Connected Devices</span>
                                          <button
                                            className="btn btn-sm btn-outline-secondary"
                                            aria-label="Manage connected devices"
                                          >
                                            Manage
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Account Actions Section */}
                          <section aria-labelledby="accountActionsHeading">
                            <div>
                              <h5
                                id="accountActionsHeading"
                                className="mb-4 text-danger"
                              >
                                <i className="bi bi-exclamation-triangle me-2"></i>{" "}
                                Account Actions
                              </h5>
                              <div className="card border-danger">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                      <h6>
                                        <i className="bi bi-pause-circle me-2"></i>
                                        Deactivate Account
                                      </h6>
                                      <p className="text-muted small">
                                        Temporarily disable your account. You
                                        can reactivate it later by logging in.
                                      </p>
                                      <button
                                        className="btn btn-outline-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deactivateAccountModal"
                                        aria-label="Deactivate account"
                                      >
                                        Deactivate Account
                                      </button>
                                    </div>
                                    <div className="col-md-6">
                                      <h6>
                                        <i className="bi bi-trash3 me-2"></i>
                                        Delete Account
                                      </h6>
                                      <p className="text-muted small">
                                        Permanently delete your account and all
                                        associated data. This action cannot be
                                        undone.
                                      </p>
                                      <button
                                        className="btn btn-outline-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteAccountModal"
                                        aria-label="Delete account"
                                      >
                                        Delete Account
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deactivate Account Modal */}
                <div
                  className="modal fade"
                  id="deactivateAccountModal"
                  tabIndex="-1"
                  aria-hidden="true"
                  aria-labelledby="deactivateAccountModalLabel"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header bg-warning text-dark">
                        <h5
                          className="modal-title"
                          id="deactivateAccountModalLabel"
                        >
                          <i className="bi bi-exclamation-triangle-fill me-2"></i>
                          Confirm Account Deactivation
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p>
                          Are you sure you want to deactivate your account? Your
                          profile will be hidden and you won't be able to access
                          most features until you reactivate.
                        </p>
                        <div className="mb-3">
                          <label
                            htmlFor="deactivateReason"
                            className="form-label"
                          >
                            Reason for deactivation (optional):
                          </label>
                          <select className="form-select" id="deactivateReason">
                            <option value="">Select a reason</option>
                            <option value="privacy">Privacy concerns</option>
                            <option value="not_using">
                              I'm not using the service
                            </option>
                            <option value="temporary">Temporary break</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="deactivateConfirm"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="deactivateConfirm"
                          >
                            I understand that I can reactivate my account by
                            logging in
                          </label>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                          aria-label="Cancel deactivation"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning"
                          aria-label="Confirm account deactivation"
                        >
                          Confirm Deactivation
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delete Account Modal */}
                <div
                  className="modal fade"
                  id="deleteAccountModal"
                  tabIndex="-1"
                  aria-hidden="true"
                  aria-labelledby="deleteAccountModalLabel"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header bg-danger text-white">
                        <h5
                          className="modal-title"
                          id="deleteAccountModalLabel"
                        >
                          <i className="bi bi-exclamation-triangle-fill me-2"></i>
                          Confirm Account Deletion
                        </h5>
                        <button
                          type="button"
                          className="btn-close btn-close-white"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="alert alert-danger" role="alert">
                          <h6 className="alert-heading">
                            This action cannot be undone!
                          </h6>
                          <p className="mb-0">
                            All your data, including events, tickets, and
                            payment information will be permanently deleted.
                          </p>
                        </div>
                        <p>To confirm, please enter your password:</p>
                        <div className="mb-3">
                          <label
                            htmlFor="deletePassword"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="deletePassword"
                            placeholder="Enter your password"
                          />
                        </div>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="deleteConfirm"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="deleteConfirm"
                          >
                            I understand that all my data will be permanently
                            deleted and this action cannot be reversed
                          </label>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                          aria-label="Cancel account deletion"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          aria-label="Permanently delete account"
                        >
                          Permanently Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAdminPanel;
