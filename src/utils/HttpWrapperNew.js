import axios from 'axios';
// import { API_BASE_URL, HEADERS_DEFAULT, HEADERS_WITH_AUTH } from '../apiHandlers/apiConfig';
const url="http://dummy.restapiexample.com/api/v1/employees";
const HttpWrapper = (method, url, data,) => axios({
  method,
  url,
//   headers: withHeaders ? HEADERS_WITH_AUTH() : HEADERS_DEFAULT,
  data,
  });

  export default HttpWrapper;