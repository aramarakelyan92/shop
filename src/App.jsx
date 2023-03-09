import React from 'react'
import Produits from './Produits';
import { useState, useEffect } from "react";
import Panier from './Panier';

const App = () => {

    const [produits, setProduits] = useState([]);
    const [ordres, setOrdres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isBasketShow, setBasketShow] =useState(false);

    useEffect(()=>{
        fetch('http://localhost:3000/produits')
        .then(response => response.json())
        .then(json => setProduits(json))
    }, [])

    const plusNouveuxOrdre = (item)=>{
        const index = ordres.findIndex(el => el.id === item.id)
        if (index === -1) {
            let nouveuxOrdre = {
                ...item,
                quantity: 1
            };

            setOrdres([...ordres, nouveuxOrdre]);
        } else {
            const nouveuxOrdres = ordres.map((el, i) =>{
                if(i === index) el.quantity = el.quantity+1;
                return el;

                
            })
            setOrdres(nouveuxOrdres);
        }

        
    }

    const plus = (id)=>{
        const nouveuxOrdres = ordres.map(el=> {
            if(el.id === id) el.quantity = el.quantity+1;
            return el;
        })

        setOrdres(nouveuxOrdres);
    }

    const minus = (id)=>{
        const nouveuxOrdres = ordres.map(el => {
            if(el.id === id) el.quantity = el.quantity>1 ? el.quantity-1 : 1;
            return el;
        })

        setOrdres(nouveuxOrdres);
    }

    const manualPanier = ()=>{
        setBasketShow(!isBasketShow)
    }
 
    const supprimerOrdre = (id)=>{
        const nouveuxOrdres = ordres.filter(el => el.id !== id);
        setOrdres(nouveuxOrdres);
    }


  return (
    <div className=' container mx-auto p-8'>
        <button onClick= {manualPanier} className=' fixed top-1 right-1' > Panier </button>

        {isBasketShow && 
         <Panier 
        ordres={ordres}  
        plus={plus}
        minus={minus}
        supprimerOrdre={supprimerOrdre}
        />}
        <Produits produits={produits} plusNouveuxOrdre={plusNouveuxOrdre}  />
    </div>
  )
}

export default App
