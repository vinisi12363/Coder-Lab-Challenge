import { IoCloseOutline } from 'react-icons/io5';
import '../SignInModal/SigninModal.scss';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
type SignUpComponentProps = {
    setModalIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    modalIsOpen:boolean;
}

export const SignUpComponent: React.FC<SignUpComponentProps> = ({modalIsOpen, setModalIsOpen})=>{
    const [displayMode, setDisplayMode] = useState<string>('none');
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    useEffect(()=>{
        if(modalIsOpen){
            setDisplayMode('flex');
        }
        else{
            setDisplayMode('none');
        }
    },[modalIsOpen]);
    const closeModal = () =>{  
        setModalIsOpen!(false); 
        setUserName('');
        setPassword('');
    }  

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if(userName && password){
            toast.success('Logado com sucesso!')
            // se conseguir fazr o login com os dados do banco 
        }
        setTimeout(()=>{
            setModalIsOpen!(false);
            setUserName('');
            setPassword('');
        }, 2000);
    }
    return (
        <div className='signInContainer' style={{display:displayMode}}>
            <div className="signInComponent">
                <h1>Cadastrar</h1>
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <input 
                      type="text"
                      placeholder="Usuário"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    ></input>
                    <input 
                      type="password"
                      placeholder="Senha"
                      required
                      value={password}
                      onChange={(e)=>{setPassword(e.target.value)}}
                    ></input>
                    <button type='submit'>Logar</button>
                    <button className='closeButton' onClick={()=>{closeModal()}}>
                         <IoCloseOutline size={60} color='red'></IoCloseOutline>
                    </button>
                </form>
            </div>
        </div>
    )
}