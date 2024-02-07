import { Title } from "../../Title";
import PizzaImg from "../../../assets/pizza.png";
import BebidasImg from "../../../assets/bebidas.png";
import MassasImg from "../../../assets/massa.png";
import "./CardContainer.scss";

export const CardContainerArea = () => {
  return (
    <div className="CategoryArea">
        <div className="CardContainer">
            <div
                className="productCardContainer"
                onClick={() => {
                // chooseCategory("HamburguerPng");
                }}
            >
                    <div className="CardArea">
                    <img src={PizzaImg} alt="product img"></img>
                    </div>
                    <div className="productTitle">
                     <Title text="Pizzas" textSize="25px" textColor="white"></Title>
                    </div>
            </div>
            <div
                className="productCardContainer"
                onClick={() => {
                // chooseCategory("HamburguerPng");
                }}
            >
                <div className="CardArea">
                <img src={BebidasImg} alt="product img"></img>
                </div>
                <div className="productTitle">
                <Title text="Bebidas" textSize="25px" textColor="white"></Title>
                </div>
            </div>
        
            <div
                className="productCardContainer"
                onClick={() => {
                // chooseCategory("HamburguerPng");
                }}
            >
                    <div className="CardArea">
                        <img src={MassasImg} alt="product img"></img>
                    </div>
                    <div className="productTitle">
                        <Title text="Massas" textSize="25px" textColor="white"></Title>
                    </div>
            </div>
        </div>
    </div>
  );
};
