import React from "react";
import Sent from "/icons/sent 1.png";
import Briefcase from "/icons/briefcase.png";
import DirectReports from "/images/Travel-Direct-Reports.png";
import DirectReportsMobile from "/images/mobile-Travel.png";
import Box from "../Box/Box";
import "../../styles/css/AdminLogistics.css";

const AdminLogistics = () => {
  return (
    <section className="admin-logistics">
      <div className="box-layout">
        <div className="heading">
          <h2 className="title">Admin & Logistics</h2>
          <p className="details">
            Manage and track company assets as well as logistics for travelling
            employees
          </p>
        </div>

        <Box
          iconId="icon4"
          icon={Sent}
          heading="Travel & Logistics"
          body="Make travel requests, get approvals, and have access to travel
          information."
        />
        <Box
          iconId="icon5"
          icon={Briefcase}
          heading="Asset Management"
          body="Manage the acquisition, assignment, and disposition of assets
          seamlessly."
        />
      </div>

      <div className="frame">
        <picture>
          <source
            media="(max-width: 480px)"
            srcSet={DirectReportsMobile}
            alt="direct reports list"
          />
          <source
            media="(min-width: 481px)"
            srcSet={DirectReports}
            alt="direct reports list"
          />
          <img src={DirectReports} alt="direct reports list" />
        </picture>
      </div>
    </section>
  );
};

export default AdminLogistics;
