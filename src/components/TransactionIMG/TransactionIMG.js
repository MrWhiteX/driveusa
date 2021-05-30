import React from "react";
import transactionMobile from "../../assets/transactionMobile.jpeg";

const TransactionIMG = () => {
  return (
    <section className="transaction">
      <div className="img__desktop"></div>
      <div className="img__mobile">
        <img src={transactionMobile} alt="" />
      </div>
    </section>
  );
};

export default TransactionIMG;
