import { MainContainer } from "../../Components/MainContainer/MainContainer";
import { HeaderWithUSer } from "../../Components/HeaderWithUsername/HeaderWithUSer";
import { DeleteProductComponent } from "../../Components/ProductsPageComponents/DeleteProduct/ProductComponent/ProductDeleteContainer";
export default function DeleteProductPage(){
    return (
        <MainContainer>
        <HeaderWithUSer></HeaderWithUSer>
        <DeleteProductComponent></DeleteProductComponent>
        </MainContainer>
    )
}