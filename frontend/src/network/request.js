import axios from 'axios';
export function request(config) {
  const instance = new axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 5000, //超时时间
    method: config.method == undefined ? 'get' : config.method,
  });
  return instance(config);
}
