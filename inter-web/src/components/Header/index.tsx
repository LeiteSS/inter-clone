import { useNavigate } from "react-router-dom"

import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles"

import useAuth from '../../hooks/userAuth';
import logo from '../../assets/images/logo.svg'
import UserCircle from "../UserCircle"

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const initials = user.firstName.substr(0,1)+user.lastName.substr(0,1);

  const handleToLogoff = () => {
    navigate('/');
  }

  const handleToHome = () => {
    navigate('/home');
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <a href="#" onClick={handleToHome}>
          <img src={logo} width={172} height={61} alt="logo inter" />
        </a>
        <UserInfo>
          <UserCircle initials={initials} />
          <div>
            <p>Olá, <span className="primary-color font-bold">{user.firstName} {user.lastName}</span></p>
            <span className="count font-bold">{user.accountNumber}-{user.accountDigit}</span><br />
            <a href="#" onClick={handleToLogoff}>Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header
