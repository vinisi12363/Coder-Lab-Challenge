import { ApiConnection } from "../Services/ApiConnection";
import { User } from "../Types/User";

type apiUser = Omit<User, 'name'>

const createUser = async (user: User) => {
    const response = await ApiConnection.post('/user', {name:user.name, username:user.username,  password:user.password});
    return response.data;
}
const authUser = async (user: apiUser) => {
    const response = await ApiConnection.post('/auth/login', {username:user.username, password:user.password});
    return response.data;
}

export const UserApi = {
    createUser,
    authUser
}