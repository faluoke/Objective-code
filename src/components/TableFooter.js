import React from "react";

function TableFooter(props) {
  const uniqueSkills = [];
  const uniqueSkillCount = () => {
    props.skills.map(skill => {
      if (!uniqueSkills.includes(skill.name)) {
        uniqueSkills.push(skill.name);
        return uniqueSkills.length;
      }
      return false;
    });
  };
  uniqueSkillCount();
  return (
    <tfoot>
      <tr>
        <td colSpan="6">{`${props.applicants.length} Applicants, ${uniqueSkills.length} Unique Skills`}</td>
      </tr>
    </tfoot>
  );
}

export default TableFooter;
