import React from 'react'

const PanierUn = ({item, plus, minus, supprimerOrdre}) => {
  return (
    <div>
        <span>{item.Nomdeproduit}</span>
        <button onClick={()=> minus(item.id)} > - </button>
        <span>{item.quantity}</span>
        <button onClick={()=> plus(item.id)} > + </button>
        <span> = </span>
        <span>{(item.pris * item.quantity).toFixed(2)}</span>
        <button> x </button>
    </div>
  )
}

export default PanierUn