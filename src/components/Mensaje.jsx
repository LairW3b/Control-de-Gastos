import React from 'react'

const Mensaje = ({children, tipo}) => {
  return (
                    //sintaxys para mezclar una clase fija y una clase dinamica
    <div className={`alerta ${tipo}`}>{children}</div>
  )
}

export default Mensaje
