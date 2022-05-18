import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MenuColumn2 from "./menuComponents/MenuColumn2";
import phoneDark from "../LoftMebelPhoto/phone.svg";
import deliveryDark from "../LoftMebelPhoto/delivery-icon.svg";
import { StorageContext } from "../context/Context";
import MenuProfile from "./MenuProfile";
import {
  IoPersonOutline,
  IoPerson,
  IoCartOutline,
  IoCart,
  IoHeart,
  IoHeartOutline,
} from "react-icons/io5";
import { WishlistContext, TokensContext } from "../context/Context";

export default function LogoSearchIcons({
  active_basket_page,
  active_contact_page,
}) {
  const [refreshToken, setRefreshToken] = useContext(TokensContext);
  const { cartStorage } = useContext(StorageContext);
  const {
    setWishlist,
    wishlist,
    likedProduct,
  } = useContext(WishlistContext);
  
  const changeWishlist = (e) => {
    e.stopPropagation();
    setWishlist(true);
  };
  return (
    <div className="logoSearchIcons">
      <MenuColumn2 phone={phoneDark} delivery={deliveryDark} />
      <div onClick={(e) => changeWishlist(e)} className="cart_link_heart">
        <span className="wishlist_items_count">{likedProduct.length}</span>
        <IoHeartOutline
          className={
            wishlist ? `heart_icon_outline active_page` : `heart_icon_outline`
          }
        />
        <IoHeart className="heart_icon" />
      </div>
      <Link to="/basket" className="cart_link_basket">
        <span className="cart_items_count">{cartStorage.length}</span>
        <IoCartOutline className={`cart_icon_outline ${active_basket_page}`} />
        <IoCart className="cart_icon" />
      </Link>
      {refreshToken ? (
        <Link to="/user/sign_in" className="cart_link_contact">
          <IoPersonOutline
            className={`contact_icon_outline ${active_contact_page}`}
          />
          <IoPerson className="contact_icon" />
        </Link>
      ) : (
        <MenuProfile setRefreshToken={setRefreshToken}/>
      )}
    </div>
  );
}
