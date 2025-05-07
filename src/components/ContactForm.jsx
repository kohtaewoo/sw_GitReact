import React from "react";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div>
        <label>이름:</label>
        <input type="text" />
      </div>
      <div>
        <label>이메일:</label>
        <input type="email" />
      </div>
      <div>
        <label>메시지:</label>
        <textarea></textarea>
      </div>
      <button type="submit">보내기</button>
    </form>
  );
};

export default ContactForm; 