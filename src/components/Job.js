import React from "react";
import Applicant from "./Applicant";
import Skills from "./Skills";

function Job(props) {
  const totalSkillCount = [];
  const applicantSkillCount = [];
  const getFullSkillCount = () => {
    props.applicants.map(applicant => {
      props.skills.map(skill => {
        if (applicant.id === skill.applicant_id) {
          totalSkillCount.push(skill);
          return totalSkillCount.length;
        }
      });
    });
    console.log(applicantSkillCount);
  };

  const getApplicantSkillCount = () => {
    props.skills.map(skill => {
      if (skill.applicant_id === props.applicants[0].id) {
        applicantSkillCount.push(skill);
        return skill.name;
      }

      return false;
    });
  };

  getFullSkillCount();
  getApplicantSkillCount();
  const applicantsClone = [...props.applicants];
  const skillsClone = [...props.skills];
  applicantsClone.shift();
  skillsClone.shift();

  return (
    <>
      <tr className="job-name">
        <td rowSpan={totalSkillCount.length}>{props.jobName}</td>
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
          {props.skills
            .map(skill => {
              if (skill.applicant_id === props.applicants[0].id) {
                return skill.name;
              }
              return false;
            })
            .find(skill => {
              return skill;
            })}
        </td>
        <td rowSpan={applicantSkillCount.length}>
          {props.applicants[0].cover_letter}
        </td>
      </tr>

      {skillsClone.map(skill => {
        if (skill.applicant_id === props.applicants[0].id) {
          debugger;
          return (
            <tr>
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
            <>
              <tr>
                <Applicant
                  key={applicant.id}
                  id={applicant.id}
                  name={applicant.name}
                  email={applicant.email}
                  website={applicant.website}
                  coverLetter={applicant.cover_letter}
                  jobId={props.jobId}
                  skills={props.skills.filter(skill => {
                    return skill.applicant_id === applicant.id;
                  })}
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
              {skillsClone.map(skill => {
                if (skill.applicant_id === applicant.id) {
                  return <Skills key={skill.id} skill={skill} />;
                }
                return false;
              })}
            </>
          );
        }
        return false;
      })}
    </>
  );
}

export default Job;
