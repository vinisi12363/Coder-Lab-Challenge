import './header.scss';
import Logo from "../../assets/logo.png";
import { useContextUser } from "../../Contexts/UserContext";
import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { Link } from 'react-router-dom';


export const HeaderWithUSer: React.FC = () => {
    const {user, setUpUser} = useContextUser();
    const userLocalStorage = useLocalStorage.getLocalStorage("user");
    console.log (user);
    console.log( userLocalStorage);
    
    const logout = () => {
        setUpUser({name: '', token: ''})
        useLocalStorage.deleteLocalStorage("user");
        window.location.reload();
    }
    
    return(
        <div className="headerInfo">
        <div className="headerLogo">
          <img className="imgLogo" src={Logo} alt="Vini Fast Food"></img>
        </div>
        <div className="headerOptions">
          <p>{`Bem Vindo(a): ${user?.name}`} </p>

          

          <Link className='linkP' to={'/produtos/cadastrar'}>
                <p className='linkP' onClick={()=>{}}>Cadastrar Produto</p>
          </Link>

           <p className='linkP' onClick={()=>{logout()}}>Sair</p>
        </div>
      </div>
    );

}