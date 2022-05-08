import axios from 'axios'
export  function request(config)
{
  const instance = new axios.create({
    baseURL:'',
    timeout:5000,//超时时间
    method:config.method == undefined?'get':config.method
  })
}
