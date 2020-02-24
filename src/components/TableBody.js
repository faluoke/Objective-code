import React from "react";
import JobList from "./JobList";

function TableBody(props) {
  return (
    <tbody>
      <JobList
        applicants={props.applicants}
        jobs={props.jobs}
        skills={props.skills}
      />
    </tbody>
  );
}

export default TableBody;
