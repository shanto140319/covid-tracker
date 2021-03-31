import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { search, setSearch } = useGlobalContext()
  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDafault()}>
        <h4>search Countries</h4>
        <input
          type='text'
          className='form-input'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
