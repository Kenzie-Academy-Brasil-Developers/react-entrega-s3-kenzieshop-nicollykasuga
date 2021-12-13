import styled from "styled-components";

export const Body = styled.div`
  background-color: #f5f5f2;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  position: absolute;
  top: 90px;
  width: 90vw;
  min-height: 600px;
  display: flex;
  background-color: #f5f5f2;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  text-decoration: none;
  max-width: 80vw;

  div {
    margin: 10px;
    width: 690px;
    height: 145px;
    background-color: white;
    list-style: none;
    border-radius: 6px;
    padding: 10px;
    display: flex;

    .Name_product {
      font-size: 0.9rem;
      font-family: Arial, Helvetica, sans-serif;
      margin: 10px;
      height: 60px;
      width: 390px;
      text-align: left;
    }

    .Price_product {
      font-size: 1.1rem;
      font-family: Arial, Helvetica, sans-serif;
      margin-left: 10px;
      font-weight: bolder;
      text-align: left;
    }
    .Price-Box {
      width: 115px;
      height: 145px;
      padding: 0px;
      margin: 0px;
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const Img = styled.img`
  width: 150px;
  height: 138px;
  padding-bottom: 10px;
  border-bottom: 1px solid #999999;
`;

export const SubButton = styled.button`
  width: 22px;
  height: 23px;
  background-color: #403caa;
  border: 1px solid transparent;
  color: aliceblue;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 50px;
  display: flex;
  align-content: center;
  justify-content: center;
  &&:hover {
    background-color: #4e40cac4;
  }
`;
export const Order = styled.div`
  width: 300px;
  position: absolute;
  right: 10px;
  height: 230px;
  top: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19);

  h2 {
    font-size: 1.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 250px;
    margin-left: 20px;
  }

  p {
    font-size: 20px;
  }

  button {
    width: 150px;
    height: 30px;
    margin: 15px auto;
    background-color: #403caa;
    border: 1px solid transparent;
    color: aliceblue;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bolder;
  }
`;