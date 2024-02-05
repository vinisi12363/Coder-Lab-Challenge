import { MainContainer } from "../../Components/MainContainer/MainContainer";
import  Header  from '../../Components/Header/Header';
import { HomePageComponent } from "../../Components/HomePage/HomePageContainer";
import { CategoryComponent } from "../../Components/CategoryComponent/CategoryComponent";
export default function Home() {
  return (
   
    <MainContainer>
         <Header></Header>
      <HomePageComponent>
        <CategoryComponent></CategoryComponent>
      </HomePageComponent>
    </MainContainer>
  );
}
