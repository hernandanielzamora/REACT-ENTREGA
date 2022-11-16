import { useEffect, useState } from "react"
import { ItemList } from "../../components/ItemList/ItemList";
import { data } from "../../components/data/data"
import { useParams } from "react-router-dom";
import '../../components/Item/item.css'


export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams()


  const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      if (categoryName) {
        const filteredData = data.filter((item) => {
          return item.category === categoryName;
        });

        res(filteredData)
      } else {
        res(data)
      }
    }, 1000);
  });

  useEffect(() => {
    getProducts.then((res) => setItems(res))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName])

  return (
    <div className="row contenedor contenedor-cards">
      <ItemList products={items} />
    </div>
  )
}
