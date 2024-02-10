import { ApiConnection } from "../Services/ApiConnection";
import { Product } from "../Types/Product";

const getProducts = async () => {
    const response = await ApiConnection.get('/products');
    return response.data;
}

const getProductById = async (id: string , token:string) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await ApiConnection.get(`/products/${id}`, config);
    return response.data;
}

const createProduct = async (product: Product, token: string) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const response = await ApiConnection.post('/products', product, config);
    return response.data;
}

const updateProduct = async (id: string, product: Product, token:string) => {
    console.log(product , id , token);
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const response = await ApiConnection.patch(`/products/${id}`, product, config);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
  
}

const deleteProduct = async (id: number , token:string) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await ApiConnection.delete(`/products/${id}`, config);
    return response.data;
}

export const ProductApi = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}