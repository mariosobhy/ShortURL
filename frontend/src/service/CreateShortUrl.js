import axios from "axios";
import { BASE_URL } from "../constants";
const instance = axios.create({
    baseURL: `${BASE_URL()}/links/create`,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
  });

export const CreateShortUrl = async (data) => {
    console.log(data);
    try {
        const result = instance.post(
            instance.baseURL,
            data,
              {
                validateStatus: () => true
              }
            );
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}