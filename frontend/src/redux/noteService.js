import axios from 'axios';

const API_ENDPOINT = '/api/notes/';

const getAll = async (token)=>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.get(API_ENDPOINT,config);
    return res.data;
}

const create = async (data,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res =  await axios.post(API_ENDPOINT,data,config);
    return res.data;
}

const noteService = {
    getAll,
    create,
}

export default noteService;