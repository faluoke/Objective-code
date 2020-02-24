import React from "react";

function Applicant(props) {
  return (
    <>
      <td className="applicant-name" rowSpan={props.skills.length}>
        {props.name}
      </td>
      <td rowSpan={props.skills.length}>
        <a href={`mailto:${props.email}`}>{props.email}</a>
      </td>
      <td rowSpan={props.skills.length}>
        <a href={`http://${props.website}`}>{props.website}</a>
      </td>
      <td>{props.skill.name}</td>
      <td rowSpan={props.skills.length}>{props.coverLetter}</td>
    </>
  );
}

export default Applicant;
