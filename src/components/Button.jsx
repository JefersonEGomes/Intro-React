import React from 'react';


function Button(props){
  const { name, age, onClick } = props
  return(
  <button onclick={onClick}>Olá {name}, você tem {age} anos</button>
  
  )
}

export default  Button