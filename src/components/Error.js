import React from 'react';
import {useRouteError} from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <h1>Ooops!!</h1>
      <h2>Something went wrong.</h2>
      <h2>{err.status} : {err.statusText}</h2>
      <img className="train-wreck" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUPeGkjgHel5zNkWZIRHKDjcuU9fz_aKSnUrE4q7BC-xPlkphXrVQGnrDV1WRAid861fA&usqp=CAU"></img>
    </div>
  )
}

export default Error
