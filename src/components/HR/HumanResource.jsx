import React from "react";
import Team from "/icons/team.png";
import Goal from "/icons/goal.png";
import Calendar from "/icons/calendar.png";
import EmployeeDirectory from "/images/Employee-directory.png";
import EmployeeDirectoryMobile from "/images/mobile-Employee.png";
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
        <div className="box">
          <div className="icon icon1">
            <img src={Team} alt="team icon" />
          </div>
          <h3 className="title">Employee Management</h3>
          <p className="details">
            From Hiring & Onboarding to Retiring, the Resource Edge Employee
            Management module eliminates all the complexities & paperwork
            involved in managing your team.
          </p>
        </div>
        <div className="box">
          <div className="icon  icon2">
            <img src={Goal} alt="goal icon" />
          </div>
          <h3 className="title">Performance Management</h3>
          <p className="details">
            Manage and track employee performance with our easy-to-use tools for
            goal setting, performance agreements and performance reviews.
          </p>
        </div>
        <div className="box">
          <div className="icon  icon3">
            <img src={Calendar} alt="calendar icon" />
          </div>
          <h3 className="title">Paid Time Off</h3>
          <p className="details">
            Employees can request for paid time off, vacations, sick leaves or
            educational leaves and get approvals all within Resource Edge. HR
            managers can equally ensure compliance.
          </p>
        </div>
      </div>

      <div className="frame">
        <picture>
          <source
            media="(max-width: 469px)"
            srcSet={EmployeeDirectoryMobile}
            alt="Employee directory"
          />
          <source
            media="(min-width: 470px)"
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
