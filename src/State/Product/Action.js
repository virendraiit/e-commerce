import { api } from "../../config/apiConfig";
import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    //dispacth action
    dispatch({type:FIND_PRODUCTS_REQUEST})
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData; //These variables we have to give in query params when we will fetch api.
  try {
    const {data}= await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&
    minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}
    &pageNumber=${pageNumber}&pageSize=${pageSize}`)
    
    console.log("product data", data)

    //we will store this above data in reducer
    dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})

  } catch (error) {
    dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
  }
};


export const findProductsById = (reqData) => async (dispatch) => {
    //dispacth action
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
  const {productId} = reqData; //These variables we have to give in query params when we will fetch api.
  try {
    const {data}=api.get(`/api/products/id/${productId}`)
    
    //we will store it in reducer
    dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})

  } catch (error) {
    dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
  }
};
