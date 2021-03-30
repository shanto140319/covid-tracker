import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import SingleTotal from './SingleTotal'

const SingleCountry = () => {
  const { singleCountry } = useGlobalContext()
  const {
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
  } = singleCountry
  return (
    <Wrapper>
      <section className='section'>
        <SingleTotal title='Name ' number={country} />
        <SingleTotal title='total cases' number={cases} />
        <SingleTotal title='today cases' number={todayCases} />
        <SingleTotal title='Total Deaths' number={deaths} />
        <SingleTotal title='today Deaths' number={todayDeaths} />
        <SingleTotal title='Total Recovered' number={recovered} />
        <SingleTotal title='Active cases' number={active} />
        <SingleTotal title='Critical condition' number={critical} />
        <SingleTotal title='Total Tests' number={tests} />
        <SingleTotal title='population' number={population} />
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  margin: 2rem auto;

  .section {
    margin: 1rem auto;
    display: grid;
    place-items: center;
    justify-items: center;
    gap: 1.5rem;
    @media only screen and (min-width: 500px) {
      grid-template-columns: auto auto;
    }
    @media only screen and (min-width: 800px) {
      grid-template-columns: auto auto auto;
    }
    @media only screen and (min-width: 1060px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
export default SingleCountry
