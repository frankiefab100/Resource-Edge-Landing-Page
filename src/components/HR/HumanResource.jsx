import React from "react";
import Team from "/icons/team.png";
import Goal from "/icons/goal.png";
import Calendar from "/icons/calendar.png";
import EmployeeDirectory from "/images/Employee-directory.png";
import EmployeeDirectoryMobile from "/images/mobile-Employee.png";
import Box from "../Box/Box";
import Frame from "../Frame/Frame";
import HeaderSection from "../HeaderSection/HeaderSection";
import "../../styles/css/HumanResource.css";

const HumanResource = () => {
  return (
    <section className="human-resource">
      <HeaderSection
        header="Human Resources"
        text="Onboard new employees, manage the employee lifecycle
        and measure employee performance."
      />

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

      <Frame
        mobile={EmployeeDirectoryMobile}
        desktop={EmployeeDirectory}
        fallback={EmployeeDirectory}
        altText="Employee directory"
      />
    </section>
  );
};

export default HumanResource;
