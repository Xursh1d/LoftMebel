import "./shoppingCart.css";
import { useContext } from "react";
import { StorageContext } from "../context/Context";
import CartProducts from "./CartProducts";
import emptyIcon from "../LoftMebelPhoto/page-empty-page.jpg"
export default function ShopProduct() {
  const { cartStorage,removeLocalStorage } =
    useContext(StorageContext);

  return (
    <div>
      <p className="product-adress">Home / Basket</p>
      {cartStorage.length ? (
        <CartProducts
          cartStorage={cartStorage}
          removeLocalStorage={removeLocalStorage}
        />
      ) : (
        // <h1 className="empty_text">Basket is empty . . .</h1>
        <img className="empty_text" src={emptyIcon} alt="" />
      )}
    </div>
  );
}
