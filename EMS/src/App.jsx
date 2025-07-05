import React from "react";
import EventDetailPreview from "./pages/EventDetailPreview";
import AllEvents from "./pages/AllEvents";
import Navbar1 from "./universal/navbar1";
import Footer from "./universal/Footer";
import RegistrationStep1 from "./pages/RegistrationStep1";
import RegistrationStep2 from "./pages/RegistrationStep2";
import Userlogin from "./pages/UserLogin";
import Registration from "./pages/Registration";
import UserAdminPanel from "./pages/UserAdminPanel";
import PaymentSuccess from "./components/PaymentSuccess";

const App = () => {
  return (
    <>
      <PaymentSuccess />
      <Navbar1 />
      <UserAdminPanel />
      <Userlogin />
      <Registration />
      <EventDetailPreview />
      <RegistrationStep1 />
      <RegistrationStep2 />
      <Footer />
    </>
  );
};

export default App;
