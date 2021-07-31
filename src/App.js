import React, { useState } from "react";
import "./App.css";
import DetailsForm from "./Components/DetailsForm";
import CreditCard from "./Components/CreditCard";

const inititalState = {
  number: "",
  name: "",
  expirymonth: "",
  expiryyear: "",
  cvc: "",
  focus: "",
  placeholders: { name: "AD SOYAB" }
};

export default function App() {
  const [details, setDetails] = useState(inititalState);
  const onDetailChangeHandler = newDetail => {
    setDetails({
      ...details,
      ...newDetail
    });
  };
  return (
    <div className="backdrop">
      <CreditCard details={details} />
      <DetailsForm
        onFormInputChange={onDetailChangeHandler}
        details={details}
      />
    </div>
  );
}
