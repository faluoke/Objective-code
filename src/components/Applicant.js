import React from "react";

function Applicant(props) {
  return (
    <>
      <td className="applicant-name" rowSpan={props.skills.length}>
        {props.name}
      </td>
      <td rowSpan={props.skills.length}>{props.email}</td>
      <td rowSpan={props.skills.length}>{props.website}</td>
      <td>{props.skill.name}</td>
      <td rowSpan={props.skills.length}>{props.coverLetter}</td>
    </>
  );
}

export default Applicant;
