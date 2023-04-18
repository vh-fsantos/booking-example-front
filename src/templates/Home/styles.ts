import styled from 'styled-components'

export const Property = styled.div`
  border: 1px solid #d7d8e4;

  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 20px;
  justify-content: space-between;
  gap: 20px;
  height: 100px;
  box-shadow: 0px 3px 6px #d7d8e4;
  .unit {
    position: relative;
  }

  .title {
    color: #00adef;
    font-weight: bold;
    font-size: 1rem;
  }
  .units {
    display: flex;
    flex-wrap: wrap;
    gap: 0px 10px;
    font-size: 0.8rem;
    p {
      color: rgb(34, 66, 81);
    }
  }
`

export const Container = styled.div`
  box-sizing: border-box;
  padding: 2.5%;
  position: relative;

  height: 100%;
  .listTitle {
    margin-bottom: 20px;
  }

  .addProperty {
    position: fixed;
    z-index: 999;
    bottom: 2.5%;
    gap: 5px;
    font-size: 1.2rem;
    padding: 2rem;
    right: 2.5%;
  }
`

export const PropertyWrapper = styled.div`
  display: grid;
  gap: 2rem;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`
