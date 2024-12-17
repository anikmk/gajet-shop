
import axiosSecure from "./axiosSecure";


export const getUserDataByEmail = async(email) => {
    try{
        const {data} = await axiosSecure.get(`/seller/product/${email}`);
        return data;
    }
    catch(err){console.log(err);}
} 