import React from 'react'

const ProduitsUn = ({item, plusNouveuxOrdre}) => {
  return (
    <div className=' flex justify-center flex-col text-center '>
        <img src={item.image} alt="" />
        <h2 className=' text-bold'>Nom: {item.Nomdeproduit}</h2>
        <div>Marque: {item.Marque}</div>
        <div>Taille: {item.taille} </div>
        <div>Pris: {item.pris} </div>
        <button className=' text-white bg-red-500 p-2' onClick={()=> plusNouveuxOrdre(item)}  >Ajouter au Panier</button>
    </div>
  )
}

export default ProduitsUn