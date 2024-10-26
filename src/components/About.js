

import React from 'react';
// import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props){
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount(){
    //console.log("ParentDidMount");
  }
  render(){
    //console.log("Parent Render");
    return (
      <div className="about">
        <h1>About Us</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"Akshay Saini (class)"} location={"Dehradun (class)"} contact={"@akshaymarch7 (class)"}/>
      </div>
    )
  }
  }


export default About
