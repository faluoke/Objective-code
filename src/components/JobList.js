import React from "react";
import Job from "./Job";

function JobList(props) {
  return (
    <>
      {props.jobs.map(job => {
        return (
          <Job
            key={job.id}
            applicants={props.applicants.filter(applicant => {
              return applicant.job_id === job.id;
            })}
            jobName={job.name}
            jobId={job.id}
            skills={props.skills}
          />
        );
      })}
    </>
  );
}

export default JobList;
