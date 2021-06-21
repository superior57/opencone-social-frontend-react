import styled from "styled-components";

export const Footermenudiv = styled.div`
  position: relative;
`;

export const Menudiv = styled.div`
  text-align: center;
`;

export const Addiconbutton = styled.button`
  position: absolute;
  left: 50%;
  margin-left: -20px;
  bottom: 100%;
  background-color: #fff;
  font-size: 20px;
  transition-duration: 0.4s;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
`;

export const Menuul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media (max-width: 567px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Menuulli = styled.li`
  padding: 0 20px;
  display: inline-block;
  cursor: point;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
    color: #2785c7;
  };
  @media (max-width: 567px) {
    padding: 0 10px;
  }
`;

export const Menuliicondiv = styled.div`
  font-size: 28px;
  cursor: point;
`;

export const Menulifontdiv = styled.div`
  font-size: 14px;
  cursor: point;
`;
