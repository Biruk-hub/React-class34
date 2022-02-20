import React, {useState, useEffect, useContext} from 'react'
import ShopItem from './ShopItem'
import CustomLoading from './CustomLoading'
import { FavoriteContext } from '../provider/Favorite'

const FavoriteItemController = () => {
    const URL = "https://fakestoreapi.com/";
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [favorites , setFavorites] = useContext(FavoriteContext)

    // useEffect(() => {
    //     setIsLoading(true)
    //     const fetchProduct = async (id) => {
    //         await fetch(URL + `products/${id}`)
    //             .then((res) => res.json())
    //             .then((data) => setProducts(data))
    //             .catch((err) => alert(err.message))
    //         setIsLoading(false)
    //     }
    //     favorites.forEach((id) => fetchProduct(id))

    // } , [products, favorites])


  return (
      <div>{`List of Favorite products id : ${favorites}`}</div>
  )
}

export default FavoriteItemController