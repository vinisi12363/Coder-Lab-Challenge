import { MainContainer } from "../../Components/MainContainer/MainContainer";
import  Header  from '../../Components/Header/Header';
import { HomePageComponent } from "../../Components/HomePage/HomePageContainer";
import { CategoryComponent } from "../../Components/CategoryComponent/CategoryComponent";
import { ProductComponent } from "../../Components/ProductComponent/ProductContainer";

export default function Home() {
  return (
   
    <MainContainer>
         <Header></Header>
      <HomePageComponent>
        <CategoryComponent></CategoryComponent>
        <ProductComponent></ProductComponent>
      </HomePageComponent>
    </MainContainer>
  );
}
