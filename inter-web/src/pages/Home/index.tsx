import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { HomeBackground, BodyContainer, ButtonContainer, InlineContainer, InlineTitle, Greetings, Wallet } from './styles';
import SquareButton from '../../components/SquareButton';
import Header from '../../components/Header';

import useAuth from '../../hooks/userAuth';

import { FiGithub } from "react-icons/fi";

import pix from '../../assets/images/pix.png';
import extrato from '../../assets/images/extrato-bancario.png';
import Card from '../../components/Card';
import Footer from '../../components/Footer';


const Home = () => {
  const navigate = useNavigate();

  const handleToPix = () => {
    navigate('/pix');
  }

  const handleToExtrato = () => {
    navigate('/extrato');
  }
  const {user, getCurrentUser} =  useAuth();

  useEffect(() => {
    getCurrentUser()
  }, [])

  if(!user) {
    return null;
  }
  
  const wallet = user?.wallet || 0;

  return (
    <HomeBackground>
      <Header />
      <Greetings>
        <h3 className='greetings'>Bem vindo(a) {user.firstName} {user.lastName}</h3>
      </Greetings>

      <BodyContainer>
         <Card noShadow width="90%">
            <InlineTitle>
              <h6 className='presentation'>Seu saldo atual é de </h6><br />
            </InlineTitle>
            <InlineContainer>
              <h4 className='wallet'>{wallet.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h4>
            </InlineContainer>
         </Card>
         <Card width='90%' noShadow>
            <ButtonContainer>
              <SquareButton type="button" onClick={handleToPix}>
                Pix <img src={pix} width={70} height={61} alt="logo pix" />
              </SquareButton>
              <SquareButton type="button" onClick={handleToExtrato}>
                Extrato Bancario <img src={extrato} width={172} height={61} alt="Extrato Bancario - Icone" />
              </SquareButton>
            </ButtonContainer>
         </Card>
      </BodyContainer>
      <Footer />
    </HomeBackground>
  )
}

export default Home