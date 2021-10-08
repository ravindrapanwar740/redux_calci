import React, { Component } from "react";
import PropTypes from "prop-types";
import Action from "./Action";

class UI extends Component {
  constructor(props) {
    super(props);

    this.state = {
     count:0
    
  };
  }
//   check() {
// this.setState=({
//   count:this.state.count+1
// })
//   }
  // function msg() {
  //   console.log("Trail")
  // }
  render() {
    return (
       <div>
         <h1>{this.state.count}</h1>
      {/* //   Enter Name:<input type="text" placeholder="Enter name.."></input> <br />
        
      //   Enter Password:
      //   <input type="password" placeholder="Enter Password.."></input>
      //   <br /> */}
        <button onClick={()=>this.setState({count:this.state.count+1})}>Submit</button>
        {/* <button onClick={() => this.componentDidMount()}>Submit</button> */}
        {/* <Action data={{name:'Ram'}} /> */}
      </div>
    );
  }
}

export default UI;
