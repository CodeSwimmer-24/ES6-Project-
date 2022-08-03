############### React Update the DOM ################

<!-- ====== -->

<React.Fragment>
To wrap more than one parent div of JSX in one Fragment
</React.Fragment>

<!-- =========Higher Order Components ============= -->

Higher order components are the components thats wrap others components and does not contains its own logic
//// Usually a higher order components name start with With"any name".js

  <!-- // Way to write state when we are dependent on old state -->

    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1,
      };
    });

};

<!-- -------PROPS TYPE -------------- -->

{it use to pass correct props by defining props type and value.}

import PropTypes from "prop-types";

(after render or return statement)

FileName.propTypes = {
name: PropTypes.string,
age: PropTypes.number,
click: PropTypes.func,
}

<!-- React Ref -->

constructor(props){
super(props)
this.inputElementRef = React.createRef();
}

componentDidMount(){
this.inputElementRef.current.focus()
}

return (
<input key="123"
  ref={this.inputElementRef} 
  />
)

<!-- ### Ref in Hook -->

const xyz = () => {
const toggleButtonRef = useRef(null);

useEffect(() => {
toggleButtonRef.current.focus();
},[])

return (
<input key="123"
    ref={toggleButtonRef} 
    />
)
}

<!--  [[[[[[[[[[[[[    CONTEXT API    ]]]]]]]]]]]]]  -->

If we want to pass props from A to C without help of B then we use this context API

<!-- context.js  -->

import React from "React";

const authContext = React.createContext({
authenticated: false,
login: () => {},
});

export default authContext;

<!-- App.js -->

import context from "./context";

[[File in which we have to use context provider we have to wrap the component in which we have to pass the props]]

<Context.Provider value={{authenticated: this.state.authenticated,
                         login: this.loginHandle}}>
<Cockpit title={this.props.title}
    name={this.props.name} />
</Context.provider>

<!-- Persons.js -->

import context from "./context";

<Context.Consumer>
{(context) => context.authenticated ? <p>authenticated</p> : <p>Please authenticated</p> }
</Context.Consumer>

<!-- Cockpit.js -->

import context from "./context";

<Context.Consumer>
{(context) => {
<button onClick={context.login}>Login</button>
}}
</Context.Consumer>
