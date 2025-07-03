import React from "react";
import EventDetailPreview from "./pages/EventDetailPreview";
import AllEvents from "./pages/AllEvents";
import Navbar1 from "./universal/navbar1";
import Footer from "./universal/Footer";
import RegistrationStep1 from "./pages/RegistrationStep1";
import RegistrationStep2 from "./pages/RegistrationStep2";
import UserAdmin from "./pages/UserAdmin";
import Userlogin from "./pages/UserLogin";
import Registration from "./pages/Registration";
import UserAdminPanel from "./pages/UserAdminPanel";
import UserLoginv2 from "./pages/UserLoginv2";

const App = () => {
  return (
    <>
      <Navbar1 />
      <UserLoginv2 />
      <UserAdminPanel />
      <Registration />
      <Userlogin />
      <EventDetailPreview />
      <RegistrationStep1 />
      <RegistrationStep2 />
      <UserAdmin />
      <Footer />
    </>
  );
};

export default App;
