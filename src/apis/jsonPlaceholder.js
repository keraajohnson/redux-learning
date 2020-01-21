// JSONPLACEHOLDER IS THE NAME OF THE APi
import axios from 'axios';

export default axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
});
