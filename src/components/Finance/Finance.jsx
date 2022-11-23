import React from "react";
import Tasklist from "/icons/task list.png";
import Pay from "/icons/pay.png";
import Payroll from "/images/Payroll.jpg";
import PayrollMobile from "/images/mobile-Payroll.jpg";
import "../../styles/css/Finance.css";

const Finance = () => {
  return (
    <section className="finance">
      <div className="box-layout">
        <div className="heading">
          <h2 className="title">Finance</h2>
          <p className="details">
            Generate invoices, track expenditure, and manage complex payrolls
            for multiple teams and companies
          </p>
        </div>

        <div className="box">
          <div className="icon icon1">
            <img src={Tasklist} alt="tasklist icon" />
          </div>
          <h3 className="title">RE Vouchers</h3>
          <p className="details">
            Track and manage expenditure for multiple teams across your
            organisation using Resource Edge Vouchers
          </p>
        </div>
        <div className="box">
          <div className="icon icon2">
            <img src={Pay} alt="pay icon" />
          </div>
          <h3 className="title">Payroll</h3>
          <p className="details">
            Our easy to use systems takes away the pain of managing complex
            payrolls for organisations of all sizes.
          </p>
        </div>
      </div>

      <div className="frame">
        <picture>
          <source
            media="(max-width: 480px)"
            srcSet={PayrollMobile}
            alt="payroll image"
          />
          <source
            media="(min-width: 481px)"
            srcSet={Payroll}
            alt="payroll image"
          />
          <img src={Payroll} alt="payroll image" />
        </picture>
      </div>
    </section>
  );
};

export default Finance;
