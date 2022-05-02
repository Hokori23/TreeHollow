<template>
  <div class="main-body">
    <!-- 第一页消息部分 -->
    <div class="messageWrapper clearfix" ref="messages" @scroll="Judge()">
      <div class="inner-wrapper" ref="inner" >
        <div class="message" v-for="item in dataObj" :key="item.id">
          <vs-button size="large" color="rgb(59,222,200)" gradient class="mess">
            {{ item.message }}
          </vs-button>
        </div>
      </div>
    </div>
    <!-- input消息 -->
    <div class="inputWrapper">
      <vs-input
        color="rgb(59,222,200)"
        v-model.trim="inputValue"
        placeholder="请输入你想发送的内容"
        @keydown.enter="addMessage"
        @blur="ifShow = false"
        @focus="isShow = false"
      >
      </vs-input>

      <vs-button color="rgb(59,222,200)" gradient class="submit" @click="addMessage()"> 发送 </vs-button>
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
  name: 'IndexList',
  data() {
    return {
      dataObj: [],
      inputValue: '',
      ifShow: false,
      dataCnt: 0,
      page: 1
    };
  },
  computed:{
    isReminder(){
      return this.$refs.inner.clientHeight > this.$refs.messages.clientHeight;
    }
  },
  methods: {
    //输入框添加数据
    addMessage() {
      this.ifShow = false;
      if (this.inputValue == '') {
        this.ifShow = true;
        return;
      }
      let obj = {
        id: nanoid(),
        message: this.inputValue,
      };
      this.dataObj.push(obj);
      this.inputValue = '';
      this.dataCnt += 1;
    },
    //获取后台数据
    getMessage(page) {
      //返回第page页的数据
      return {
        code: 0,
        data: {
          total:50,
          messages: ['message1', 'message2', 'message3',
          'message1', 'message2', 'message3'
          ],
        },
        page: 1,
      }
    },
    //判断是否到底部
    Judge() {
      //临界条件：视口高度+滚动高度>=内容高度
      //视口高度
      var viewHeight = this.$refs.messages.clientHeight;
      var scrollTop = this.$refs.messages.scrollTop;
      var scrollHeight = this.$refs.messages.scrollHeight;
      if (viewHeight + scrollTop + 2 >= scrollHeight) {
        //加载完所有数据
        // if (this.dataObj.length >= this.dataCnt) {
        //   this.reminder = '数据到底啦';
        //   return;
        // }
        this.page += 1;
        //防止多次重复触发
        setTimeout(() => {
          this.handlerMessage(this.page);
        }, 200);
      }
    },
    //重新加载后台数据
    handlerMessage(page) {
      console.log('我被调用啦');
      console.log(this.dataObj);
      let req = this.getMessage(page);
      this.dataCnt = req.data.total;
      this.page = req.page;
      if (req.code === 0) {
        req.data.messages.forEach((element) => {
          let obj = { id: nanoid(), message: element };
          this.dataObj.push(obj);
        });
      }
    },
  },

  mounted(){
      this.handlerMessage(1);
      var divs = document.querySelectorAll('.mess');
      console.log(divs);
      console.log(divs.length);
      console.log(divs[divs.length-1].offsetHeight);
  }

};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.main-body {
  width: 100%;
  height: 100%;
}
.outer_wrapper {
  width: 100%;
  height: 100%;
}
.messageWrapper {
  width: 100%;
  height: 90%;
  overflow: scroll;
}
.clearfix::before,
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}

.inputWrapper {
  height: 10%;
  background-color: cadetblue;
  opacity: 0.4;
  overflow: hidden;
}
.mess {
  margin-top: 20px;
  margin-left: 10px;
}
.vs-input-parent {
  /* position: absolute;
    bottom: 20px; */
  width: 60%;
  margin-left: 10px;
  display: inline-block;
}
.vs-input {
  width: 100%;
}
.submit {
  margin-top: 15px;
  width: 100px;
  display: inline-block;
  margin-left: 20px;
  width: 30%;
}
.inner-wrapper{
  height: 900px;
}
#vs-input--3{
  width: 100%;
}
/* .reminder {
  color: aqua;
} */
</style>
