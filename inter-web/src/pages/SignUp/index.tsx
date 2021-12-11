import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/userAuth';

import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import bgLogin from '../../assets/images/background-login.jpg';
import logo from '../../assets/images/logo.svg';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [wallet, setWallet] = useState(Number);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  const { userSignUp } = useAuth();

  const handleToSignIn = async () => {
    const data = {
      firstName,
      lastName,
      wallet,
      email, 
      password
    }

    const response = await userSignUp(data);

    if(response.id) {
      navigate('/home');
      return;
    }

    alert('Usuario já cadastrado');
  }
  return (
    <Wrapper>
      <Background image={bgLogin}/>
      <Card width="403px" height="auto">
        <img src={logo} width={172} height={61} alt="logo inter" />
        <InputContainer>
          <Input placeholder='Nome' value={firstName} onChange={e => setFirstName(e.target.value)} />
          <Input placeholder='Sobrenome' value={lastName} onChange={e => setLastName(e.target.value)} />
          <Input placeholder='Valor Inicial' value={wallet} onChange={e => setWallet(e.target.valueAsNumber)} type="number" />
          <Input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
          <Input placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)} type="password" />
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={handleToSignIn}>Entrar</Button>
          <p>Já tem uma conta? <Link to="/">Entre</Link> </p>
        </ButtonContainer>
      </Card>
    </Wrapper>
  )
}

export default SignUp