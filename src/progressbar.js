
import React from 'react';

const Progressfunc = (props) => {
  if(!props.shown){
    return(
        <div>
        <div id = "output-id" >
          <progress value={props.progress} max="100" id="progressbar" ></progress>
          <p className="name-class">{props.name}</p>
          <p className="progress-class">{props.progress}%</p>
        </div>
        </div>
    );
  }else{
    return null;
  }
};
export default Progressfunc;
