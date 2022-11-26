const FilterReducer=(state,action)=>{
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":           
            return{
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]
            }
        case "SET_GRID_VIEW":
            return{
                ...state,
                grid_view: true
            }
        case "SET_LIST_VIEW":
            return{
                ...state,
                grid_view: false
            }
        case "SORT_PRICE_VALUE":
            // let userSortValue=document.getElementById("sort");
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            // console.log(sort_value)

            return{
                ...state,
                sorting_value: action.payload
            };
        case "SORTING_PRODUCTS":

            let newSortData;
            const {filter_products, sorting_value} = state;
            let tempSortProduct = [...filter_products]

            const sortingProduct = (a,b)=>{
                if(sorting_value === "lowest"){
                       return a.price - b.price
                }

                if(sorting_value === "highest"){
                    return b.price - a.price
                }
                if(sorting_value === "a-z"){
                    return a.name.localeCompare(b.name);
                }
                if(sorting_value === "z-a"){
                    return b.name.localeCompare(a.name);
                }
            }
            
            newSortData = tempSortProduct.sort(sortingProduct);

                return {
                    ...state,
                    filter_products: newSortData
                }

            case "UPDATE_FILTER_VALUE":
                const {name, value} = action.payload    
                return{
                    ...state,
                    filter:{
                        ...state.filter,
                        [name] : value,
                    },
                };
            case "FILTER_PRODUCTS":
                let {all_products}= state;
                let tempFilterProduct = [...all_products]
                const {text} = state.filter;

                if(text){
                    tempFilterProduct= tempFilterProduct.filter((el)=>{
                        return el.name.toLowerCase().includes(text)
                    })
                }
                return {
                    ...state,
                    filter_products: tempFilterProduct
                }
        default:
            return state;
    }   
}

export default FilterReducer;