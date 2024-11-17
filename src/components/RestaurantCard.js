import React from 'react';


const RestaurantCard = (props)=> {
  const {resData} = props;

  const {small_s3, name, cuisines, avgRating,costForTwo } = resData?.info;

const {slaString} = resData?.info?.sla;



  return(
  <div className="resCard" style={{backgroundColor: "#f0f0f0"}}>
    {<img src= "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1432139555190-58524dae6a55"></img>}
    <h5>{name}</h5>
    <h6>{cuisines.join(", ")}</h6>
    <h6>{avgRating} /5 stars</h6>
    <h6>{costForTwo}</h6>
    <h6>{slaString}</h6>


  </div>
  
  );
}

//higher order component
//input restaurant card => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard)=> {
  return(props)=> {
    return(
    <div>
      <label className="label">Promoted</label>
      <RestaurantCard {...props}/>
    </div>
    )
  }
}

export default RestaurantCard;

