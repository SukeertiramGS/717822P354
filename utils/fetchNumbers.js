const axios = require('axios');
require('dotenv').config();

const BASE_URL = "http://20.244.56.144/numbers";  

const fetchNumbers = async (numberId) => {
    let endPoint;


    switch (numberId) {  
        case 'p':              
            endPoint = '/primes';
            break;
        case 'f':
            endPoint = '/fibonacci';
            break;
        case 'r':
            endPoint = '/random';
            break;
        case 'e':
            endPoint = '/even';
            break;
        default:
            console.error(`Invalid numberId: ${numberId}`);
            return [];
    }

    try {
        const response = await axios.get(`${BASE_URL}${endPoint}`, {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}`
            }
        });

        return response.data.numbers;  
    } catch (error) {
        console.error('Error fetching numbers:', error.message);
        return [];
    }
};

module.exports = { fetchNumbers };
