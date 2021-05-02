import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
function Detail2({ formData, setForm, navigation }) {
  const {
    companyMonthlySale,
    companyAnuallySale,
    minimumCustomer,
    companyTurnOver,
  } = formData;
  return (
    <div className="detail1__container">
      <h1>Get A Quote Now</h1>
      <p>It's Free and Faster. Your details will be secure with us.</p>
      <TextField
        label="companyMonthlySale"
        name="companyMonthlySale"
        value={companyMonthlySale}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="companyAnuallySale"
        name="companyAnuallySale"
        type="number"
        value={companyAnuallySale}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="minimumCustomer"
        name="minimumCustomer"
        type="number"
        value={minimumCustomer}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="companyTurnOver"
        name="companyTurnOver"
        type="number"
        value={companyTurnOver}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div className="btn">
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: "1rem" }}
          onClick={() => navigation.previous()}
        >
          <ChevronLeftIcon /> Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={() => navigation("submit")}
          onClick={() => navigation.next()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Detail2;
