// import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [global, setGlobal] = useState('')
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

  // const api = 'https://api.covid19api.com/summary'
  const api = 'https://corona.lmao.ninja/v2/all'
  const country = 'https://corona.lmao.ninja/v2/countries'

  const fetchData = async (url) => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setLoading(false)
    setGlobal(data)
    // setCountries(data.Countries)
  }
  const fetchCountry = async (url) => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setLoading(false)
    setCountries(data)
    // setCountries(data.Countries)
  }
  useEffect(() => {
    fetchCountry(`${country}/${query}`)
  }, [query])

  useEffect(() => {
    fetchData(api)
  }, [])
  return (
    <AppContext.Provider
      value={{ global, countries, loading, setQuery, query }}
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
