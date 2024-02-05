import axios from 'axios';

const API_ENDPOINT = '/api/users/';

const signup = async (data)=>{
    const res = await axios.post(API_ENDPOINT,data);
    if(res.data){
        localStorage.setItem('user',JSON.stringify(res.data));
    }
    return res.data;
}

const login = async (data)=>{
    const res = await axios.post(API_ENDPOINT+"login",data);
    if(res.data){
        localStorage.setItem('user',JSON.stringify(res.data));
    }
    return res.data;
}

const logout = ()=>{
    localStorage.clear();
}

const userService = {
    signup,
    login,
    logout,
}

export default userService;