import React, { useEffect } from "react";
import Menu from "./homePage/Menu";
import MenuBar from "./homePage/menuComponents/MenuBar";
import LogoSearch from "./homePage/LogoSearch";
import ReactLoading from "react-loading";

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

export default function Basket() {
  const { categories,loading } = useContext(CategoriesContext);
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
  }, []);
  return loading ? (
    <div className="loader">
      <h6>Loading</h6>
      <ReactLoading
        className="loading"
        type={"spinningBubbles"}
        color={"#245462"}
        height={"50px"}
        width={"50px"}
      />
    </div>
  ) : (
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
      <Contact/>
      <Footer categories={categories} />
    </div>
  );
}
