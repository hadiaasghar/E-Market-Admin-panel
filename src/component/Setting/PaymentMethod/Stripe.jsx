import React from "react";
import PaymentCard from "./PaymentMethodCard/PaymentCard";
import { FaCcStripe } from "react-icons/fa";
const Stripe = () => {
  const checkboxesConfig = [
    { id: "paytam", label: "Enabled Stripe" },

    // Add more checkboxes as needed
  ];

  const inputsConfig = [
    {
      htmlfor: "input2",
      InputTitle: "Stripe Key",
      type: "text",

      inputid: "input2",
      DefaultValue:
        "pk_test_51NkPbxSAGOXKK34mJifhj7tX0yFliZuFbnFbc2PLU8Q30ZHy4qMTD3t6kxeqll9H7HxiIrM92sDru9puTc4E3fpC00YyvEWUsl",
      InsertLable: "Insert Stripe Key",
    },
    {
      htmlfor: "input2",
      InputTitle: "Stripe Secret",
      type: "text",
      inputid: "input2",

      InsertLable: "Insert Stripe Secret",
      DefaultValue:
        "sk_test_51NkPbxSAGOXKK34mUxTKAMhiGhpD8jAqD4YZy9fbYxwl2yuheg0Z2irdcLEAu3YmHYEH8zWDKHyzNpqAFeaoPKlE00srTFf1bh",
    },
    // Add more inputs as needed
  ];
  return (
    <div>
      <PaymentCard
        title="Stripe"
        showTitle={true}
        titleicons={<FaCcStripe />}
        showInputs={true}
        inputsConfig={inputsConfig}
        showCheckboxes={true}
        checkboxesConfig={checkboxesConfig}
        showSettings={true}
        settingWidrow="Enable this option to allow Stripe as a payment method for restaurant/driver withdrawals."
        showCheckboxSetting={true}
        checkboxSettingLab="Enable Stripe"
        showCheckBoxHeading={true}
      />
      ;
    </div>
  );
};

export default Stripe;
