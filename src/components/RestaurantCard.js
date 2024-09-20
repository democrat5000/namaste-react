// import Image from "./Image";

const RestaurantCard = (props)=> {
  const {resData} = props;

  const {small_s3, name, cuisines, avgRating,costForTwo } = resData?.info;

const {slaString} = resData?.info?.sla;

  return(
  <div className="resCard" style={{backgroundColor: "#f0f0f0"}}>
    {/* <img className="resImage" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+cloudinaryImageId}></img> */}
    {/* <img className="resImage" src="https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1523049673857-eb18f1d7b578"></img> */}
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

