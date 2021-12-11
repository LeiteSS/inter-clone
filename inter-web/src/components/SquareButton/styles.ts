import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 900px !important;
  max-width: 100% !important;
  max-height: 100% !important;
  height: 100px !important;
  text-align: center;
  padding: 0px;
  margin: 05px;
  font-size: 15px;

  color: ${({theme}) => theme.colors.background};
  background: ${({theme}) => theme.colors.primary};
  border: 1px solid ${({theme}) => theme.colors.primary};
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: opacity(0.8)
  }

  &:disabled {
    filter: opacity(0.4)
  }
`