import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import "./Detail1.css";
function Detail1({ formData, setForm, navigation }) {
  const {
    companyName,
    companyWebsite,
    companyMail,
    companyContact,
    companyDetail,
  } = formData;
  return (
    <div className="detail1__container">
      <h1>Get A Quote Now</h1>
      <p>It's Free and Faster. Your details will be secure with us.</p>
      <TextField
        label="companyName"
        name="companyName"
        value={companyName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="companyWebsite"
        name="companyWebsite"
        value={companyWebsite}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="companyMail"
        name="companyMail"
        value={companyMail}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="companyContact"
        type="number"
        name="companyContact"
        value={companyContact}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      {/* <TextField
        label="companyDetail"
        name="companyDetail"
        value={companyDetail}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      /> */}
      <div className="nextbtn">
        <Button
          onClick={() => navigation.next()}
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
        >
          Next
          <KeyboardArrowRightIcon />
        </Button>
      </div>
    </div>
  );
}

export default Detail1;
