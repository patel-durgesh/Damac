import React from "react";
import Navbar from "../../../components/Navbar/page.jsx";
import Header from "../../../components/Header/page.jsx";
import Amenities from "../../../components/Amenities/pages.jsx";
import Button from "../../../components/Buttons/page.jsx";
import Footer from "../../../components/Footer/page.jsx";

function page() {
  return (
    <div>
      <Navbar />
      <Header />
      <Amenities />
      <Button />
      <Footer />
    </div>
  );
}

export default page;
