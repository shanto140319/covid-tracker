import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { query, setQuery } = useGlobalContext()
  console.log(query)
  // const handleSubmit = (e) => {
  //   e.preventDefault
  // }
  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDafault()}>
        <h2>search Countries</h2>
        <input
          type='text'
          className='form-input'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  .form-input {
    height: 20px;
    width: 250px;
    padding: 0.8rem 1rem;
  }
  .form-input:focus {
    outline: none;
  }
`
export default SearchForm
