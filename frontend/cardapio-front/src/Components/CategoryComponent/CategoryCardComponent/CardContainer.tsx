import { Title } from "../../Title";
import PizzaImg from "../../../assets/pizza.png";
import BebidasImg from "../../../assets/bebidas.png";
import MassasImg from "../../../assets/massa.png";
import "./CardContainer.scss";
import { useLocalStorage } from "../../../Hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { useContextCategory } from "../../../Contexts/CategoryContext";
export const CardContainerArea = () => {
  const {chooseCategory} = useContextCategory();
  const [storedCategories, setStoredCategories] = useState<any>();
  useEffect(() => {
        if(!storedCategories){
            setStoredCategories(useLocalStorage.getLocalStorage("categories"));
        }
  }, []);

  return (
    <div className="CategoryArea">
        <div className="CardContainer">
          
          {storedCategories?.map((category: any) => {
            if(category.parent === null) {
                return(
                        <div
                        key={category.id}
                        className="productCardContainer"
                        onClick={() => {
                         chooseCategory(category.name);
                        }}
                    >
                            <div className="CardArea">
                                <img src={
                                    category.name === 'Massas' ? MassasImg :
                                    category.name === 'Pizza' ? PizzaImg :
                                    category.name === 'Bebidas' ? BebidasImg : '' } 
                                    alt={category.name}>

                                </img>
                            </div>
                            <div className="productTitle">
                                <Title 
                                    text={category.name} 
                                    textSize="25px"
                                    textColor="white"
                                ></Title>
                            </div>
                    </div>
                );
            }
          })
                
          }
          
         
        </div>
    </div>
  );
};
