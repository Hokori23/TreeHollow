import axios from 'axios';
import { getEventBus } from '@/utils/event-bus';

const Request = axios.create({
  baseURL: '',
  timeout: 6000,
});
Request.interceptors.response.use(
  (response) => {
    const eventBus = getEventBus();

    const { code, message } = response.data || {};

    if (code !== 0) {
      eventBus.$emit('notify', {
        title: '警告',
        text: `请求错误, ${message || '未知错误'}`,
      });
    }

    return response;
  },
  (error) => {
    eventBus.$emit('notify', {
      title: '警告',
      text: String(error) || '未知错误',
    });
  },
);

/**
 *
 * @param { number } capacity
 * @param { number } createdAt
 * @param { 0 | 1 } before
 * @returns { Message[] }
 */
export const getMessages = (params) =>
  Request.get('/get-messages', {
    params,
  });

/**
 *
 * @param { string } content
 * @returns
 */
export const sendMessage = (data) =>
  Request.post('/send-message', {
    data,
  });
