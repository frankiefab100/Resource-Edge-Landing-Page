import React from "react";
import Team from "/icons/team.png";
import Goal from "/icons/goal.png";
import Calendar from "/icons/calendar.png";
import EmployeeDirectory from "/images/Employee-directory.png";
import EmployeeDirectoryMobile from "/images/mobile-Employee.png";
import Box from "../Box/Box";
import "../../styles/css/HumanResource.css";

const HumanResource = () => {
  return (
    <section className="human-resource">
      <div className="heading">
        <h2 className="title">Human Resources</h2>
        <p className="text">
          Onboard new employees, manage the employee lifecycle <br />
          and measure employee performance.
        </p>
      </div>

      <div className="boxes">
        <Box
          iconId="icon1"
          icon={Team}
          heading="Employee Management"
          body="From Hiring & Onboarding to Retiring, the Resource Edge Employee
          Management module eliminates all the complexities & paperwork
          involved in managing your team."
        />
        <Box
          iconId="icon2"
          icon={Goal}
          heading="Performance Management"
          body="
          Manage and track employee performance with our easy-to-use tools for
          goal setting, performance agreements and performance reviews."
        />
        <Box
          iconId="icon3"
          icon={Calendar}
          heading="Paid Time Off"
          body="
          Employees can request for paid time off, vacations, sick leaves or
          educational leaves and get approvals all within Resource Edge. HR
          managers can equally ensure compliance."
        />
      </div>

      <div className="frame">
        <picture>
          <source
            media="(max-width: 480px)"
            srcSet={EmployeeDirectoryMobile}
            alt="Employee directory"
          />
          <source
            media="(min-width: 481px)"
            srcSet={EmployeeDirectory}
            alt="Employee directory"
          />
          <img src={EmployeeDirectory} alt="Employee directory" />
        </picture>
      </div>
    </section>
  );
};

export default HumanResource;
