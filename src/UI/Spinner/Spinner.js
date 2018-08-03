import React from 'react';

const Spinner = ()=>{
  return(
    <div className="preloader-wrapper big active">
      <div style={{borderColor: '#009966'}} className="spinner-layer spinner-blue-only">
        <div className="circle-clipper left">
          <div claclassNamess="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
  </div>
  )
}

export default Spinner;