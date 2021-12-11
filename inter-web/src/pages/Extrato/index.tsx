import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { HomeBackground, BodyContainer, InlineContainer, InlineTitle} from './styles';
import Header from '../../components/Header';

import useAuth from '../../hooks/userAuth';

import Card from '../../components/Card';
import Statement from './Statement';

import arrowIcon from '../../assets/images/arrow.png';
import { FiArrowLeft } from 'react-icons/fi';
import Footer from '../../components/Footer';

const Extrato = () => {
  const {user, getCurrentUser} =  useAuth();
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate('/home');
  }

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
      <BodyContainer>
          <div>
            <a href="#" onClick={handleToHome}>
              <FiArrowLeft size={25} color='#888' />
              <span>   Voltar para o Inicio</span> 
            </a>
            <Card width='90%' noShadow>
              <InlineTitle>
                <h2 className="h2">Saldo Atual</h2>
              </InlineTitle>
              <InlineContainer>
                <h3 className="wallet">
                  {wallet.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                </h3>
              </InlineContainer>
            </Card>
          </div>
          <div>
            <Card noShadow width="90%">
              <InlineTitle>
                <h2 className="h2">Extrato da conta</h2>
              </InlineTitle>
              <Statement />
            </Card>
          </div>
      </BodyContainer>
    </HomeBackground>
  )
}

export default Extrato