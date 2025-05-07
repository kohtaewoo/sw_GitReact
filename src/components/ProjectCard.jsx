import React from "react";

/**
 * 프로젝트 카드 컴포넌트
 * @param {string} title - 프로젝트의 제목
 * @param {string} description - 프로젝트의 설명
 * @param {string} image - 프로젝트의 이미지 URL (선택적)
 * @param {string} link - 외부 링크 (선택적)
 * @param {function} onClick - 내부 이동 함수 (선택적)
 */
const ProjectCard = ({ title, description, image, link, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // 내부 페이지 이동
    }
  };

  return (
    <div
      className="project-card"
      onClick={handleClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <h3>{title}</h3>

      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}

      <p>{description}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          onClick={(e) => e.stopPropagation()} // 카드 클릭 방지
        >
          프로젝트 보기
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
