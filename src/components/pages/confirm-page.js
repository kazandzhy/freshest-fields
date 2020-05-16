import React from "react";
import Alert from "../alert";
import PurchasedItems from "../purchased-items";

const ConfirmPage = () => {
  return (
    <div className="confirm-page">
      <Alert />
      <PurchasedItems />
    </div>
  );
};

export default ConfirmPage;
