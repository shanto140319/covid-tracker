import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Continent = () => {
  const { allCategories, filterItem } = useGlobalContext()

  return (
    <Wrapper>
      <div className='btn-container'>
        {allCategories.map((category, index) => {
          return (
            <button
              key={index}
              type='button'
              className='filter-btn'
              onClick={() => filterItem(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  text-align: center;
  .btn-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  .filter-btn {
    padding: 0.4rem 1rem;
    cursor: pointer;
    background: var(--clr-grey-4);
    border: none;
    border-radius: 3px;
    color: #fff;
    transition: 0.3s;
    letter-spacing: 2px;
  }
  .filter-btn:hover {
    background: var(--clr-grey-5);
  }
`
export default Continent
