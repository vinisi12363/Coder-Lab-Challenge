import { Title } from "../../../Title";
import { Subtitle } from "../../../Subtitle";
import './ProductComponentStyle.scss';
import { useLocalStorage } from "../../../../Hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { useContextCategory } from "../../../../Contexts/CategoryContext";
import { useContextProducts } from "../../../../Contexts/ProductContext";


export const EditProductComponent = () => {
    const { categoryId } = useContextCategory();
    const [storedProducts, setStoredProducts] = useState<any>();
    const { selectedProduct,chooseProduct, products} = useContextProducts();
    
    useEffect(() => {
        if(!storedProducts || storedProducts.length === 0){
            setStoredProducts(useLocalStorage.getLocalStorage("products"));
        }
    }, []);   
     return (
        <div className='ProductContainerEdit'>
            <Title text="Produtos" textColor="black" textSize="35px" />
            <Subtitle text={"Escolha o produto desejado:"} textColor="black" textSize="25px" />
            <div className="ContainerCenter">
                <div className='ProductCardAreaEdit' >
                    {products?.map((product: any) => {
                        return (
                            <div className={`Card ${product.id === selectedProduct?.id? 'verde' :'' } ${categoryId !== null && (product.categories.includes(categoryId) ? 'isSelected' : 'isUnselected')}`} key={product.id} 
                            onClick={()=>(chooseProduct(product))}
                            >
                                <div className="CardImage">
                                    <img src={product.photo} alt="product img"></img>
                                </div>
                                <div className="CardInfos">
                                    <h2 className="CardTitle">{product.name}</h2>
                                    <p className="CardPrice">{`R$${product.price}0`}</p>
                                </div>
                            </div>
                        );
                    })}
                   
                </div>
            </div>
       
        </div>

     );


}