import "./header.scss";
import Logo from "../../assets/logo.png";

type HeaderProps = {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSignUpModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    
}


export const  Header:React.FC<HeaderProps> = ({setModalIsOpen, setSignUpModalOpen}) => {
  return (
    <div className="headerInfo">
      <div className="headerLogo">
        <img className="imgLogo" src={Logo} alt="Vini Fast Food"></img>
      </div>
      <div className="headerOptions">
        <p className='linkP' onClick={()=>{setModalIsOpen(true)}}>Logar</p>

        <p>{"   ou  "}</p>

        <p className='linkP' onClick={()=>{setSignUpModalOpen(true)}}>Cadastrar-se</p>
      </div>
    </div>
  );
}
