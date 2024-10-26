import React from "react";

class UserClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     userInfo:{
      name: "dummy",
      location: "default",
      company: "dummy",
      avatar_url: "https://dummy.com", 
      twitter_username: "dummy",

     } 
    }
   
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    console.log(data);

    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    })
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  render() {
    // const {name, location, contact} = this.props;
   const { avatar_url, twitter_username
    , location, name, company} = this.state.userInfo;
    return (
      <div className="user-card">
      {/* <h1>Count: {count}</h1>
      <button onClick={()=>{
        this.setState({count: this.state.count +1,});
      }}>Count Increase</button> */}
      <img className="avatar" src={avatar_url}></img>
      <h2>Name: {name}</h2>
      <h2>Company: {company}</h2>
      <h2>Location: {location}</h2>
      <h2>Contact: {"@"+
twitter_username
}</h2>
    </div>
    );
  }
}

export default UserClass;

// ==========LOADING TAILWIND===========
// getting multiple errors when running:
// npm install -D tailwindcss postcss
// solution:
// rm -r node_modules
// npm install
// then:
// npm install -D tailwindcss postcss
// npx tailwindcss init