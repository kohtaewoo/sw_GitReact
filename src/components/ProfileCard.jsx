import React from "react";
import doraImage from "../assets/dora.jpg";

const ProfileCard = () => {
  return (
    <div className="profile">
      <img src={doraImage} alt="프로필" />
      <div className="profile-info">
        <h3>이름: 고태우</h3>
        <p>안녕하세요! 저는 React를 좋아하는 개발자입니다.</p>
      </div>
    </div>
  );
};

export default ProfileCard; 