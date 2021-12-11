import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import bgLogin from '../../assets/images/background-login.jpg';
import logo from '../../assets/images/logo.svg';

import useAuth from '../../hooks/userAuth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { userSignIn } = useAuth();

  const handleToSignIn = async () => {
    const data = {
      email, 
      password
    }

    const response = await userSignIn(data);

    if(response.id) {
      navigate('/home');
      return;
    }

    alert('Usuario ou senha inválida');
  }
  return (
    <Wrapper>
      <Background image={bgLogin}/>
      <Card width="403px" height="auto">
        <img src={logo} width={172} height={61} alt="logo inter" />
        <InputContainer>
          <Input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
          <Input placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)}  type="password" />
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={handleToSignIn}>Entrar</Button>
          <p>Ainda não é cadastrado? <Link to="/signup">cadastre-se</Link> </p>
        </ButtonContainer>
      </Card>
    </Wrapper>
  )
}

export default SignIn