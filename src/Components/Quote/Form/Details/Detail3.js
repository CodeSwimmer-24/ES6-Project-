import React from "react";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import { VscVerified } from "react-icons/vsc";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetail from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ListItemText from "@material-ui/core/ListItemText";

function Detail3({ formData, navigation }) {
  const { go } = navigation;
  const {
    companyName,
    companyWebsite,
    companyMail,
    companyContact,
    companyDetail,
    companyMonthlySale,
    companyAnuallySale,
    minimumCustomer,
    companyTurnOver,
  } = formData;
  return (
    <div className="detail1__container">
      <h1>Get A Quote Now</h1>
      <p>It's Free and Faster. Your details will be secure with us.</p>
      <div className="detail3__body">
        <RenderAccordion
          summary="About Company"
          go={go}
          details={[
            { "Company Name": companyName },
            { "Company Website": companyWebsite },
            { "Company Mail": companyMail },
          ]}
        />
        <RenderAccordion
          summary="Company Sales"
          go={go}
          details={[
            { MonthelySales: companyMonthlySale },
            { AnualSale: companyAnuallySale },
          ]}
        />
        <RenderAccordion
          summary="Comapny Details"
          go={go}
          details={[
            { MinCustomer: minimumCustomer },
            { TurnOver: companyTurnOver },
          ]}
        />
        <VscVerified className="detail3__icon" />
        <h3>
          Request submitted successfully. Thank you for your submission. We will
          contact with you very soon.
        </h3>
      </div>
    </div>
  );
}

export default Detail3;

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      {summary}
    </AccordionSummary>
    <AccordionDetail>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return (
            <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
          );
        })}
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        >
          <EditIcon />
        </IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
);
