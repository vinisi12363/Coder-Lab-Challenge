import { MainContainer } from "../../Components/MainContainer/MainContainer";
import { HeaderWithUSer } from "../../Components/HeaderWithUsername/HeaderWithUSer";
import { DeleteProductComponent } from "../../Components/ProductsPageComponents/DeleteProduct/ProductComponent/ProductDeleteContainer";
import { Title } from "../../Components/Title";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
export default function DeleteProductPage() {
  const storedUser = useLocalStorage.getLocalStorage("user");
  return (
    <MainContainer>
      {storedUser?.token ? (
        <>
          <HeaderWithUSer></HeaderWithUSer>
          <DeleteProductComponent></DeleteProductComponent>
        </>
      ) : (
        <div>
          <Title
            text="Desculpe, Acesso não autorizado , por favor faça login e tente novamente"
            textColor="white"
            textSize="60px"
          ></Title>
        </div>
      )}
    </MainContainer>
  );
}
