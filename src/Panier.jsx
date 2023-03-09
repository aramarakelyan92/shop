import React from 'react';
import PanierUn from './PanierUn';

const Panier = ({plus, minus, supprimerOrdre, ordres}) => {
  return (
  <div>
    {ordres.map(el => <PanierUn key={el.id} item={el} plus={plus} minus={minus} supprimerOrdre={supprimerOrdre} />)}
  </div>
    
  )
}

export default Panier