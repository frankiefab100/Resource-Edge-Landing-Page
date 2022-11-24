import React from "react";
import Tasklist from "/icons/task list.png";
import Pay from "/icons/pay.png";
import Payroll from "/images/Payroll.jpg";
import PayrollMobile from "/images/mobile-Payroll.jpg";
import Box from "../Box/Box";
import Frame from "../Frame/Frame";
import HeaderSection from "../HeaderSection/HeaderSection";
import "../../styles/css/Finance.css";

const Finance = () => {
  return (
    <section className="finance">
      <div className="box-layout">
        <HeaderSection
          header="Finance"
          text="  Generate invoices, track expenditure, and manage complex payrolls
        for multiple teams and companies"
        />

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

      <Frame
        mobile={PayrollMobile}
        desktop={Payroll}
        fallback={Payroll}
        altText="payroll"
      />
    </section>
  );
};

export default Finance;
