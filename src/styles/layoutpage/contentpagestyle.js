import styled from "styled-components";

export const Backopacitydiv = styled.div`
  background-color: #000;
  opacity: 0.6;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

export const Backimgdiv = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Opacitydiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
`;

export const Adpostdiv = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  top: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Adpostbuttondiv = styled.div`
  flex: 1;
  margin: auto;
  position: relative;
  font-family: Poppins-Bold;
  color: #fff;
  padding: 0px 50px;
  
  @media screen and (min-width: 567px) {
    min-width: 350px;
  }
`;

export const Adpostdivsmallp = styled.p`
  font-size: 18px;
`;

export const Adpostdivbigp = styled.p`
  font-size: 48px;
  font-weight: bold;
`;

export const Adpostdivbutton = styled.button`
  height: 50px;
  background-color: #2785c7;
  font-size: 14;
  padding: 16px 24px;
  color: #fff;
  text-decoration: none;
  border: none;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #4caf50;
    color: white;
  }
`;

export const Adpostmenu = styled.div`
  flex: 2;
  position: relative;
  margin: auto;
`;

export const Menuimagediv = styled.div`
  width: 100%;
  border-radius: 4;
  margin: 0;
  display: inline-block;
`;

export const Menudivsubimg = styled.div`
  background-color: #fff;
`;

export const Menudivdescription = styled.div`
  background-color: #fff;
  padding: 12px 10px;
  font-family: Poppins-Regular;
  border-bottom: 1px solid #ccc;
`;

export const Menudivdescriptionspanleft = styled.span`
  float: left;
`;

export const Menudivdescriptionspanright = styled.span`
  float: right;
`;

export const Menuavatardiv = styled.div`
  padding: 10px 10px;
  background-color: #fff;
`;

export const Menuavatarright = styled.span`
  float: right;
  font-size: 14px;
  padding: 6px 9px;
  background-color: #e9f6ff;
  color: #2785c7;
`;
