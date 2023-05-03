import React, { Component } from "react";
import LifecycleA from "./components/LifecycleA";

export class App extends Component {
  render() {
    return (
      <div>
        <LifecycleA />
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


3. UNMOUNTING: When a component is being removed from the DOM
componentWillUnmount

4. ERROR HANDLING: When there is an error during rendering, in a lifecycle method, or in the constructor of any child component
static getDerivedStateFromError and componentDidCatch

*/
