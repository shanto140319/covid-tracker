import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const SelectCountry = () => {
  const { query, setQuery, countries } = useGlobalContext()
  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDafault()}>
        <h2>select Countries</h2>
        <select
          name='country'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        >
          {countries.map((item, index) => {
            return (
              <option key={index} value={item.country}>
                {item.country}
              </option>
            )
          })}
        </select>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  select {
    height: 30px;
    width: 250px;
    cursor: pointer;
  }
  select:focus {
    outline: none;
  }
`

export default SelectCountry
