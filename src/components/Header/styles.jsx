import styled from "styled-components";

/* HEADER */
export const Headerdiv = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 1320px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
  margin: 0;

  background: transparent;
  border-bottom: none;
  z-index: 10;
`;

export const Left = styled.div`
  display: flex;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 14px;

  a {
    font-family: "Hahmlet", serif;
    font-size: 14px;
    color: #ffffff;
    text-decoration: none;
    white-space: nowrap;
  }

  a:hover {
    opacity: 0.6;
  }
`;

export const Logo = styled.div`
  font-family: "IM FELL French Canon SC", serif;
  font-size: 22px;
  letter-spacing: 1px;
  color: #ffffff;
`;

export const Button = styled.button`
  font-size: 14px;
  padding: 9px 12px;
  background: #c3a561;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 7px;
  margin-right: 16px;
`;