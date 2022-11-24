import React from "react";
import Tasklist from "/icons/task list.png";
import Pay from "/icons/pay.png";
import Payroll from "/images/Payroll.jpg";
import PayrollMobile from "/images/mobile-Payroll.jpg";
import Box from "../Box/Box";
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

        <Box
          iconId="icon6"
          icon={Tasklist}
          heading="RE Vouchers"
          body="Track and manage expenditure for multiple teams across your
          organisation using Resource Edge Vouchers."
        />
        <Box
          iconId="icon7"
          icon={Pay}
          heading="Payroll"
          body="  Our easy to use systems takes away the pain of managing complex
          payrolls for organisations of all sizes."
        />
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
