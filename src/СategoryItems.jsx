import Menu from "./homePage/Menu";
import MenuBar from "./homePage/menuComponents/MenuBar";
import LogoSearch from "./homePage/LogoSearch";
import {
  CategoriesContext,
  MenuContext,
  ChangeSearchContext,
  WishlistContext,
  ProductContext,
} from "./context/Context";
import Footer from "./homePage/Footer";
import Input from "./homePage/Input";
import { createContext, useContext } from "react";
import Categories from "./homePage/Categories";
import { useState, useEffect } from "react";
import {
  getTopCategoryItem,
  getTopDiscountItem,
  getCategoryColors,
  getMinAndMaxCategoryPrice,
  getFilterCategorySize,
} from "./api/UrlApi";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import TopCategories from "./top_categories/TopCategories";
import WishlistProducts from "./wishlist/WishlistProducts";

export const ColorFilter = createContext();
export const SizeFilter = createContext();
export const FilterLoaders = createContext();
export default function СategoryItems() {
  const { slug } = useParams();
  const [categoryIteam, setCatgeoryIteam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);
  const { categories } = useContext(CategoriesContext);
  const { setChangeSearch, search, setSearch } =
    useContext(ChangeSearchContext);
  const [menuBar, setMenuBar] = useContext(MenuContext);
  const { setWishlist, setActiveProfile } = useContext(WishlistContext);
  const [price, setPrice] = useState({ min: 0, max: 0 });
  const [minAndMax, setMinAndMax] = useState({});
  const [colors, setColors] = useState();
  const [sizes, setSizes] = useState();
  const [filterColor, setFilterColor] = useState([]);
  const [filterSize, setFilterSize] = useState([]);
  const [loaderInputRange, setLoaderInputRange] = useState(true);
  const [colorsLoader, setLoaderColors] = useState(true);
  const [sizesLoader, setLoaderSizes] = useState(true);
  const [noMore, setNoMore] = useState(true);
  const handleCloseMenu = () => {
    setMenuBar(false);
    setWishlist(false);
    setActiveProfile(false);
  };
  useEffect(() => {
    setNoMore(true);
    if (slug !== "discount" && price.max !== 0) {
      setFilterLoading(true);
      getTopCategoryItem(
        slug,
        price.min,
        price.max,
        filterColor,
        filterSize,
        1
      ).then((category) => {
        setCatgeoryIteam(category.data.results);
        setLoading(false);
        setFilterLoading(false);
        if (category.data.results.length < 12) {
          setNoMore(false);
        }
      });
    }
  }, [price, filterColor, filterSize]); 
  useEffect(() => {
    setLoading(true);
    if (slug === "discount") {
      getTopDiscountItem().then((discountProduct) => {
        setCatgeoryIteam(discountProduct.data.results);
        setLoading(false);
        setFilterLoading(false);
        if (discountProduct.data.results.length < 12) {
          setNoMore(false);
        }
      });
    } else {
      getMinAndMaxCategoryPrice(slug).then((getPrice) => {
        setMinAndMax(getPrice.data);
        setPrice(getPrice.data);
        setLoaderInputRange(false);
      });
      getFilterCategorySize(slug).then((getSize) => {
        setSizes(getSize.data);
        setLoaderSizes(false);
      });
      getCategoryColors(slug).then((getColors) => {
        setColors(getColors.data);
        setLoaderColors(false);
      });
      setFilterColor([]);
      setFilterSize([]);
      setSearch([]);
    }
  }, [slug]);
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
      <ColorFilter.Provider value={{ filterColor, setFilterColor }}>
        <SizeFilter.Provider value={{ filterSize, setFilterSize }}>
          <ProductContext.Provider
            value={{
              slug,
              price,
              filterColor,
              filterSize,
              noMore,
              setNoMore,
              categoryIteam,
              setCatgeoryIteam,
            }}
          >
            <FilterLoaders.Provider
              value={{ loaderInputRange, colorsLoader, sizesLoader }}
            >
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
              <TopCategories
                filterLoading={filterLoading}
                colors={colors}
                price={price}
                sizes={sizes}
                setPrice={setPrice}
                categoryIteam={categoryIteam}
                categories={categories}
                minAndMax={minAndMax}
              />
              <Footer categories={categories} />
            </FilterLoaders.Provider>
          </ProductContext.Provider>
        </SizeFilter.Provider>
      </ColorFilter.Provider>
    </div>
  );
}
