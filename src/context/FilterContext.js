import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useProductContext } from './ProductContext';
import reducer from '../reducer/filterReducer';

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {

    const initialState = {
        filter_products : [],
        all_products : [],
        grid_view: false,
        sorting_value: "lowest"

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

useEffect(() => {
    dispatch({type: "SORTING_PRODUCTS"})
}, [products, state.sorting_value])

    useEffect(()=>{
     dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products})
    },[products]
  )

    return <FilterContext.Provider value={{...state, setGridView, setListView, sorting}}>
        {children}
    </FilterContext.Provider>
}
 
export const useFilterContext = ()=>
{
    return useContext(FilterContext);
};
