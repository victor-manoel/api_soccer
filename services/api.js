import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/countries',
  headers: {
    'X-RapidAPI-Key': 'f500032209mshc016268ad53aa50p1f85d0jsn056aabbd7f29',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});