import React, { Component } from "react";

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
  }

  render() {
    return <div>LifecycleA</div>;
  }
}

export default LifecycleA;
