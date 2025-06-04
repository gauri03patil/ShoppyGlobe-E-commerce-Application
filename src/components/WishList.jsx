
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../utils/wishlistSlice";
import { PiSmileySadDuotone } from "react-icons/pi"; 

function WishList() {
    
    const wishlistItems = useSelector((state) => state.wishlist.items);

    const dispatch = useDispatch(); 
    function handleRemoveFromWishlist(itemId) {
        dispatch(removeFromWishlist(itemId))
    }
   
    if (wishlistItems.length === 0) {
        return <div className="empty-wishlist"><PiSmileySadDuotone className="wishlist-icon"/><p>Your Wishlist is Empty!</p></div>;
    }
    
    return (
        <div className="wishlist-container">
            <h2>Your Wishlist</h2>
           
            {wishlistItems.map((item) => (
                <div key={item.id} className="wishlist-item">
                    <div className='image-container'>
                        <img src={item.thumbnail} alt={item.title} />
                    </div>
                    <div className='content-container'>
                        <h4 className='item-title'>{item.title}</h4>
                        <p className='item-price'>Price: ${item.price}</p>
                        <button onClick={() => handleRemoveFromWishlist(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>


        
    );
}
export default WishList;