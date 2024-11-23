import { Axiosinstance } from "./AxiosInterceptors";

// export const url = "https://pj-tech-hub-backendmain.vercel.app";
// export const url = "http://localhost:8080";
 export const url='https://pj-tech-hub-backend.vercel.app';

export const userLogin = async (data) => {
  return await Axiosinstance.post(`${url}/User/login`, data);
};

export const userSignup = async (data) => {
  return await Axiosinstance.post(`${url}/User/register`, data);
};

export const getsearch = async (searchQuery) => {
  return await Axiosinstance.get(
    `${url}/Role/searchRoles?searchTerm=${encodeURIComponent(searchQuery)}`
  );
};
