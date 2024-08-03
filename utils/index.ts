



export async function fetchCarData() {

    const headers = {
        'x-rapidapi-key': '248d69ecc2msh90f669be563a8dap1ef441jsn9614d5903809',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{headers: headers,});
    const result = await response.json();
    
    return result
  }
  