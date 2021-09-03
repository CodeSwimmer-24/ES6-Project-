import React from "react";
import Feature from "./Feature";
import { Stats } from "./Stats.style";

export default () => {
  return (
    <Stats>
      <h1>Product analytics answers your questions</h1>
      <p>
        Maecenas varius nunc a odio ultrices, non consectetur nunc scelerisque.
        Mauris nec condimentum est, id eleifend orci.
      </p>
      <Feature
        class="listFeature"
        icon="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/ad2e7f73-o-saas-benefit-icon-01.svg"
        title="Better understand you customers"
        description="Explain the features and what it acompolishes. What does your company offer that will improve or solve a problem?"
      />
      <Feature
        class="listFeature"
        icon="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/ad2e7f73-o-saas-benefit-icon-01.svg"
        title="Better understand you customers"
        description="Explain the features and what it acompolishes. What does your company offer that will improve or solve a problem?"
      />
      <Feature
        class="listFeature"
        icon="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/ad2e7f73-o-saas-benefit-icon-01.svg"
        title="Better understand you customers"
        description="Explain the features and what it acompolishes. What does your company offer that will improve or solve a problem?"
      />
    </Stats>
  );
};
