import './header.scss';
import Logo from "../../assets/logo.png";
import { useContextUser } from "../../Contexts/UserContext";
import { Link } from 'react-router-dom';


export const HeaderWithUSer: React.FC = () => {
    const {user, setUpUser} = useContextUser();
    const logout = () => {
        setUpUser({name: '', token: ''})
        localStorage.removeItem('user');
        window.location.reload();
    }
    return(
        <div className="headerInfo">
        <div className="headerLogo">
          <img className="imgLogo" src={Logo} alt="Vini Fast Food"></img>
        </div>
        <div className="headerOptions">
          <p>{`Bem Vindo(a): ${user?.name}`} </p>

          

          <Link to={'/produtos'}>
                <p className='linkP' onClick={()=>{}}>Cadastrar Produto</p>
          </Link>

           <p className='linkP' onClick={()=>{logout()}}>Sair</p>
        </div>
      </div>
    );

}