import React from "react";
import FeatureCard from "../components/FeatureCard";

const HomePage = () => {
  const features = [
    {
      title: "소개",
      description: "제 소개입니다.",
    },
    {
      title: "프로젝트",
      description: "제가 만든 프로젝트들 입니다.",
    },
    {
      title: "연락처",
      description: "저에게 연락하는 방법입니다.",
    },
    {
      title: "이메일",
      description: "제 이메일 주소입니다.",
    },
  ];

  return (
    <div className="home-container">
      <h2>환영합니다!</h2>
      <p>이 웹사이트는 React를 사용하여 만든 개인 포트폴리오입니다.</p>
      <p>2020112093 고태우</p>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
    
  );
};

export default HomePage;
