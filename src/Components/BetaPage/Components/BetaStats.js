import React from "react";
import Feature from "./Feature";

export default () => {
  return (
    <div className="stats">
      <h1 className="stats__title">Product analytics answers your questions</h1>
      <p className="stats__description">
        Maecenas varius nunc a odio ultrices, non consectetur nunc scelerisque.
        Mauris nec condimentum est, id eleifend orci.
      </p>
      <div className="stats__featureList">
        <Feature
          icon="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/ad2e7f73-o-saas-benefit-icon-01.svg"
          title="Better understand you customers"
          description="Explain the features and what it acompolishes. What does your company offer that will improve or solve a problem?"
        />
        <Feature
          icon="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/ad2e7f73-o-saas-benefit-icon-01.svg"
          title="Better understand you customers"
          description="Explain the features and what it acompolishes. What does your company offer that will improve or solve a problem?"
        />
        <Feature
          icon="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/ad2e7f73-o-saas-benefit-icon-01.svg"
          title="Better understand you customers"
          description="Explain the features and what it acompolishes. What does your company offer that will improve or solve a problem?"
        />
      </div>
    </div>
  );
};
