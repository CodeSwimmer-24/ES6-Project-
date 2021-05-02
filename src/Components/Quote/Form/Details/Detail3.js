import React from "react";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import { VscVerified } from "react-icons/vsc";
import Button from "@material-ui/core/Button";
function Detail3({ navigation }) {
  return (
    <div className="detail1__container">
      <h1>Get A Quote Now</h1>
      <p>It's Free and Faster. Your details will be secure with us.</p>
      <div className="detail3__body">
        <VscVerified className="detail3__icon" />
        <h3>
          Request submitted successfully. Thank you for your submission. We will
          contact with you very soon.
        </h3>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={() => navigation.next()}
        >
          View Profile
        </Button>
      </div>
    </div>
  );
}

export default Detail3;
