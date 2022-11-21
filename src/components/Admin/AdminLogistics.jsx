import React from "react";
import Sent from "/icons/sent 1.png";
import Briefcase from "/icons/briefcase.png";
import DirectReports from "/images/Travel-Direct-Reports.png";
import DirectReportsMobile from "/images/mobile-Travel.png";
import "../../styles/sass/css/AdminLogistics.css";

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

        <div className="box">
          <div className="icon icon1">
            <img src={Sent} alt="sent icon" />
          </div>
          <h3 className="title">Travel & Logistics</h3>
          <p className="details">
            Make travel requests, get approvals, and have access to travel
            information.
          </p>
        </div>
        <div className="box">
          <div className="icon icon2">
            <img src={Briefcase} alt="briefcase icon" />
          </div>
          <h3 className="title">Asset Management</h3>
          <p className="details">
            Manage the acquisition, assignment, and disposition of assets
            seamlessly.
          </p>
        </div>
      </div>

      <div className="frame">
        <picture>
          <source
            media="(max-width: 469px)"
            srcSet={DirectReportsMobile}
            alt="direct reports list"
          />
          <source
            media="(min-width: 470px)"
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
