import { FiGithub } from "react-icons/fi";
import { FooterWrapper, FooterContainer } from "./styles";

import signature from '../../assets/images/signature.svg';

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <img src={signature} width={150} height={90} alt="assinatura" />
      <a href="https://www.github.com/LeiteSS/" target="_blank" rel="noopener noreferrer">
        <FiGithub size={40} color="#FB6910" />
      </a>
      <h2 className="h2">Made with <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">ReactJs.</a> </h2>
    </FooterWrapper>
  </FooterContainer>
)

export default Footer