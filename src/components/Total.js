import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import SingleTotal from './SingleTotal'

const Total = () => {
  const { global, loading } = useGlobalContext()
  if (loading) {
    return <div class='loading'></div>
  }
  const {
    updated,
    cases,
    tests,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
    active,
    critical,
  } = global
  var date = new Date(updated)
  return (
    <Wrapper>
      <div className='heading'>
        <h3>live status</h3>
        <h4>Updated on : {date.toString()}</h4>
        <h3>Total</h3>
      </div>
      <section className='section'>
        <SingleTotal title='Total Tests' number={tests} />
        <SingleTotal title='Total Cases' number={cases} />
        <SingleTotal title='Total Deaths' number={deaths} />
        <SingleTotal title='Total Recovered' number={recovered} />
        <SingleTotal title='Active Cases' number={active} />
        <SingleTotal title='Critical conditions' number={critical} />
      </section>
      <div className='today'>
        <h3>Today's total</h3>
        <div className='section'>
          <SingleTotal title='Caese' number={todayCases} />
          <SingleTotal title='Deaths' number={todayDeaths} />
          <SingleTotal title='Recovered' number={todayRecovered} />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  text-align: center;
  margin: 2rem 1rem;
  display: grid;
  place-items: center;
  justify-items: center;
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
  .today {
    text-align: center;
    margin: 2rem 0;
  }
  .today h3 {
    padding-bottom: 1rem;
  }
`
export default Total
