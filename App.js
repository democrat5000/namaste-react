


    
  // const heading = React.createElement("h1" , {className: "heading"},"Hello WORLD, from React !!!");
    
    
    // ---parent, child, grandchild---
    // const nesting = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, React.createElement("h1", {grandchild}, "I am an H1 tag")));

    // --parent, child, 2 grandchildren--
    // const nesting = React.createElement("div", {id:"parent"}, 
    //     React.createElement("div", {id:"child"},    
    //       [React.createElement("h1", {id:"grandchild1"}, "I am a grandchild1 H1 tag") , React.createElement("h2", {id:"grandchild2"}, "I am a grandchild2 h2 tag")],)
    // );

  

// const grandparent = React.createElement("div", {id:"grandparent"}, [
//   React.createElement("div", {id:"sibling1"}, [
//     React.createElement("h1", {id:"grandchild1"}, "I am grandchild1"), 
//     React.createElement("h1", {id:"grandchild2"}, "I am grandchild2")]),
   
//     React.createElement("div", {id:"sibling2"}, [
//       React.createElement("h1", {id:"grandchild3"}, "I am grandchild3"), 
//       React.createElement("h1", {id:"grandchild4"}, "I am grandchild4")])
//     ])
  
  

    
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(nesting);