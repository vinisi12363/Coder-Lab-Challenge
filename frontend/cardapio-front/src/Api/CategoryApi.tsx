import { ApiConnection } from "../Services/ApiConnection";

const getAllCategories = async () => {
     return await ApiConnection.get('/categories');
}


export const CategoryApi = {
    getAllCategories
}