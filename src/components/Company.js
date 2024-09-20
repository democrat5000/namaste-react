

const Company = ()=> {
  return(
    <div className="company"
          style={{
          display: "flex",
          flexDirection: "column",
          cursor: "pointer"}}>
      <h6>Company</h6>
      <a target="_blank" href="https://careers.swiggy.com/#/about">About Us</a>
      <a target="_blank" href="https://www.swiggy.com/about-us/">Swiggy Corporate</a>
      <a target="_blank" href="https://careers.swiggy.com/#/">Careers</a>
      <a target="_blank" href="https://careers.swiggy.com/#/values_at_swiggy">Values at Swiggy</a>
      <a target="_blank" href="https://careers.swiggy.com/#/swiggy_life">The Swiggy Life</a>
      <a target="_blank" href="https://careers.swiggy.com/#/programmes">Programmes</a>
    </div>
  );
}

export default Company;