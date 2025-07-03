import React, { useState } from "react";

const UserAdminPanel = () => {
  // User information state
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Payment information state
  const [payment, setPayment] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  // Form validation state
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPayment((prev) => ({ ...prev, [name]: value }));
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!user.firstName) newErrors.firstName = "First name is required";
    if (!user.lastName) newErrors.lastName = "Last name is required";
    if (!user.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!user.phone) newErrors.phone = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Here you would typically send data to your backend
      console.log("Form submitted:", { user, payment });
    }
  };

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-white border-bottom">
                <h2 className="mb-0">My Account Settings</h2>
                <p className="text-muted mb-0">
                  Manage your profile and security settings
                </p>
              </div>

              <div className="card-body">
                <form
                  onSubmit={handleSubmit}
                  className="needs-validation"
                  noValidate
                >
                  {/* Personal Information Section */}
                  <div className="mb-4">
                    <h5 className="mb-3 border-bottom pb-2">
                      Personal Information
                    </h5>

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.firstName ? "is-invalid" : ""
                          }`}
                          id="firstName"
                          name="firstName"
                          value={user.firstName}
                          onChange={handleChange}
                          required
                        />
                        {errors.firstName && (
                          <div className="invalid-feedback">
                            {errors.firstName}
                          </div>
                        )}
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.lastName ? "is-invalid" : ""
                          }`}
                          id="lastName"
                          name="lastName"
                          value={user.lastName}
                          onChange={handleChange}
                          required
                        />
                        {errors.lastName && (
                          <div className="invalid-feedback">
                            {errors.lastName}
                          </div>
                        )}
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          id="email"
                          name="email"
                          value={user.email}
                          onChange={handleChange}
                          required
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className={`form-control ${
                            errors.phone ? "is-invalid" : ""
                          }`}
                          id="phone"
                          name="phone"
                          value={user.phone}
                          onChange={handleChange}
                          required
                        />
                        {errors.phone && (
                          <div className="invalid-feedback">{errors.phone}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Password Section */}
                  <div className="mb-4">
                    <h5 className="mb-3 border-bottom pb-2">Change Password</h5>

                    <div className="row g-3">
                      <div className="col-12">
                        <label htmlFor="currentPassword" className="form-label">
                          Current Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="currentPassword"
                          name="password"
                          value={user.password}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="newPassword" className="form-label">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="newPassword"
                          name="newPassword"
                          value={user.newPassword}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="confirmPassword" className="form-label">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={user.confirmPassword}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Information Section */}
                  <div className="mb-4">
                    <h5 className="mb-3 border-bottom pb-2">Payment Methods</h5>

                    <div className="row g-3">
                      <div className="col-12">
                        <label htmlFor="cardNumber" className="form-label">
                          Card Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cardNumber"
                          name="cardNumber"
                          value={payment.cardNumber}
                          onChange={handlePaymentChange}
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="col-md-4">
                        <label htmlFor="expiryDate" className="form-label">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="expiryDate"
                          name="expiryDate"
                          value={payment.expiryDate}
                          onChange={handlePaymentChange}
                          placeholder="MM/YY"
                        />
                      </div>

                      <div className="col-md-4">
                        <label htmlFor="cvv" className="form-label">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cvv"
                          name="cvv"
                          value={payment.cvv}
                          onChange={handlePaymentChange}
                          placeholder="123"
                        />
                      </div>

                      <div className="col-md-4">
                        <label htmlFor="cardName" className="form-label">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cardName"
                          name="cardName"
                          value={payment.cardName}
                          onChange={handlePaymentChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Form Submission */}
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <button type="button" className="btn btn-outline-danger">
                      Delete Account
                    </button>

                    <div>
                      <button type="submit" className="btn btn-primary px-4">
                        Save Changes
                      </button>
                    </div>
                  </div>

                  {isSubmitted && (
                    <div className="alert alert-success mt-3">
                      Your changes have been saved successfully!
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAdminPanel;
