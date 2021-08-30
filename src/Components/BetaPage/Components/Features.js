import React from "react";
import Feature from "./Feature";

export default (props) => {
  return (
    <div className="featureBox">
      <Feature
        icon="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/ad2e7f73-o-saas-benefit-icon-01.svg"
        title="Understand every step of the way"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, pulvinar ac iaculis vel, varius eu arcu tor vestibulum."
      />
      <Feature
        icon="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/ad2e7f73-o-saas-benefit-icon-01.svg"
        title="Build faster with instant answers"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, pulvinar ac iaculis vel, varius eu arcu tor vestibulum."
      />
      <Feature
        icon="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/ad2e7f73-o-saas-benefit-icon-01.svg"
        title="Unlock insights for everyone"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, pulvinar ac iaculis vel, varius eu arcu tor vestibulum."
      />
    </div>
  );
};
