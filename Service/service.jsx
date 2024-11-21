import { Axiosinstance } from "./AxiosInterceptors";

// const url = process.env.REACT_APP_BASE_URL;
const url='http://localhost:8080';


export const userLogin = async (data) => {
    return await Axiosinstance.post(`${url}User/login`, data);
  };
  
  export const userSignup = async (data) => {
    return await Axiosinstance.post(`${url}/User/register`, data);
  };