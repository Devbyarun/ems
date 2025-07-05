import React from "react";

const PaymentSuccess = () => {
  return (
    <div className="container mt-5">
      {/* Button to trigger modal - in a real app this would be triggered after payment */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#paymentSuccessModal"
      >
        Show Payment Success
      </button>

      {/* Payment Success Modal */}
      <div
        className="modal fade"
        id="paymentSuccessModal"
        tabIndex="-1"
        aria-labelledby="paymentSuccessModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title" id="paymentSuccessModalLabel">
                Payment Successful
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center py-4">
              <div className="mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="green"
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
              <h4 className="mb-3">Thank you for your payment!</h4>
              <p className="text-muted">
                Your transaction has been completed successfully. A receipt has
                been sent to your email.
              </p>
              <p className="text-muted mb-0">Transaction ID: #1234567890</p>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-success px-4"
                data-bs-dismiss="modal"
              >
                Continue Shopping
              </button>
              <button type="button" className="btn btn-outline-secondary px-4">
                View Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
