import "./header.scss"; 
import { HeaderDefault } from "../HeaderDefault/DefaultHeadet";
import {HeaderWithUSer} from "../HeaderWithUsername/HeaderWithUSer";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

type HeaderProps = {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSignUpModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    
}


export const  Header:React.FC<HeaderProps> = ({setModalIsOpen, setSignUpModalOpen}) => { 
  const userLocalStorage = useLocalStorage.getLocalStorage("user");
  
 
  return (
    <>
        {userLocalStorage?.name !== undefined ? 
                  <HeaderWithUSer></HeaderWithUSer>
           : 
           <HeaderDefault setModalIsOpen={setModalIsOpen} setSignUpModalOpen={setSignUpModalOpen}></HeaderDefault>
         
                   
        }
     </>
  );
}
