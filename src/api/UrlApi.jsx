import { axiosInstance } from "./AxiosInstance";
import { likeAxiosInstance } from "./UrlAxiosInstance";
export const getCategories = async () => {
  const categorie = await axiosInstance.get("/categories/");
  return categorie;
};

export const productCallForId = async (slug) => {
  const productCall = await axiosInstance.get(`/products/${slug}/`);
  return productCall;
};
export const getSlider = async () => {
  const sliderItems = await axiosInstance.get("/banners/");
  return sliderItems;
};
export const getTopProducts = async () => {
  const products = await axiosInstance.get("/products/top/");
  return products;
};
export const getTopPagnationProducts = async (page) => {
  const response = await axiosInstance.get(`/products/top/?page=${page}`);
  return response;
};

export const getTopCategoryItem = async (slug, min, max, color, size, page) => {
  const url = `/categories/${slug}/products/?min_price=${min}&max_price=${max}&colors=${color}&size=${size}&page=${page}`;
  const category = await axiosInstance.get(url);
  return category;
};
export const getTopDiscountItem = async () => {
  const discountProduct = await axiosInstance.get(`/products/discounted/`);
  return discountProduct;
};
export const getCategoryColors = async (slug) => {
  const getColors = await axiosInstance.get(`/colors/?category=${slug}`);
  return getColors;
};
export const getMinAndMaxCategoryPrice = async (slug) => {
  const getPrice = await axiosInstance.get(`/categories/${slug}/prices`);
  return getPrice;
};
export const getFilterCategorySize = async (slug) => {
  const getSize = await axiosInstance.get(`/size/?category=${slug}`);
  return getSize;
};
export const getLatestProducts = async (page) => {
  const getProducts = await axiosInstance.get(`/products/latest/?page=${page}`);
  return getProducts;
};
export const getSearchProduct = async (title) => {
  const getSearchItem = await axiosInstance.get(`/products/?term=${title}`);
  return getSearchItem;
};
export const checkEmail = async (email) => {
  const response = await axiosInstance.post("/check-email/", {
    email: email,
  });
  return response;
};
export const checkOtpCode = async (email, token, code) => {
  const postOtpCode = await axiosInstance.post("/check-otp/", {
    email: email,
    token: token,
    code: code,
  });
  return postOtpCode;
};
export const createAccount = async (data) => {
  const response = await axiosInstance.post("/sign-up/", data, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });

  return response;
};
export const checkUserName = async (username, password) => {
  const response = await axiosInstance.post("/login/", {
    username: username,
    password: password,
  });
  return response;
};
export const feedback = async (data) => {
  const response = await axiosInstance.post("/feedback/", data, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
  return response;
};
export const getRegions = async () => {
  const response = await axiosInstance.get(`/regions`);
  return response;
};
export const userData = async (_id) => {
  const response = await likeAxiosInstance.get("/user/me");
    return response;
};
// export const removeLikedPoduct = async (id) => {
//   const response = await likeAxiosInstance.delete(`/wishlist/${id}/`);
//   console.log(response.status);
//   if (response.status === 204) {
//     return true;
//   } else return false;
// };
