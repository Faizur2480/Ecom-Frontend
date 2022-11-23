import axios from "axios"
import { BASE_URL } from "../../Utilis/CommonPath";


class LoginService
{
    addUser(user)
    {
        return axios.post(BASE_URL+"addUser",user);
    }
    getUserList()
        {
            return axios.get(BASE_URL+"getAllUser");
        }
    getUserById(id)
    {
        return axios.get(BASE_URL+"getUserById/"+id);
    }
    updateUser(User)
    {
        return axios.put(BASE_URL+"updateUser",User)
    }
    deleteUser(User)
    {
        return axios.put(BASE_URL+"deleteUserById",User)
    }

    //login

    login(login)
    {
        
        return axios.post(BASE_URL+"login",login);
    }
   
  
}export default new LoginService();