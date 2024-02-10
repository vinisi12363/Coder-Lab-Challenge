import { MainContainer } from "../../Components/MainContainer/MainContainer"
import { HeaderWithUSer } from "../../Components/HeaderWithUsername/HeaderWithUSer"
import { FormEditProduct } from "../../Components/ProductsPageComponents/UpdateProduct/updateProductForm/FormEditProduct";
import {EditProductComponent} from "../../Components/ProductsPageComponents/UpdateProduct/ProductComponent/ProductEditContainer";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { Title } from "../../Components/Title";
export default function EditProductPage(){
    const userLocalStorage = useLocalStorage.getLocalStorage("user");
    return (

        <MainContainer>
                {userLocalStorage?.token? (<>
                    <HeaderWithUSer></HeaderWithUSer>
                  <div>
                    <EditProductComponent></EditProductComponent>
                    <FormEditProduct FormTitle = "FORMULÁRIO DE EDIÇÃO DE PRODUTOS"></FormEditProduct>
                  </div>
                </>) : ( 
                <div>
                   
                    <Title text="Desculpe, Acesso não autorizado , por favor faça login e tente novamente" textColor="white"
            textSize="60px"></Title>
                    
                </div>

                    )}
              
        </MainContainer>
    )

}