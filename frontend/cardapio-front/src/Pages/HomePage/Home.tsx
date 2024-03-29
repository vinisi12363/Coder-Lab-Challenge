import { MainContainer } from "../../Components/MainContainer/MainContainer";
import  { Header }  from '../../Components/Header/Header';
import { HomePageComponent } from "../../Components/HomePage/HomePageContainer";
import { CategoryComponent } from "../../Components/CategoryComponent/CategoryComponent";
import { ProductComponent } from "../../Components/ProductComponent/ProductContainer";
import { SignInComponent } from "../../Components/SignInModal/SignInComponent";
import { SignUpComponent } from "../../Components/SignUpModal/SignUpComponent";
import { useState, useEffect} from "react";
import { useContextCategory } from "../../Contexts/CategoryContext";
import { useContextProducts } from "../../Contexts/ProductContext";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
export default function Home() {

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [signUpModalOpen , setSignUpModalOpen] = useState<boolean>(false);
  const {categories, fetchCategories} = useContextCategory();
  const {products,fetchProducts} = useContextProducts();
  const categoriesLocalStorage = useLocalStorage.getLocalStorage("categories");
  const productsLocalStorage = useLocalStorage.getLocalStorage("products");
 
  useEffect(()=>{
    if(!categories.length || categories.length === 0){
      fetchCategories();
    }
    if(!products || products.length === 0){
      fetchProducts();
    }
  },);
  useEffect(()=>{
    if ((!categoriesLocalStorage || categoriesLocalStorage.length === 0) && categories.length > 0){
      useLocalStorage.setLocalStorage("categories", categories);
    }
    if ((!productsLocalStorage || productsLocalStorage.length === 0) && products?.length > 0){
      useLocalStorage.setLocalStorage("products", products);
    }
  },);
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
