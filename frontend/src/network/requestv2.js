import axios from 'axios';

const instance = new axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 5000, //超时时间
});
export const request = async (config) => {
  try {
    const { data } = await instance(config);
    if (data?.code || !data?.data?.message) {
      alert(`请求错误, ${data?.message}`);
      return;
    }
    return data;
  } catch (e) {
    alert(`请求错误, ${String(e)}`);
  }
};
