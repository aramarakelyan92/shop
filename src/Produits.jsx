import ProduitsUn from "./ProduitsUn"

const Produits = ({produits, plusNouveuxOrdre}) => {
  
  
    return (
        <div className=' grid gap-6 sm:grid-cols-2 md:grid-cols-4'>
        {
            produits.map(el=> <ProduitsUn key={el.id} item={el} plusNouveuxOrdre={plusNouveuxOrdre} /> )
        }
        </div>
  )
}

export default Produits