
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/cartSlice'; 
import { addToWishlist, removeFromWishlist } from '../utils/wishlistSlice'; 
import { FaHeart, FaRegHeart  } from "react-icons/fa";

function ProductItem({ product }) {
    const dispatch = useDispatch(); 
    const wishlistItems = useSelector((state) => state.wishlist.items);

    const isWishlisted = wishlistItems.some((item) => item.id === product.id);
 
    
    function handleAddItem(){
        dispatch(addItem(product));
    };
    
    
    function handleAddToWishlist(){
        if (isWishlisted) {
          dispatch(removeFromWishlist(product.id));
        } else {
           dispatch(addToWishlist(product));
        }
      };
    return (
        <div className="product-item">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
             <button onClick={handleAddItem}>Add to Cart</button>

             <button
             onClick={handleAddToWishlist}
               className={isWishlisted ? 'wishlisted' : ''} >
          {isWishlisted ? <FaHeart /> : <FaRegHeart />}
        </button>
        </div>
    );
}
export default ProductItem;