  
  
  =================Components Creation LifeCycle=======================

only available in class-based comp 

1.> constructor(props)
 
 -> Call super(props) Do- Set-up state

2.> getDerivedStateFromProps(props,state)

 -> Do- Sync state 

3.> render()

 -> Prepare and structure your JSX code 

4.> Render child components 

5.> componentDidMount() -> Important

  =================Components Update LifeCycle========================

  when props or state change 

  1.> getDerivedStateFromProps(props,state)
  2.> shouldComponentUpdate(nextProps, nextState) -> Imp & (react optimization)
  3.> render()
  4.> update child component props
  5.> getSnapShotBeforeUpdate(prevProps,prevState)
  6.> componentDidUpdate(prevProps,prevState,snapshot) -> Imp
  7.> componentWillUnmount(){
    The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.
  }

* shouldComponentUpdate(nextProps,nextState) {
    if(nextProps.person !== this.props.person ||
       nextProps.change !== this.props.change ||
       nextProps.click !== this.person.click
    ){
        return true;
    } else {
        return false
    }
}

======>>>>>> . $$$$ [PureComponent class ClassName extends PureComponent] => its just check implement shouldComponentUpdate to all the    component to check all props at once 


==================Alternate for LifeCycle Components in Function bases comp ======================

1.> useEffect() => {} Hook -> combines the functionality or use cases of all class based life LifeCycle in one hook 
  
   useEffect(() => {
    console.log("Use Effect")

    return () => The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.

   },[when its executes])

2.> React memo (react optimization)

use in function component in place of (shouldComponentUpdate)

export default React.memo(name) -> react will memories or store a snapshot of this component and only change when input get changed 


