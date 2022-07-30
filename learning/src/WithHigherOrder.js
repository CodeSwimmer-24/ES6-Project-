// import React from "react";

// function WithHigherOrder(props) {
//   return <div className={props.classes}>{props.children}</div>;
// }

// export default WithHigherOrder;

// Its a components which is not a functional components but normal function class
import React from "react";

function WithHigherOrder(WrappedComponent, classes) {
  return (props) => (
    <div className={classes}>
      <WrappedComponent {...props} />
    </div>
  );
}

export default WithHigherOrder;
