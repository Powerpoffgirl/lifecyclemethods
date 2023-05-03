import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

export class LifecycleA extends Component {
  // Life cycle 1
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  // Life cycle 2

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponent");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Jyoti",
    });
  };

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
