import React from 'react';
import {ABOUT_URL} from "../../src/utils/constants";
import {VISION_URL} from "../../src/utils/constants";
import {CAREERS_URL} from "../../src/utils/constants";
import {VALUES_URL} from "../../src/utils/constants";
import {LIFE_URL} from "../../src/utils/constants";
import {PROGRAMMES_URL} from "../../src/utils/constants";

const Company = ()=> {
  return(
    <div className="company"
          style={{
          display: "flex",
          flexDirection: "column",
          cursor: "pointer"}}>
      <h6>Company</h6>
      <a target="_blank" href={VISION_URL}>Vision</a>
      <a target="_blank" href={ABOUT_URL}>About</a>
      <a target="_blank" href={CAREERS_URL}>Careers</a>
      <a target="_blank" href={VALUES_URL}>Values at Swiggy</a>
      <a target="_blank" href={LIFE_URL}>The Swiggy Life</a>
      <a target="_blank" href={PROGRAMMES_URL}>Programmes</a>
    </div>
  );
}

export default Company;