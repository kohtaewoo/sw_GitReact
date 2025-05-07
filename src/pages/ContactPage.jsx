import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>📞 연락처 페이지</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>📌 나의 연락처 정보</h3>
          <ContactInfo />
        </div>
        <div className="contact-card">
          <h3>📝 메세지 보내기</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
