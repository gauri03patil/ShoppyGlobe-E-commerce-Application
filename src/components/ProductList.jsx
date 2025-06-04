
import { useState } from "react";
import ProductItem from "./ProductItem"
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";


function ProductList(){
   
    const [searchText, setSearchText] = useState("");
   
     
   
    const { data: productsData , error, loading }= useFetch(
      "https://dummyjson.com/products");

      

    const filteredProducts = productsData ? productsData.products.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
      ): [];
    
    if (error){
        return<p className="error">Error in loading products: {error}</p>;
    }
    
    if (loading){
        return <p className="loading">Loading..</p>
    }
      
   
     return (
         <div className="product-list-container">
 
          <div className="search-container">
            <input
              type="text" placeholder="Search Products.."
              className="search-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)} 
            />
          </div>

         <div className="product-list">
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                 <ProductItem key={product.id} product={product}/>
                </Link>
               ))
              ) :(<center><p className="noproduct">No products found</p></center>)}
         </div>
        </div>
     );
}
export default ProductList;
