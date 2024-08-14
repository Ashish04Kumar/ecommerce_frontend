import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useProductContext } from './ProductContext';
import reducer from '../reducer/filterReducer';

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {

    const initialState = {
        filter_products : [],
        all_products : [],
        grid_view: false,
        sorting_value: "lowest",
        filters: {
            text: "",
            category: "all",
            company: 'all'

        }

    }

    const {products} = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);
  
    //to set the grid view
const setGridView = ()=>
{
    return dispatch({type: "SET_GRID_VIEW"});
}

const setListView = ()=>
{
    return dispatch({type: "SET_LIST_VIEW"});
}


//sorting function
const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({type: "GET_SORT_VALUE", payload: userValue});
};


//update the filter values
const updateFilterValue = (event) => {
 let name  = event.target.name
 let value = event.target.value
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
}

useEffect(() => {
    dispatch({type: "FILTER_PRODUCTS"})
    dispatch({type: "SORTING_PRODUCTS"})
}, [products, state.sorting_value, state.filters])

    useEffect(()=>{
     dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products})
    },[products]
  )

    return <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue}}>
        {children}
    </FilterContext.Provider>
}
 
export const useFilterContext = ()=>
{
    return useContext(FilterContext);
};
