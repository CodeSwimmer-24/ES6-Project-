import React from "react";
import Detail1 from "./Details/Detail1";
import Detail2 from "./Details/Detail2";
import Detail3 from "./Details/Detail3";
import { useForm, useStep } from "react-hooks-helper";

const defaultData = {
  companyName: "",
  companyWebsite: "",
  companyMail: "",
  companyDetail: "",
  companyContact: "",
  companyMonthlySale: "",
  companyAnuallySale: "",
  minimumCustomer: "",
  companyTurnOver: "",
};
const steps = [{ id: "Detail1" }, { id: "Detail2" }, { id: "Detail3" }];

function Form() {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const props = { formData, setForm, navigation };
  switch (step.id) {
    case "Detail1":
      return <Detail1 {...props} />;
    case "Detail2":
      return <Detail2 {...props} />;
    case "Detail3":
      return <Detail3 {...props} />;
  }
  return (
    <div className="formcontainer">
      <h1>From</h1>
    </div>
  );
}

export default Form;
