const FilterReducer=(state,action)=>{
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":   
        let priceArr = action.payload.map((curElem) => curElem.price)
  
        let maxPrice = Math.max(...priceArr);
  
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
          filter: { ...state.filter, maxPrice:maxPrice, price: maxPrice },
        };        
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
                const {text, category, company, colors, price} = state.filter;

                if(text){
                    tempFilterProduct= tempFilterProduct.filter((el)=>{
                        return el.name.toLowerCase().includes(text)
                    })
                }

                if(category !== "all"){
                    tempFilterProduct = tempFilterProduct.filter((el)=>{
                        return el.category === category;
                    })
                }
                if(company !== "all"){
                    tempFilterProduct = tempFilterProduct.filter((el)=>{
                        return el.company.toLowerCase() === company.toLowerCase();
                    })
                }
                if(colors !== "all"){
                    tempFilterProduct = tempFilterProduct.filter((el)=>{
                        return el.colors.includes(colors)
                    })
                }
                if(price === 0){
                    tempFilterProduct = tempFilterProduct.filter((el)=> {
                        return el.price === price
                    })
                }else{
                    tempFilterProduct = tempFilterProduct.filter((el)=> {
                        return el.price <= price
                    })
                }
                if(price){
                   
                }
                return {
                    ...state,
                    filter_products: tempFilterProduct
                }

            case "CLEAR_FILTERS":
                return {
                    ...state, 
                    filter:{
                        ...state.filter,
                        text: "",
                        category: "all",
                        company: "all",
                        color: "all",
                        maxPrice: 0,
                        price: state.filter.maxPrice,
                        minPrice: state.filter.maxPrice
                    },                  
                }    
            default:
                return state;
    }   
}

export default FilterReducer;