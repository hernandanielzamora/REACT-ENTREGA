import { ItemDetail } from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { data } from "../../components/data/data"
import { useEffect, useState } from "react"
import '../../components/ItemDetail/itemdetail.css'

export const ItemDetailContainer = () => {
  const [productSelected, setProduct] = useState()
  const {id} = useParams()
  const getProduct = () => {
    const productFilter = data.filter((product) => {
      return product.id == id;

    })
    setProduct(productFilter)
  }

  useEffect(() => {
    getProduct()
  } ,[id])



  return (
    <div className="contenedor-cards">
      {productSelected && <ItemDetail product={productSelected} />}
      

    </div>
  )
}
