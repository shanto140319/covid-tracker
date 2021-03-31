// import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [global, setGlobal] = useState('')
  const [countries, setCountries] = useState([])
  const [singleCountry, setSingleCountry] = useState('')
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('Afghanistan')
  const [search, setSearch] = useState('')

  //building category
  const allCategories = [
    'all',
    ...new Set(countries.map((item) => item.continent)),
  ]

  //creating new country varibale storing countries
  const [allCountries, setAllCountries] = useState([])

  //filter by continent
  const filterItem = (continent) => {
    if (continent === 'all') {
      setAllCountries(countries)
      return
    }
    let newItems = countries.filter((item) => item.continent === continent)
    setAllCountries(newItems)
  }

  const api = 'https://corona.lmao.ninja/v2/all'
  const country = 'https://corona.lmao.ninja/v2/countries'

  const fetchData = async (url) => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    setLoading(false)
    setGlobal(data)
  }
  const fetchCountry = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setCountries(data)
    setAllCountries(data)
  }

  const fetchSingleCountry = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setSingleCountry(data)
  }

  useEffect(() => {
    if (search.length > 0) {
      let searches = countries.filter(
        (item) =>
          item.country.toLowerCase().startsWith(search) ||
          item.country.startsWith(search)
      )
      setAllCountries(searches)
    } else {
      setAllCountries(countries)
    }
  }, [search])

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
      value={{
        global,
        countries,
        allCountries,
        loading,
        setQuery,
        query,
        singleCountry,
        search,
        setSearch,
        filterItem,
        allCategories,
      }}
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
