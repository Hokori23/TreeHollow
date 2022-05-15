import { request } from '../network/request.js';
import { nanoid } from 'nanoid';
export function getMessage(capacity, createdAt, before) {
  const params = {
    capacity,
    createdAt,
    before,
  };

  return request({
    method: 'GET',
    url: '/get-messages',
    params,
  });

  //刚开始获取数据
  if (createdAt == undefined && before == undefined) {
    return request({
      url: `/get-messages?capacity=${capacity}`,
    });
  }
  return request({
    url: `/get-messages?capacity=${capacity}&createdAt=${createdAt}&before=${before}`,
  });
  //模拟数据
  // var dataArr = [];
  // for (let i = 0; i < capacity; i++) {
  //   var obj = {
  //     id: nanoid(),
  //     content: '留言',
  //     createdAt: Date.now(),
  //   };
  //   dataArr.push(obj);
  // }
  // return {
  //   code: 0,
  //   data: {
  //     messages: dataArr,
  //   },
  //   message: '获取留言成功',
  // };
}
export function sendMessage(content) {
  console.log(content);
  return request({
    url: '/send-message',
    method: 'POST',
    data: {
      content,
    },
  });
  //后台发送数据
}
