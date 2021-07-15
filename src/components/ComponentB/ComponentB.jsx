import React from 'react';

function ComponentB(props){
  return(
    <div>
      ComponentB renderizado por meio do children {props.children}
    </div>
  )
}

export default ComponentB