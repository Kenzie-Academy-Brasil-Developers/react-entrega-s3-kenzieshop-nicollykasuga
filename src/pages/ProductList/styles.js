import styled from "styled-components";


export const Content = styled.div`
  position: absolute;
  top: 90px;
  width: 90vw;
  min-height: 600px;
  display: flex;
`;

export const Card = styled.div`
  display: flex;
  background-color: transparent;
  text-decoration: none;
  max-width: 80vw;

  div {
    margin: 10px;
    width: 230px;
    height: 400px;
    background-color: white;
    list-style: none;
    border-radius: 6px;
    padding: 10px;

    .Name_product {
      font-size: 0.9rem;
      font-family: Arial, Helvetica, sans-serif;
      margin: 10px;
      height: 60px;
      text-align: left;
    }

    .Price_product {
      font-size: 1.1rem;
      font-family: Arial, Helvetica, sans-serif;
      margin-left: 10px;
      font-weight: bolder;
      text-align: left;
    }
  }
`;

export const Img = styled.img`
  width: 230px;
  height: 225px;
  padding-bottom: 10px;
  border-bottom: 1px solid #999999;
`;

export const AddButton = styled.button`
  width: 200px;
  height: 30px;
  background-color: #403caa;
  border: 1px solid transparent;
  color: aliceblue;
  font-weight: bold;
  cursor: pointer;
  margin-top: 17px;
  border-radius: 6px;
`;
