import { Subtitle } from "../Subtitle";
import { Title } from "../Title";
import { CardContainerArea } from "./CategoryCardComponent/CardContainer";
import './categoryComponent.scss';

export const CategoryComponent = ()=>{

    return (
        <>
            <div className="categoryTitleArea">
                <Title text = "Seja bem-vindo(a) ao Fast Food do Vini!" textColor="crimson" textSize="50px"></Title>
                
            </div>
             
            <div>
            <Title text = "Categorias" textColor="black" textSize="35px"></Title>
            <Subtitle text = "Navegue por categorias" textColor="black" textSize="20px"></Subtitle>
            </div>
            <CardContainerArea></CardContainerArea>
        </>
    );


}