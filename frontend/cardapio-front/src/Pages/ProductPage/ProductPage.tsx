import { MainContainer } from "../../Components/MainContainer/MainContainer"
import { HeaderWithUSer } from "../../Components/HeaderWithUsername/HeaderWithUSer"
import { FormProduct }  from "../../Components/ProductsPageComponents/AddProductComponent/FormProduct";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { Title } from "../../Components/Title";

export default function ProductPage(){
    const userLocalStorage = useLocalStorage.getLocalStorage("user");
    return (
        <MainContainer>
            {userLocalStorage?.token ? (  
                <>
                <HeaderWithUSer></HeaderWithUSer>
                  <div>
                    <FormProduct FormTitle="FORMULÁRIO DE CADASTRO DE PRODUTOS"></FormProduct>
                  </div>
                  </>  
                ) : (
                    <div><Title text="Desculpe, Acesso não autorizado , por favor faça login e tente novamente" textColor="white"
                    textSize="60px"></Title></div>
                )}
              
        </MainContainer>
      
    )

}