import { MainContainer } from "../../Components/MainContainer/MainContainer"
import { HeaderWithUSer } from "../../Components/HeaderWithUsername/HeaderWithUSer"
import { FormEditProduct } from "../../Components/ProductsPageComponents/UpdateProduct/updateProductForm/FormEditProduct";
import {EditProductComponent} from "../../Components/ProductsPageComponents/UpdateProduct/ProductComponent/ProductEditContainer";
export default function EditProductPage(){
    return (
        <MainContainer>
                <HeaderWithUSer></HeaderWithUSer>
                  <div>
                    <EditProductComponent></EditProductComponent>
                    <FormEditProduct FormTitle = "FORMULÁRIO DE EDIÇÃO DE PRODUTOS"></FormEditProduct>
                  </div>
        </MainContainer>
    )

}