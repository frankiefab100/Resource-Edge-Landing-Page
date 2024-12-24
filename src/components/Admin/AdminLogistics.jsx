import React from "react";
import Sent from "/icons/sent 1.png";
import Briefcase from "/icons/briefcase.png";
import DirectReports from "/images/Travel-Direct-Reports.png";
import DirectReportsMobile from "/images/mobile-Travel.png";
import Box from "../Box/Box";
import Frame from "../Frame/Frame";
import HeaderSection from "../HeaderSection/HeaderSection";
import "../../styles/css/AdminLogistics.css";

const AdminLogistics = () => {
  return (
    <section className="admin-logistics">
      <div className="box-layout">
        <HeaderSection
          header="Admin & Logistics"
          text="Manage and track company assets as well as logistics for travelling
          employees."
        />

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

      <Frame
        mobile={DirectReportsMobile}
        desktop={DirectReports}
        fallback={DirectReports}
        altText="direct reports list"
      />
    </section>
  );
};

export default AdminLogistics;
