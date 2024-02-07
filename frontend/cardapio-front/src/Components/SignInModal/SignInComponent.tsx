import { IoCloseOutline } from 'react-icons/io5';
import './SigninModal.scss';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { UserApi } from '../../Api/UserApi';
import { UseLowerCase } from '../../Hooks/useLowerCase';
import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { useContextUser } from '../../Contexts/UserContext';
type SignInComponentProps = {
    setModalIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    modalIsOpen:boolean;
}

export const SignInComponent: React.FC<SignInComponentProps> = ({modalIsOpen, setModalIsOpen})=>{
    const [disabled, setDisabled] = useState<boolean>(false);
    const {user, setUpUser} = useContextUser();
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
        setDisabled(false);
        setUserName('');
        setPassword('');
        useLocalStorage.deleteLocalStorage("user");
        setUpUser({name: '', token: ''});
    }  

    const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setDisabled(true);

        if(userName.length> 0 && password.length> 0){
            try {
                const result = await UserApi.authUser({username:userName, password:password});
                console.log(result);
                if (result?.name) {
                    const user = {
                        name: result.name,
                        token: result.access_token,
                    }
                    setUpUser(user);
                    useLocalStorage.setLocalStorage("user", user );        
                    toast.success('Logado com sucesso!')
                }
            } catch (error: any) {
                console.log(error);
             if (error.request.status === 400 || 404){
                toast.error(error.request.response);
             }else if (error.request.status === 500){
                toast.error('Erro ao logar usuário');
             }
             closeModal();
            }
            
        }
        setTimeout(()=>{
            closeModal();
        }, 2000);
    }
    return (
        <div className='signInContainer' style={{display:displayMode}}>
            <div className="signInComponent">
                <h1>Logar</h1>
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <input 
                      type="text"
                      placeholder="Usuário"
                      required
                      value={userName}
                      disabled={disabled}
                      onChange={(e) => setUserName(e.target.value)}
                    ></input>
                    <input 
                      type="password"
                      placeholder="Senha"
                      required
                      value={password}
                      disabled={disabled}
                      onChange={(e)=>{setPassword(e.target.value)}}
                    ></input>
                    <button disabled={disabled}type='submit'>{disabled? "Logando..." : "Logar"}</button>
                    <button disabled={disabled} className='closeButton' onClick={()=>{closeModal()}}>
                         <IoCloseOutline size={60} color='red'></IoCloseOutline>
                    </button>
                </form>
            </div>
        </div>
    )
}