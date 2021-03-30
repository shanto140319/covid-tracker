import './App.css'
import Total from './components/Total'
import { useGlobalContext } from './context'
import styled from 'styled-components'
import Country from './components/Country'

function App() {
  return (
    <Wrapper>
      <h2>COVID-19 CORONAVIRUS PANDEMIC</h2>
      <Total />
      <Country />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  h2 {
    text-align: center;
  }
`
export default App
