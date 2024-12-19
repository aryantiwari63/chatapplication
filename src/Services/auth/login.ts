// import axios, { AxiosResponse } from "axios";
// interface loginresponse{
//     token: string;
//     refreshtoken: string;
// }

// export const loginservice = async(email:string, password:string):Promise<AxiosResponse<loginresponse>> =>{
//       try{
//     const response = await axios.post <loginresponse>('http://localhost:5000/api/login',{email, password}); 
    
//     console.log("response is",response);
//     return response;
  
//       }
//       catch(error){
//         console.log(error);
//         throw new Error('login failled');
//       }
// }
import axios, { AxiosResponse } from "axios";

interface loginresponse {
    token: string;
    refreshtoken: string;
}

export const loginservice = async (email: string, password: string): Promise<AxiosResponse<loginresponse>> => {
  try {
    const response = await axios.post<loginresponse>('http://localhost:5000/api/login', { email, password });
    

    console.log("Response data:", response.data);

    return response;
  } catch (error) {
    console.log(error);
    throw new Error('Login failed');
  }
}
