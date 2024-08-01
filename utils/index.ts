
import axios from 'axios';
import { error } from 'console';

const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  params: {},
  headers: {
    'x-rapidapi-key': '248d69ecc2msh90f669be563a8dap1ef441jsn9614d5903809',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

export async function fetchCarData() {
    try {
      const response = await axios.request(options);
      const data = response.data; // This is already a JavaScript object
      console.log('JavaScript Object:', data);

    }
    catch {
        console.log(error);
    }
  }
  