import axios, { AxiosResponse } from "axios";

interface friendemail {
    email:string
}

export const addfriendservice = async(email:string): Promise<AxiosResponse<friendemail>> => {
      try{
    const token = sessionStorage.getItem('token');
    const response = await axios.post<friendemail>('http://localhost:5000/api/addfriend', { email},{
            headers: {
                Authorization: `${token}`, 
              },
          });
          console.log(response);
          return response;

        }
        catch(error){
       throw new Error('Network response was not ok: ' + error);
        }
        }



