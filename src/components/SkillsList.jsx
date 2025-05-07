import React from "react";

const SkillsList = ({ skills }) => {
  return (
    <div className="skills">
      <h3>보유 기술</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList; 