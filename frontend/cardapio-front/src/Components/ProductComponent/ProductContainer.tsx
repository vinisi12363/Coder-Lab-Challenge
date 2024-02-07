import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import './ProductComponentStyle.scss';
import pizzaImg from '../../assets/pizza.png';

export const ProductComponent = () => {
     return (
        <div className='ProductContainer'>
            <Title text="Produtos" textColor="black" textSize="35px" />
            <Subtitle text={"Escolha o produto desejado"} textColor="black" textSize="25px" />
            <div className="ContainerCenter">
                <div className='ProductCardArea'>
                    <div className='Card'>
                        <div className="CardImage">
                            <img src={pizzaImg} alt="product img"></img>
                        </div>
                        <div className="CardInfos">
                        <h2 className="CardTitle">Pizza Margherita</h2>
                        <p className="CardPrice">R$3,90</p>
                        </div>
                    </div>
                    <div className='Card'>
                        <div className="CardImage">
                            <img src={pizzaImg} alt="product img"></img>
                        </div>
                        <div className="CardInfos">
                        <h2 className="CardTitle">Pizza Margherita</h2>
                        <p className="CardPrice">R$3,90</p>
                        </div>
                    </div>
                    <div className='Card'>
                        <div className="CardImage">
                            <img src={pizzaImg} alt="product img"></img>
                        </div>
                        <div className="CardInfos">
                        <h2 className="CardTitle">Pizza Margherita</h2>
                        <p className="CardPrice">R$3,90</p>
                        </div>
                    </div>
                    <div className='Card'>
                        <div className="CardImage">
                            <img src={pizzaImg} alt="product img"></img>
                        </div>
                        <div className="CardInfos">
                        <h2 className="CardTitle">Pizza Margherita</h2>
                        <p className="CardPrice">R$3,90</p>
                        </div>
                    </div>
                    <div className='Card'>
                        <div className="CardImage">
                            <img src={pizzaImg} alt="product img"></img>
                        </div>
                        <div className="CardInfos">
                        <h2 className="CardTitle">Pizza Margherita</h2>
                        <p className="CardPrice">R$3,90</p>
                        </div>
                    </div>
                    <div className='Card'>
                        <div className="CardImage">
                            <img src={pizzaImg} alt="product img"></img>
                        </div>
                        <div className="CardInfos">
                        <h2 className="CardTitle">Pizza Margherita</h2>
                        <p className="CardPrice">R$3,90</p>
                        </div>
                    </div>
                </div>
            </div>
       
        </div>

     );


}