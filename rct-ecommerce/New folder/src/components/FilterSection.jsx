import React from 'react';
import styled from "styled-components"
import { useFilterContext } from '../Context/Filter_Context';
import {FaCheck} from "react-icons/fa"
import FormatPrice from '../Helpers/FormatPrice';
import {Button} from "../Styles/Button"

const FilterSection = () => {

  const {filter:{text,category, colors, price, maxPrice, minPrice},all_products, updateFilterValue, clearFilters} = useFilterContext()

  // TO GET THE UNIQUE DATA OF EACH FIELDS
  const getUniqueData = (data, property)=>{
    let newVal = data.map((el)=>{
      return el[property];
    });

    if(property === "colors"){
      return (newVal = ["all", ...new Set([].concat(...newVal))])
    }else{
      return (newVal = ["all", ...new Set(newVal)]);
    }
    
  } 
  // We need Unique Data
  const categoryOnlyData = getUniqueData(all_products, "category");
  
  const companyData = getUniqueData(all_products, "company");

  const colorsData = getUniqueData(all_products, "colors");

  // console.log(colorsData)

  return (
    <Wrapper>
      <div className="filter-section">
        <form onSubmit={(e)=> e.preventDefault()}>
          <input 
            type="text" 
            name='text' 
            value={text} 
            onChange={updateFilterValue}
            placeholder="SEARCH" />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {
            categoryOnlyData.map((el,index)=>{
              return (
              <button 
                key={index} 
                type="button" 
                name="category" 
                value={el} 
                className={el === category ? "active" : ""} 
                onClick={updateFilterValue }>
                {el}
              </button>
              )
            })
          }
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <form action='#'>
          <select name="company" 
            id="company" 
            className='filter-company--select' 
            onClick={updateFilterValue}>
            {
            companyData.map((el, index)=>{
              // console.log(companyData)
              return(
                <option value={el} key={index} name="company">
                  {el}
                </option>
              )
            })}
          </select>         
        </form>
      </div>
      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {
            colorsData.map((el, index)=>{
              if(el === "all"){
                return(
                  <button
                  key={index} 
                  type='button'
                  className='color-all--style'
                  value={el}
                  name="colors"
                  onClick={updateFilterValue}>
                    all
                </button>
                )
              }
              return(
                <button
                  key={index} 
                  type='button'
                  className={colors == el ? 'btnStyle active' : "btnStyle"}
                  value={el}
                  name="colors"
                  style={{backgroundColor: el}}
                  onClick={updateFilterValue}>
                    {colors == el ? <FaCheck className='checkStyle' /> : null}
                </button>
              )
            })
          }
        </div> 
      </div>
      <div className="filter_price">
        <h3>Price</h3>
        <p><FormatPrice price={price} /></p>
        <input 
          type="range" 
          name='price'
          min={minPrice} 
          max={maxPrice} 
          value={price}
          onChange={updateFilterValue} 
        />
      </div>

      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}> Clear Filter</Button>
      </div>

    </Wrapper>
  )
} 

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection