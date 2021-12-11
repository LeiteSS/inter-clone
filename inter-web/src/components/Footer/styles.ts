import styled from "styled-components";


export const FooterContainer = styled.footer`
  width: 100%;
  height: 90px;

  background-color: ${({theme}) => theme.colors.tertiary};

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  bottom: 0;
  right: 0; 
`

export const FooterWrapper = styled.div`
  width: 80%;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`