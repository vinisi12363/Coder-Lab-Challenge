import './header.scss';
import  Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <div className="headerInfo">
            <div className="headerLogo">
               <img className='imgLogo' src={Logo} alt='Vini Fast Food'></img>
            </div>
            <div className='headerOptions'>
                <Link className='pageLink' to='/signin'>
                    <p>Login</p>
                </Link>
                <Link className='pageLink'  to='/signup'>
                    <p>Cadastro</p>
                </Link>
            </div>
        </div>
    )
}