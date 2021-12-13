import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0px;
  border-bottom: 1px solid #999999;

  .Link_to_home,
  h1 {
    text-decoration: none;
    color: #333333;
    font-size: 2rem;
    font-weight: bolder;
    width: 180px;
    margin-left: 20px;
    height: 40px;
    padding-left: 10px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    .count_cart {
      width: 20px;
      height: 20px;
      background: #4e40cac4;
      border-radius: 50px;
      color: white;
      margin: 0;
      font-size: 12px;
      position: absolute;
      top: 15px;
      right: 235px;
    }
    button {
      background-color: transparent;
      border: none;
      margin-right: 10px;
      width: 120px;
      height: 35px;
      text-align: center;
      font-weight: bolder;
      cursor: pointer;
      font-size: 1rem;
    }

    .icon {
      margin-right: 4px;
      height: 22px;
      width: 21px;
    }
  }

  .button_cart {
  }
`;
