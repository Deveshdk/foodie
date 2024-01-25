import {  useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () =>{
    const dispatch = useDispatch();
    const clearItems = ()=>{
        dispatch(clearCart());
    } 
    const cartItems = useSelector((store)=>store.cart.items);
    return (
        <div className=" text-center m-4 p-4">
            <h1 className="text-2xl font-bold ">Cart</h1>
            <div className="m-auto w-6/12">
                {cartItems.length === 0 ? "Cart is empty. Please add more items!!" :
                    <div>
                        <ItemList items={cartItems}/>
                        <button className="rounded-lg m-2 p-2 bg-green-200 text-white" onClick={clearItems}>Clear Cart</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart;