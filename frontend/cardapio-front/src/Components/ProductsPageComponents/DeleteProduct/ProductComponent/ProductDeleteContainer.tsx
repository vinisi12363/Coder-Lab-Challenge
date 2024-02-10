import { Title } from "../../../Title";
import { Subtitle } from "../../../Subtitle";
import './ProductComponentStyle.scss';
import { useLocalStorage } from "../../../../Hooks/useLocalStorage";
import {  useEffect, useState } from "react";
import { ProductApi } from "../../../../Api/ProductApi";
import { toast } from "react-toastify";
import { useContextUser } from "../../../../Contexts/UserContext";
import { IoTrashBin } from "react-icons/io5";

import { useContextProducts } from "../../../../Contexts/ProductContext";


export const DeleteProductComponent = () => {
    const [productId , setProductId] = useState<number | null>(null);
    const { products, fetchProducts} = useContextProducts();
    const  storedUser = useLocalStorage.getLocalStorage("user");
    const productsStored = useLocalStorage.getLocalStorage("products");
    const [disabled, setDisabled] = useState(false);
    useEffect(() => {
        if (!productsStored || productsStored.length === 0){
            useLocalStorage.setLocalStorage("products", products);
        }
        fetchProducts();
    },[]);

    const changeToDelete = async (id:number)=>{
        setDisabled(true);
      
        if (id !== null){
            
            const confirmed = window.confirm("Tem certeza de que deseja excluir este item?");
            if (confirmed){
                try {
                    const result = await ProductApi.deleteProduct(id, storedUser?.token);
                    if (result){
                        toast.success('Produto deletado com sucesso!');
                        useLocalStorage.deleteLocalStorage("products");
                        fetchProducts();
                        useLocalStorage.setLocalStorage("products", products);
                        setTimeout(() => {
                            window.location.reload();
                        }, 2000);
                    } 
                 } catch (error) {
                     console.log (error);
                     toast.error('Erro ao deletar produto');
                     setDisabled(false);
                 }
            }else {
                setDisabled(false);
                setProductId(null);
            }
          
        }
        
    }
 
   
     return (
        <div className='ProductContainerEdit'>
            <Title text="Produtos" textColor="black" textSize="35px" />
            <Subtitle text={"Escolha o produto desejado:"} textColor="black" textSize="25px" />
            <div className="ContainerCenter">
                <div className='ProductCardAreaDelete' >
                    {products?.map((product: any) => {
                        return (
                            <div className={`Card ${product.id === productId && 'red' }`} key={product.id} 
                           
                            >
                                <div className="CardImage">
                                    <img src={product.photo} alt="product img"></img>
                                </div>
                                <div className="CardInfos">
                                    <h2 className="CardTitle">{product.name}</h2>
                                    <p className="CardPrice">{`R$${product.price}0`}</p>
                                    <button disabled={disabled} className="deleteButton"  onClick={()=>{ 
                                        changeToDelete(product.id)
                                        }}> <IoTrashBin size={"40"} color="white"></IoTrashBin></button>
                                </div>
                            </div>
                        );
                    })}
                   
                </div>
            </div>
       
        </div>

     );


}