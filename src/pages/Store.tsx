import StoreItem from "../components/StoreItem"
import storeItems from "../data/items.json"

const Store = () => {
  return (
    
    <div className="place-items-center grid sm:place-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3
    ">{storeItems.map(storeItem => (
      <div key={storeItem.id}><StoreItem {...storeItem} /></div>
    ))}</div>
  )
}

export default Store