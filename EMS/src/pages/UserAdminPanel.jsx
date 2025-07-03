import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

const UserAdminPanel = () => {
  const [activeTab, setActiveTab] = useState("contact"); // Changed from "profile" to "contact"
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  // User data state
  const [userInfo, setUserInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, Country", // Added address field
    profileImage: "", // Added profileImage field
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [newEmail, setNewEmail] = useState("");

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "•••• •••• •••• 4242",
    expiry: "12/25",
    cvv: "•••",
    name: "John Doe",
  });

  const [tickets, setTickets] = useState([
    { id: 1, event: "Music Festival", date: "2023-10-15", quantity: 2 },
    { id: 2, event: "Tech Conference", date: "2023-11-20", quantity: 1 },
  ]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Change tab and auto-close sidebar on mobile
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // Form handlers
  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo((prev) => ({ ...prev, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    alert("Password change request submitted");
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    alert(`Email change request submitted to: ${newEmail}`);
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogout = () => {
    alert("Logging out...");
  };

  // Render the active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "contact": // Changed from "profile" to "contact"
        return (
          <div className="card mb-4">
            <div className="card-body">
              <form>
                {/* Profile Image Upload */}
                <div className="row mb-4">
                  <div className="col-md-6">
                    <label htmlFor="profileImage" className="form-label">
                      Profile Image
                    </label>
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        {userInfo.profileImage ? (
                          <img
                            src={userInfo.profileImage}
                            alt="Profile"
                            className="rounded-circle"
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <div
                            className="rounded-circle bg-secondary d-flex align-items-center justify-content-center"
                            style={{ width: "80px", height: "80px" }}
                          >
                            <i className="bi bi-person fs-4 text-white"></i>
                          </div>
                        )}
                      </div>
                      <div>
                        <input
                          type="file"
                          className="form-control"
                          id="profileImage"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={userInfo.firstName}
                      onChange={handleUserInfoChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={userInfo.lastName}
                      onChange={handleUserInfoChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleUserInfoChange}
                      disabled
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={userInfo.phone}
                      onChange={handleUserInfoChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="address"
                      name="address"
                      value={userInfo.address}
                      onChange={handleUserInfoChange}
                      rows="3"
                    />
                  </div>
                </div>
                <button type="button" className="btn btn-primary">
                  Update Information
                </button>
              </form>
            </div>
          </div>
        );
      case "password":
        return (
          <div className="card mb-4">
            <div className="card-body">
              <form onSubmit={handleSubmitPassword}>
                <div className="mb-3">
                  <label htmlFor="currentPassword" className="form-label">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="currentPassword"
                    name="current"
                    value={password.current}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    name="new"
                    value={password.new}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirm"
                    value={password.confirm}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        );
      case "email":
        return (
          <div className="card mb-4">
            <div className="card-body">
              <form onSubmit={handleSubmitEmail}>
                <div className="mb-3">
                  <label htmlFor="currentEmail" className="form-label">
                    Current Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="currentEmail"
                    value={userInfo.email}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="newEmail" className="form-label">
                    New Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="newEmail"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Request Email Change
                </button>
              </form>
            </div>
          </div>
        );
      case "payment":
        return (
          <div className="card mb-4">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    name="cardNumber"
                    value={cardDetails.cardNumber}
                    onChange={handleCardChange}
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="expiry" className="form-label">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="expiry"
                      name="expiry"
                      value={cardDetails.expiry}
                      onChange={handleCardChange}
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cvv"
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={handleCardChange}
                      placeholder="123"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="cardName" className="form-label">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardName"
                    name="name"
                    value={cardDetails.name}
                    onChange={handleCardChange}
                  />
                </div>
                <button type="button" className="btn btn-primary">
                  Update Card Details
                </button>
              </form>
            </div>
          </div>
        );
      case "tickets":
        return (
          <div className="card mb-4">
            <div className="card-body">
              {tickets.length > 0 ? (
                <div className="list-group">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="list-group-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h5 className="mb-1">{ticket.event}</h5>
                          <small className="text-muted">
                            Date: {ticket.date}
                          </small>
                        </div>
                        <div>
                          <span className="badge bg-primary rounded-pill me-2">
                            {ticket.quantity}{" "}
                            {ticket.quantity > 1 ? "Tickets" : "Ticket"}
                          </span>
                          <button className="btn btn-sm btn-outline-primary">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted">You don't have any tickets yet.</p>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Navigation */}
        <div
          className={`col-md-3 col-lg-2 bg-light sidebar ${
            sidebarOpen ? "d-block" : "d-none d-md-block"
          }`}
          style={{ minHeight: "100vh" }}
        >
          <div className="position-sticky pt-3">
            <div className="d-flex justify-content-between align-items-center px-3 mb-3">
              <h4>User Menu</h4>
              <button
                className="btn btn-link d-md-none"
                onClick={toggleSidebar}
              >
                <i className="bi bi-x ">Close</i>
              </button>
            </div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <button
                  className={`nav-link btn text-start ${
                    activeTab === "contact" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("contact")}
                >
                  <i className="bi bi-person me-2"></i>
                  Contact
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn text-start ${
                    activeTab === "password" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("password")}
                >
                  <i className="bi bi-lock me-2"></i>
                  Password
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn text-start ${
                    activeTab === "email" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("email")}
                >
                  <i className="bi bi-envelope me-2"></i>
                  Email
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn text-start ${
                    activeTab === "payment" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("payment")}
                >
                  <i className="bi bi-credit-card me-2"></i>
                  Payment
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn text-start ${
                    activeTab === "tickets" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("tickets")}
                >
                  <i className="bi bi-ticket-perforated me-2"></i>
                  Tickets
                </button>
              </li>
            </ul>
            <div className="mt-3 px-3">
              <button className="btn btn-danger w-100" onClick={handleLogout}>
                <i className="bi bi-box-arrow-left me-2"></i>
                Log Out
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main
          className={`col-md-9 col-lg-10 px-md-4 py-4 ${
            !sidebarOpen && isMobile ? "col-12" : ""
          }`}
        >
          {isMobile && !sidebarOpen && (
            <button className="btn btn-primary mb-3" onClick={toggleSidebar}>
              <i className="bi bi-list me-2"></i> Menu
            </button>
          )}

          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
            <h2>{getTabTitle(activeTab)}</h2>
          </div>

          {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

// Helper function to get tab title
const getTabTitle = (tab) => {
  switch (tab) {
    case "contact": // Changed from "profile" to "contact"
      return "Contact Information";
    case "password":
      return "Change Password";
    case "email":
      return "Change Email";
    case "payment":
      return "Payment Methods";
    case "tickets":
      return "My Tickets";
    default:
      return "Dashboard";
  }
};

export default UserAdminPanel;
