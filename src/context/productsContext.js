import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
} from "../actions";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utilities/constants";
import axios from "axios";

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};
const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const resp = await axios.get(url);
      const products = resp.data;

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (err) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, closeSidebar, openSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
