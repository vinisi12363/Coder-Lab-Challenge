import "./header.scss"; 
import { useContextUser } from "../../Contexts/UserContext";
import { HeaderDefault } from "../HeaderDefault/DefaultHeadet";
import {HeaderWithUSer} from "../HeaderWithUsername/HeaderWithUSer";
type HeaderProps = {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSignUpModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    
}


export const  Header:React.FC<HeaderProps> = ({setModalIsOpen, setSignUpModalOpen}) => {
  const {user} = useContextUser();
  return (
    <>
        {user?.name ? 
                  <HeaderWithUSer></HeaderWithUSer>
           : 
           <HeaderDefault setModalIsOpen={setModalIsOpen} setSignUpModalOpen={setSignUpModalOpen}></HeaderDefault>
         
                   
        }
     </>
  );
}
