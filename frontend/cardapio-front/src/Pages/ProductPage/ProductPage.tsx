import { MainContainer } from "../../Components/MainContainer/MainContainer"
import { HeaderWithUSer } from "../../Components/HeaderWithUsername/HeaderWithUSer"
import { FormProduct }  from "../../Components/ProductsPageComponents/AddProductComponent/FormProduct";

export default function ProductPage(){
    return (
        <MainContainer>
                <HeaderWithUSer></HeaderWithUSer>
                  <div>
                    <FormProduct FormTitle="FORMULÁRIO DE CADASTRO DE PRODUTOS"></FormProduct>
                  </div>
        </MainContainer>
      
    )

}