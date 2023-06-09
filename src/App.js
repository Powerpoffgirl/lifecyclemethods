import React, { Component } from "react";
// import LifecycleA from "./components/LifecycleA";
// import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
// import LifecycleB from "./components/LifecycleB";

export class App extends Component {
  render() {
    return (
      <div>
        {/* <LifecycleA /> */}
        {/* <FragmentDemo /> */}
        <Table />
      </div>
    );
  }
}

export default App;

/* LIFECYCLE METHODS

1. MOUNTING: When an instance of a component is being created and inserted into the DOM
constructor, static getDerivedStateFromProps, render and componentDidMount

i) Constructor: A special function that will get called whenever a new component is created.
  Initializing state & Binding event handlers.
  Do not cause side effects. Ex. HTTP requests.
  super(props) & Directly overwrite this.state

ii) static getDerivedStateFromProps: When the state of the component depends on changes in props over time.
  set the state & Do not cause side effects. Ex. HTTP requests.

iii) render(): Only required method. Read props & state and return JSX.
  Do not change state or interact with DOM or make ajax calls.
  Children components lifecycle methods are also executed.

iv) componentDidMount: Invoke immediately after a component and all its children components have been rendered to the DOM.
  Cause side effects. Ex. Interact with the DOM or perform any ajax calls to load data.
  
2. UPDATING: When a component is being re-rendered as a result of changes to either its props or state
static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate

i) static getDerivedStateFromProps (props, state): Method is called every time a component is re-rendered as
  set the state & do not cause side effects. Ex. HTTP requests

ii) shouldComponentUpdate(nextProps, nextState): Dictates if the component should re-render or not. 
  Performance optimization & do not cause side effects. Ex. HTTP requests

iii) render(): Only required method. Read props & state and return JSX.
  Do not change state or interact with DOM or make ajax calls.
  
iv) getSnapshotBeforeUpdate(prevProps, prevState): Called right before the changes from the virtual DOM are to be reflected in the DOM. 
  Capture some information from the DOM. This method will either return null or return a value.
  Returned value will be passed as the third parameter to the next method.

v) componentDidUpdate(prevProps, prevState, snapshot): Called after the render is finished in the re-render cycles. Causes side effects


3. UNMOUNTING: When a component is being removed from the DOM
componentWillUnmount: Method is invoked immediately before a component is unmounted and destroyed.
Cancelling any netowrk requests, removing event handlers, cancelling any subscriptions and also invalidating timers.
Don't call the setState method.

4. ERROR HANDLING: When there is an error during rendering, in a lifecycle method, or in the constructor of any child component
static getDerivedStateFromError and componentDidCatch: When there is an error during rendering, in a lifecycle method, or in the constructor of any
child component.

*/
