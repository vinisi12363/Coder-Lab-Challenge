import { MainContainer } from "../../Components/MainContainer/MainContainer";
import  { Header }  from '../../Components/Header/Header';
import { HomePageComponent } from "../../Components/HomePage/HomePageContainer";
import { CategoryComponent } from "../../Components/CategoryComponent/CategoryComponent";
import { ProductComponent } from "../../Components/ProductComponent/ProductContainer";
import { SignInComponent } from "../../Components/SignInModal/SignInComponent";
import { SignUpComponent } from "../../Components/SignUpModal/SignUpComponent";
import { useState } from "react";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [signUpModalOpen , setSignUpModalOpen] = useState<boolean>(false);
  return (
   
    <MainContainer>
         <Header setModalIsOpen={setModalIsOpen} setSignUpModalOpen={setSignUpModalOpen} ></Header>
      <HomePageComponent>
        <SignInComponent modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} ></SignInComponent>
        <SignUpComponent modalIsOpen={signUpModalOpen} setModalIsOpen={setSignUpModalOpen}></SignUpComponent>
        <CategoryComponent></CategoryComponent>
        <ProductComponent></ProductComponent>
      </HomePageComponent>
    </MainContainer>
  );
}
