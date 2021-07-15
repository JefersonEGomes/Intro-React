import React from 'react';

function ComponentA(props){
  return(
    <div>
      ComponentA usando children
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default ComponentA