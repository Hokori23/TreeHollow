import {request} from '../network/request.js';
import {nanoid} from 'nanoid'
export function getMessage(capacity) {
  // return request({
  //   url:'',
  //   method:'',
  //   data:{

  //   }
  // })
  //模拟数据 返回数据
  var dataArr = [];
  for (let i = 0; i < capacity; i++) {
    var obj = {
      id: nanoid(),
      content: '留言',
      createdAt: Date.now(),
    };
    dataArr.push(obj);
  }
  return {
    code: 0,
    data: {
      messages: dataArr,
    },
    message: '获取留言成功',
  };
}
export function sendMessage(content) {
  return request({
    url: '',
    method: '',
    data: {},
  });
  //后台发送数据
}
