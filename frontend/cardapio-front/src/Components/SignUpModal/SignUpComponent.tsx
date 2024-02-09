import { IoCloseOutline } from 'react-icons/io5';
import '../SignInModal/SigninModal.scss';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { UserApi } from '../../Api/UserApi';
import { UseLowerCase } from '../../Hooks/useLowerCase';
import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { useContextUser } from '../../Contexts/UserContext';

type SignUpComponentProps = {
    setModalIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    modalIsOpen:boolean;
}

export const SignUpComponent: React.FC<SignUpComponentProps> = ({modalIsOpen, setModalIsOpen})=>{
    const [displayMode, setDisplayMode] = useState<string>('none');
    const [disabled, setDisabled] = useState<boolean>(false);
    const [name , setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {setUpUser} = useContextUser();
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
        setName('');
        setUsername('');
        setPassword('');
    }  

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setDisabled(true);
        if(username.length > 0 && password.length > 0 && name.length > 0){
            try {
        
                 const result = await  UserApi.createUser({ name:name, username:username, password:password});
                 console.log(result);
                 if (result) {
                    toast.success('Usuário cadastrado com sucesso!');
                    const result = await UserApi.authUser({username:username, password:password});
                    
                    if(result?.data?.name){
                        const user = {
                            name: result.data.name,
                            token: result.data.access_token,
                        }
                        setUpUser(user);
                        toast.success('Efetuando login ...');
                        useLocalStorage.setLocalStorage("user", user );
                        setTimeout(()=>{
                            setModalIsOpen!(false);
                            setDisabled(false);
                        }, 2000);
                    }
                
                 }
            } catch (error : any) {
                console.log(error);
                if(error.request.status === 409){
                   toast.error('ERRO! Usuário já cadastrado');
                }else if (error.request.status === 400){
                   toast.error(error.request.response);
                }else if (error.request.status === 404){
                    toast.error(error.request.response);
                 }else if (error.request.status === 500){
                   toast.error('Erro ao cadastrar usuário');
                }
            }
            
        }
        setTimeout(()=>{
            setModalIsOpen!(false);
            setDisabled(false);
            setUsername('');
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
                      placeholder="Seu nome:"
                      required
                      value={name}
                      onChange={(e) => {
                         const name = UseLowerCase(e.target.value)
                        setName(name)}}
                        disabled={disabled}
                    ></input>   
                    <input 
                      type="text"
                      placeholder="Username de acesso:"
                      required
                      value={username}
                      disabled={disabled}
                      onChange={(e) =>
                       { 
                        const user = UseLowerCase(e.target.value)
                        setUsername(user)
                       }
                      }
                    ></input>
                    <input 
                      type="password"
                      placeholder="Sua senha:"
                      required
                      value={password}
                      disabled={disabled}
                      onChange={(e)=>{setPassword(e.target.value)}}
                    ></input>
                    <button 
                        type='submit'
                        disabled={disabled}
                        >{disabled?"Cadastrando ..." : "Cadastrar"}</button>
                    <button className='closeButton' onClick={()=>{closeModal()}}>
                         <IoCloseOutline size={60} color='red'></IoCloseOutline>
                    </button>
                </form>
            </div>
        </div>
    )
}