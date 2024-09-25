
const RestaurantCard = (props)=> {
  const {resData} = props;

  const {small_s3, name, cuisines, avgRating,costForTwo } = resData?.info;

const {slaString} = resData?.info?.sla;

  return(
  <div className="resCard" style={{backgroundColor: "#f0f0f0"}}>
    <img src={small_s3}></img>
    <h5>{name}</h5>
    <h6>{cuisines.join(", ")}</h6>
    <h6>{avgRating} /5 stars</h6>
    <h6>{costForTwo}</h6>
    <h6>{slaString}</h6>

  </div>
  );
}

export default RestaurantCard;

