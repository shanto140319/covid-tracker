import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import Continent from './Continent'
import SearchForm from './SearchForm'
import SelectCountry from './SelectCountry'
import SingleCountry from './SingleCountry'

const Country = () => {
  const { allCountries } = useGlobalContext()

  return (
    <Wrapper>
      <SelectCountry />
      <SingleCountry />
      <SearchForm />
      <Continent />
      <div className='main'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>flag</th>
              <th>country</th>
              <th>total cases</th>
              <th>new cases</th>
              <th>total deaths</th>
              <th>new deaths</th>
              <th>total recovered</th>
              <th>Active cases</th>
              <th>Critical</th>
              <th>tests</th>
              <th>population</th>
            </tr>
          </thead>
          <tbody>
            {allCountries.map((item, index) => {
              const {
                countryInfo,
                country,
                cases,
                todayCases,
                deaths,
                todayDeaths,
                recovered,
                active,
                critical,
                tests,
                population,
              } = item
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={countryInfo.flag} alt='' />
                  </td>
                  <td>{country}</td>
                  <td>{cases}</td>
                  <td>{todayCases}</td>
                  <td>{deaths}</td>
                  <td>{todayDeaths}</td>
                  <td>{recovered}</td>
                  <td>{active}</td>
                  <td>{critical}</td>
                  <td>{tests}</td>
                  <td>{population}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  margin-bottom: 3rem;
  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td img {
    height: 50px;
    width: 70px;
  }
  table td,
  table th {
    text-transform: capitalize;
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4caf50;
    color: white;
  }
`
export default Country
