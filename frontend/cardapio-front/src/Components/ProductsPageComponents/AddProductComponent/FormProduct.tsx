import { Title } from "../../Title";
import { Subtitle } from "../../Subtitle";
import "./formProduct.scss";
import { useState } from "react";
import { useLocalStorage } from "../../../Hooks/useLocalStorage";
import {toast} from "react-toastify";
import { ProductApi } from "../../../Api/ProductApi";
import { Product } from "../../../Types/Product";


export const  FormProduct:React.FC = () => {
    const [name, setName] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);
    const [photo, setPhoto] = useState<string>('');
    const storedCategories = useLocalStorage.getLocalStorage("categories");
    const storedUser = useLocalStorage.getLocalStorage("user");
 
   
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setDisabled(true);
        const checkerResult = categoryChecker();
        console.log (checkerResult);
        if (checkerResult && (name.length > 0 && qty > 0 && price > 0 && photo.length > 0)){
            try {
                const product:Product = {
                    name,
                    categories: selectedCategories,
                    qty: qty,
                    price: price,
                    photo: photo,
                };
                console.log(product);

                const result = await ProductApi.createProduct(product, storedUser.token);
                console.log(result);
                if (result) {
                    toast.success('Produto cadastrado com sucesso!');
                    useLocalStorage.deleteLocalStorage("products");
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            }catch (error) {
                console.log(error);
            }
           
        } else {
            toast.warning("existem campos inválidos!")
            setTimeout(() => {
            window.location.reload();
            },4000);
        }

    };
    const categoryChecker = (): boolean => {
        if (selectedCategories.length === 0) {
            toast.error('You must select at least one category');
            return false;
        }
        if (selectedCategories.includes(27) || selectedCategories.includes(12) || selectedCategories.includes(13)){
            return true;
        }else {
            toast.error('You must select at least one parent category  following: "Pizza", "Bebidas" or "Massas"');
            return false;
        }
    }
    const handleCategoryChange = (event: any) => {
        const selectedCategory = Number(event.target.value);
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedCategories(prevCategories => [...prevCategories, selectedCategory]);
        } else {
            setSelectedCategories(prevCategories => prevCategories.filter(category => category !== selectedCategory));
        }
    };

    return (
        <div className="formProdContainer">
            <Title
                text="FORMULÁRIO DE CADASTRO DE PRODUTOS"
                textColor="black"
                textSize="60px"
            ></Title>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <label>
                    <Subtitle text="Product name: " textColor="black" textSize="20px"></Subtitle>
                  
                    <input disabled={disabled} type="text" value={name} placeholder={"Nome do Produto"} onChange={(e) => setName(e.target.value)} required />
                </label>
                <div>
                <Subtitle text="Categories: " textColor="black" textSize="20px"></Subtitle>
                    {storedCategories.map((category :any ) => (
                        <label key={category.id}>
                             <Subtitle text={category.name} textColor="black" textSize="20px"></Subtitle>
                            <input  type="checkbox"  disabled={disabled} value={category.id} onChange={handleCategoryChange} />  
                        </label>
                    ))}
                </div>
                <label>
                <Subtitle text="Quantity: " textColor="black" textSize="20px"></Subtitle>
                    <input 
                        type="number" 
                        value={qty} 
                        required
                        disabled={disabled}
                        onChange={(e) => {
                            const inputValue = Number(e.target.value);
                            if (inputValue > 0 && !isNaN(inputValue)) {
                            
                                setQty(Number(e.target.value));
                            }
                        }}  />
                    </label>
                 {qty <= 0 && (
                        <span style={{ color: 'red', marginLeft: '5px' }}>
                        Quantity must be greater than zero.
                        </span>
                    )}
                    <label>
                    <Subtitle text="Price: " textColor="black" textSize="20px"></Subtitle>
                    <input
                        type="number"
                        step="0.10"
                        value={price}
                        disabled={disabled}
                        required
                        onChange={(e) => {
                            const inputValue = parseFloat(e.target.value);
                            if (inputValue > 0 && !isNaN(inputValue)) {
                            
                                setPrice(Number(e.target.value));
                            }
                        }}
                      
                    />
                    {price <= 0 && (
                        <span style={{ color: 'red', marginLeft: '5px' }}>
                         Price must be greater than zero.
                        </span>
                    )}
                    </label>
                <label>
                <Subtitle text="Photo URL: " textColor="black" textSize="20px"></Subtitle>
                    <input type="url"  disabled={disabled} value={photo} onChange={(e) => setPhoto(e.target.value)} required />
                </label>
                <button  disabled={disabled} type="submit">Submit</button>
            </form>
        </div>
    );
}
