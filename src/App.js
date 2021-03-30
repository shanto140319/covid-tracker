import './App.css'
import Total from './components/Total'
import styled from 'styled-components'
import Country from './components/Country'

function App() {
  return (
    <Wrapper>
      <h2 className='main-header'>COVID-19 CORONAVIRUS PANDEMIC</h2>
      <Total />
      <Country />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .main-header {
    text-align: center;
    background: var(--clr-primary-5);
    padding: 1rem;
  }
`
export default App
