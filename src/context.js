// import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [global, setGlobal] = useState('')
  const [countries, setCountries] = useState([])
  const [singleCountry, setSingleCountry] = useState('')
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('bangladesh')

  // const api = 'https://api.covid19api.com/summary'
  const api = 'https://corona.lmao.ninja/v2/all'
  const country = 'https://corona.lmao.ninja/v2/countries'

  const fetchData = async (url) => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    setLoading(false)
    setGlobal(data)
    // setCountries(data.Countries)
  }
  const fetchCountry = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setCountries(data)
    // setCountries(data.Countries)
  }
  const fetchSingleCountry = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setSingleCountry(data)
  }
  useEffect(() => {
    fetchSingleCountry(`${country}/${query}`)
  }, [query])

  useEffect(() => {
    fetchCountry(country)
  }, [])

  useEffect(() => {
    fetchData(api)
  }, [])
  return (
    <AppContext.Provider
      value={{ global, countries, loading, setQuery, query, singleCountry }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
