import React from "react";
import Applicant from "./Applicant";
import Skills from "./Skills";

function Job(props) {
  const totalSkillCount = [];
  const applicantSkillCount = [];
  // used to get row count for job-name row
  const getFullSkillCount = () => {
    props.applicants.map(applicant => {
      props.skills.map(skill => {
        if (applicant.id === skill.applicant_id) {
          totalSkillCount.push(skill);
          return totalSkillCount.length;
        }
        return false;
      });
      return false;
    });
  };
  // used to get row count for applicant-name, email, website & coverletter rows
  const getApplicantSkillCount = () => {
    props.skills.map(skill => {
      if (skill.applicant_id === props.applicants[0].id) {
        applicantSkillCount.push(skill);
        return skill.name;
      }

      return false;
    });
  };
  //calls the two count functions above
  getFullSkillCount();
  getApplicantSkillCount();
  // creates a clone of the applicants & removes the index 1
  // because data in index 1 is already shown in job-name class
  const applicantsClone = [...props.applicants];
  const skillsClone = [...props.skills];
  applicantsClone.shift();

  return (
    <>
      {/* displays job-name & first applicant information */}
      <tr>
        <td className="job-name" rowSpan={totalSkillCount.length}>
          {props.jobName}
        </td>
        <td className="applicant-name" rowSpan={applicantSkillCount.length}>
          {props.applicants[0].name}
        </td>
        <td rowSpan={applicantSkillCount.length}>
          {props.applicants[0].email}
        </td>
        <td rowSpan={applicantSkillCount.length}>
          {props.applicants[0].website}
        </td>
        <td>
          {/* gets first skill mapping through skills prop and display on ui */}
          {props.skills
            .map(skill => {
              if (skill.applicant_id === props.applicants[0].id) {
                return skill.name;
              }
              return false;
            })
            .find(skill => {
              skillsClone.shift();
              return skill;
            })}
        </td>
        <td rowSpan={applicantSkillCount.length}>
          {props.applicants[0].cover_letter}
        </td>
      </tr>
      {/* displays the remaining skill(s) mapping through first applicant */}
      {skillsClone.map(skill => {
        if (skill.applicant_id === props.applicants[0].id) {
          return (
            <tr key={skill.id}>
              <td>{skill.name}</td>
            </tr>
          );
        }
        return false;
      })}

      {applicantsClone.map(applicant => {
        const skillsClone = [...props.skills];
        if (props.jobId === applicant.job_id) {
          return (
            <React.Fragment key={applicant.id}>
              <tr>
                {/* renders an appicant component */}
                <Applicant
                  key={applicant.id}
                  id={applicant.id}
                  name={applicant.name}
                  email={applicant.email}
                  website={applicant.website}
                  coverLetter={applicant.cover_letter}
                  jobId={props.jobId}
                  // all skills pertaining to this applicant
                  // used for table row count
                  skills={props.skills.filter(skill => {
                    return skill.applicant_id === applicant.id;
                  })}
                  // first skill for applicant
                  skill={props.skills
                    .map(skill => {
                      if (skill.applicant_id === applicant.id) {
                        return skill;
                      }
                      return false;
                    })
                    .find(skill => {
                      skillsClone.shift();
                      return skill;
                    })}
                />
              </tr>
              {/* displays all remaining skills from applicant */}
              {skillsClone.map(skill => {
                if (skill.applicant_id === applicant.id) {
                  return <Skills key={skill.id} skill={skill} />;
                }
                return false;
              })}
            </React.Fragment>
          );
        }
        return false;
      })}
    </>
  );
}

export default Job;
