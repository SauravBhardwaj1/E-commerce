import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import { useProductContext } from "./ProductContext"; 
import reducer from "../reducer/FilterReducer"

const FilterContext = createContext();

const initialState={
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filter:{
    text :""
  }
}

export const FilterContextProvider = ({children})=>{

  const {products} = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = ()=>{
    return dispatch({type: "SET_GRID_VIEW"})
  }

  const setListView = ()=>{
    return dispatch({type: "SET_LIST_VIEW"})
  }

  //sorting function
  const sorting=(event)=>{
    let userValue = event.target.value;
    dispatch({type: "SORT_PRICE_VALUE", payload: userValue})
  }

  // update the filter value

  const updateFilterValue = (event)=>{
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({type: "UPDATE_FILTER_VALUE", payload:{name, value}})
  }

  // to sort the products
  useEffect(()=>{
    dispatch({type: "SORTING_PRODUCTS"})
    dispatch({type: "FILTER_PRODUCTS"})
  },[products, state.sorting_value, state.filter])

  useEffect(()=>{
    dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})
  },[products])

  return (
    <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue}}>
        {children}
    </FilterContext.Provider>
  ) 
}

export const useFilterContext = ()=>{
    return useContext(FilterContext);
};

