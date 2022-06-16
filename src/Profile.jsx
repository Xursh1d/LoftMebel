import React, { useEffect } from "react";
import Menu from "./homePage/Menu";
import MenuBar from "./homePage/menuComponents/MenuBar";
import LogoSearch from "./homePage/LogoSearch";

import {
  CategoriesContext,
  MenuContext,
  ChangeSearchContext,
  WishlistContext,
} from "./context/Context";
import Footer from "./homePage/Footer";
import Categories from "./homePage/Categories";
import Input from "./homePage/Input";
import { useContext } from "react";
import WishlistProducts from "./wishlist/WishlistProducts";
import Contact from "./homePage/contact/Contact";
import MyProfile from "./my_profile/MyProfile";
import { userData } from "./api/UrlApi";

export default function Basket() {
  const { categories } = useContext(CategoriesContext);
  const { setWishlist, setActiveProfile } = useContext(WishlistContext);
  const { search, setSearch, setChangeSearch } =
    useContext(ChangeSearchContext);
  const [menuBar, setMenuBar] = useContext(MenuContext);
  const handleCloseMenu = () => {
    setMenuBar(false);
    setWishlist(false);
    setActiveProfile(false);
  };
  useEffect(() => {
    setSearch([]);
    userData().then((response)=>{
      console.log(response);
    })
  }, []);
  return (
    <div onClick={() => handleCloseMenu()}>
      <MenuBar
        categories={categories}
        menuBar={menuBar}
        setMenuBar={setMenuBar}
      />
      <Menu />
      <WishlistProducts />
      <LogoSearch
        setMenuBar={setMenuBar}
        search={search}
        setChangeSearch={setChangeSearch}
      />
      <Input
        setChangeSearch={setChangeSearch}
        search={search}
        style={"mobile-input"}
        type={"text"}
        palceholder={"Search"}
      />
      <Categories categories={categories} />
      <MyProfile/>
      <Footer categories={categories} />
    </div>
  );
}
