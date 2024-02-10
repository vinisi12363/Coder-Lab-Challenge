import './header.scss';
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
type HeaderProps = {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSignUpModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    
}

export const HeaderDefault: React.FC<HeaderProps> = ({setModalIsOpen , setSignUpModalOpen}) => {
    return(
        <div className="headerInfo">
        <div className="headerLogo">
        <Link className="linkPWUser" to={"/"}>
          <img className="imgLogo" src={Logo} alt="Vini Fast Food"></img>
        </Link>
        </div>
        <div className="headerOptions">
          <p className='linkP' onClick={()=>{setModalIsOpen(true)}}>Logar</p>

          <p>{"   ou  "}</p>

          <p className='linkP' onClick={()=>{setSignUpModalOpen(true)}}>Cadastrar-se</p>
        </div>
      </div>
    );

}