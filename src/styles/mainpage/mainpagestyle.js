import styled from "styled-components";

export const Maindiv = styled.div`
  display: flex;
  @media screen and (max-width: 928px) {
    .navdiv {
      display: none;
    }
  }
`;

export const Navbardiv = styled.div`
  height: 100vh;
  background-color: #ffffff;
  width: 319px;
  border-style: none solid none none;
  border-width: 1px;
  border-color: #ccc;
`;

export const Descriptiondiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Headerdiv = styled.div`
  padding: 20px 0px;
  background-color: #fff;
  border-style: none none solid none;
  border-color: #ccc;
  border-width: 1px;
`;

export const Contentdiv = styled.div`
  height: 100%;
  overflow: auto;
  background-image: url("./img/background.png");
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const Footerdiv = styled.div`
  padding: 20px 0px;
  text-align: center;
  background-color: #fff;
  border-style: solid none none none;
  border-color: #ccc;
  border-width: 1px;
`;
