import React from "react";
import Footer from "../../components/Footer/Footer";
import "./Contact.scss";

const Contact = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/15551234567");
  };

  const openMail = () => {
    window.open("mailto:user@example.com");
  };

  return (
    <div>
      <div className="contact container">
        <div className="form">
          <div className="form-txt">
            <h1>Contact Us</h1>
            <span>
              As you might expect of a company that began as a high-end
              interiors contractor, we pay strict attention.
            </span>
            {/* <h3>USA</h3>
            <p>195 E Parker Square Dr, Parker, CO 801 </p> <br />{" "}
            <p>+43 982-314-0958</p> */}
            <h3>India</h3>
            <p>
              HW95+C9C, Mhada Colony, Viman Nagar, Pune, Maharashtra
            </p> <br /> <p>411014</p>
            <br />
            <p onClick={openMail}> randommail@gmail.com</p>
            <br />
            <p onClick={openWhatsApp}> WA - +911234567890</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
