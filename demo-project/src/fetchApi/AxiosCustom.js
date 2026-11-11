import axios from "axios";

function fetchAxios(){
    axios.get('https://fakestoreapi.com/products')
    .then(response => console.log(response.data));
}

export default fetchAxios;