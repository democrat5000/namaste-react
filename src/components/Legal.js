

const Legal = ()=> {
  return(
  <div className="legal"
        style={{
          display: "flex",
          flexDirection: "column",
          cursor: "pointer"}}>
      <h6>Legal</h6>
      <a target="_blank" href="https://www.swiggy.com/terms-and-conditions">Terms & Conditions</a>
      <a target="_blank" href="https://www.swiggy.com/cookie-policy">Cookie Policy</a>
      <a target="_blank" href="https://www.swiggy.com/privacy-policy">Privacy Policy</a>
      <a target="_blank" href="https://www.swiggy.com/corporate/investor-relations/">Investor Relations</a>
      <a target="_blank" href="https://www.swiggy.com/corporate/newsroom/">Newsroom</a>
      <a target="_blank" href="https://www.swiggy.com/corporate/esg-focus/">Sustainability</a>
    </div>
    );
}

export default Legal;