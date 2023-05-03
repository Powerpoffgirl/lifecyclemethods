import React, { Component } from "react";

export class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  // Life cycle 2

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponent");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleB componentDidUpdate");
  }

  render() {
    console.log("LifecycleB render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
