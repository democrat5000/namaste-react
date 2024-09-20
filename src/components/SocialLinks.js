

const SocialLinks = ()=> {
  return(
    <div className="socialLinks"
          style={{
          display: "flex",
          flexDirection: "column",
          cursor: "pointer"}}>
      <h6>Social Links</h6>
      <div className="links"
            style={{
            display: "flex",
            justifyContent: "space-around"}}>
      <a href="https://in.linkedin.com/company/swiggy-in" target="_blank"><img src="https://cdn-icons-png.freepik.com/256/3536/3536569.png?ga=GA1.1.129955454.1725203153&semt=ais_hybrid" 
      className="linkedin"
      style={{
        width: "1rem",
        height: "1rem"}}
      ></img></a>
      <a href="https://www.facebook.com/swiggy.in" target="_blank"><img src="https://cdn-icons-png.freepik.com/256/2504/2504903.png?ga=GA1.1.129955454.1725203153&semt=ais_hybrid" 
      className="facebook"
      style={{
        width: "1rem",
        height: "1rem"}}></img></a>
      <a href="https://x.com/swiggy_in" target="_blank"><img src="https://cdn-icons-png.freepik.com/256/14417/14417709.png?ga=GA1.1.129955454.1725203153&semt=ais_hybrid" 
      className="twitter"
      style={{
        width: "1rem",
        height: "1rem"}}></img></a>
      </div>
    </div>
  );
}

export default SocialLinks;