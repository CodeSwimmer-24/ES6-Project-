import React from "react";

const withClass = (WrapperClass, className) => {
  return (props) => (
    <div className={className}>
      <WrapperClass {...props} />
    </div>
  );
};

export default withClass;

// {...props} -> Its means that to pass props without changing anything 