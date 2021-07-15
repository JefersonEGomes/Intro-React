import React from 'react';


function Button(props){
  const { name, age, onClick } = props
  return(
    <div>
  <button onClick={onClick}>Olá {name}, você tem {age} anos (Componente Button)</button>
  </div>
  )
}

export default Button