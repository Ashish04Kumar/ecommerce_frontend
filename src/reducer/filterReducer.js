const filterReducer = (state, action) => {

    switch (action.type) {

        case "LOAD_FILTER_PRODUCTS":
            let priceArray = action.payload.map((curElem) => curElem.price)
            let maxPrice
             if(priceArray.length > 0){
              maxPrice = priceArray.reduce((acc, curElem) => Math.max(acc, curElem), 0)
              }
             return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: {...state.filters, maxPrice: maxPrice, price: maxPrice}
            };

        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,

            };
            case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,

            };

           case "GET_SORT_VALUE":
            return {
            ...state,
             sorting_value: action.payload,     
           }

           case "SORTING_PRODUCTS":
           let newSortData;
           const {filter_products} = state;
           let tempSortProduct = [...filter_products];

         


           const sortingProducts = (a,b) => {
            if(state.sorting_value === 'lowest'){
                    return a.price - b.price

            }
               if(state.sorting_value === 'highest'){
                
                    return b.price - a.price
                
           }
             if(state.sorting_value === 'a-z'){
           
               return  a.name.localeCompare(b.name);
            
           }


            if(state.sorting_value === 'z-a'){
               return  b.name.localeCompare(a.name);
            
           }
           }
        
          

        newSortData = tempSortProduct.sort((sortingProducts))

           return {
            ...state,
            filter_products: newSortData
           }

case "UPDATE_FILTERS_VALUE": 
    const {name, value} = action.payload;
    return {
        ...state,
        filters: {
            ...state.filters,
            [name]: value
        }

    }


    case "FILTER_PRODUCTS":
       let {all_products} = state;
       let tempFilterProduct = [...all_products]
 
       //company me apple ayega ob
         const {text, category, company, color, price} = state.filters;
         if(text) {
            tempFilterProduct = tempFilterProduct.filter((curElem) => {
                return curElem.name.toLowerCase().includes(text)
            })
         }

         if(category !== 'all'){
            tempFilterProduct = tempFilterProduct.filter((curElem) => {
                 return curElem.category === category.toLowerCase()
            })
         }
         if(company !== 'all'){
            tempFilterProduct = tempFilterProduct.filter((curElem) => {
                 return curElem.company === company.toLowerCase()
            })
         }

         if(color !== 'all'){
             tempFilterProduct = tempFilterProduct.filter((curElem) => {
                 return curElem.colors.includes(color)
            })
         }


         if(price === 0)
         {
            tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price === price)
         
        } 
         else{
            tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price <= price)

         }

       return {
            ...state,
            filter_products: tempFilterProduct
           }

           case "CLEAR_FILTERS":
            return {
                ...state,
                filters:{
                    ...state.filters,
                           text: "",
                           company: "all", 
                           color: "all",
                           maxPrice: state.filters.maxPrice,
                           price: state.filters.maxPrice,
                           minPrice: 0,
                           category: "all",
                }
            }

        default: return state
    }
}




export default filterReducer; 