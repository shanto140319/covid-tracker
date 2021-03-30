import styled from 'styled-components'

const SingleTotal = ({ title, number }) => {
  return (
    <Wrapper>
      <div
        className={`${
          title.match('Recovered')
            ? 'green'
            : title.match('Deaths')
            ? 'red'
            : title.match('Critical')
            ? 'orange'
            : null
        }`}
      >
        <h4>{title}</h4>
        <h4>{number}</h4>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .red {
    background: red;
    color: #fff;
  }
  .orange {
    background: orange;
    color: #fff;
  }
  .green {
    background: green;
    color: #fff;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100px;
    width: 200px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.36);
    box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.36);
  }
`
export default SingleTotal
