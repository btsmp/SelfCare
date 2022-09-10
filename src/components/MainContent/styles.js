import styled from "styled-components";

export const Container = styled.main`
  .bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #161616;
    padding: 20px 32px;
    font-size: 14px;
    line-height: 17px;
    border-bottom: 0.2px solid rgba(165, 161, 161, 0.3);

    > span:nth-child(1) {
      text-transform: uppercase;
    }
    
  }

  .products{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 28px 33px;
    place-content: center;
    gap: 20px 90px;
  } 

  .prod{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    gap: 5px;
    color: #161616;

    > h1  {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      padding: 2px;
    }

    > p {
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      > span {
        font-weight: 700;
        color: #5CA720
      }
    }
  }
  
  .img-container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 126px;
    width: 126px;
    overflow: hidden;

    > img {
      height: 126px;
    }
  }
`