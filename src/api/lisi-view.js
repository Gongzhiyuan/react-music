
import axios from 'axios'

export const listGet = (params) => {
  console.log(params);
  return axios.get('http://jsonplaceholder.typicode.com/posts')
}

