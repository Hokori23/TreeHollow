<template>
  <div class="main-body">
    <!-- 第一页消息部分 -->
    <div 
    class="messageWrapper clearfix" 
    ref="messages" 
    @scroll="Judge"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
    :style="styleObj"
    >
    <!-- 上拉获取消息部分 -->
    <div class="news" >{{word}}</div>
      <div class="getHeight" ref="getHeight">
        <div class="message" v-for="item in dataObj" :key="item.id">
          <vs-button size="large" color="rgb(59,222,200)" gradient class="mess">
            {{ item.content }}
          </vs-button>
        </div>
      </div>
      <!-- 提示信息 -->
      <div class="reminder" ref="reminder" v-show="isShowRM">{{ reminder }}</div>
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
// import upFresh from './upFresh';
export default {
  name: 'IndexList',
  computed:{
     // eslint-disable-next-line vue/return-in-computed-property
     styleObj(){
       return{
        transition:`all ${this.duration}ms`,
        transform:`translate3d(0, ${this.distance}px,0)`
       }
     },
     // eslint-disable-next-line vue/return-in-computed-property
     word(){
       if(this.state == 0){
         return '下拉获取历史消息';
       }else if(this.state == 1){
         return '松手更新消息';
       }else {
         return '正在加载中'
       }
     },
   },
  data() {
    return {
      dataObj: [],
      inputValue: '',
      ifShow: false,
      isFull: false,
      reminder: '下拉获取数据',
      isShowRM: true,
      cue:'',
      timer:true,
      distance:0,
      state:0,
      startY:0
    };
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
        content: this.inputValue,
        createdAt:Date.now()
      };
      this.dataObj.push(obj);
      this.inputValue = '';
      var cue = this.sendMessage(this.dataObj);
      this.cue = cue.message;
    },
    //后台发送数据
    sendMessage(content){
      //发送content内容给后台
    },
    //获取后台数据
    getMessage(capacity, createdAt, before) {
      //模拟数据 返回数据
      var dataArr = [];
      console.log(capacity);
      for(let i=0 ;i<capacity; i++){
        var obj = {
          id:nanoid(),
          content:'留言',
          createdAt:Date.now()
        }
        dataArr.push(obj);
      }
      return {
          code: 0,
          data: {
            messages: dataArr
          },
          message: '获取留言成功',
        };
    },
    //判断是否到底部
    Judge() {
      //临界条件：视口高度+滚动高度>=内容高度
      //视口高度
      var viewHeight = this.$refs.messages.clientHeight;
      var scrollTop = this.$refs.messages.scrollTop;
      var scrollHeight = this.$refs.messages.scrollHeight;
      if (viewHeight + scrollTop + 10 >= scrollHeight) {
        //加载完所有数据
        if (this.isFull) {
          this.reminder = '数据到底啦';
          return;
        }
        //函数节流思想
        if(!this.timer)
          return;
        this.timer = false;
        setTimeout(() => {
          console.log('我被调用啦');
          //获取数据
          this.handlerMessage(2);
          this.timer = true;
        }, 500);
      }
    },
    //重新加载后台数据
    handlerMessage(num) {
      let req = this.getMessage(num);
      //数据全部加载完
      if(req.data.messages.length == 0){
        this.isFull = true;
      }
      if (req.code === 0) {
          this.dataObj = this.dataObj.concat(req.data.messages);
      }
      console.log('增加了'+ num + '条数据耶');
    },
    touchstart(event){
      this.distance = 0;
      //获取初始滑动的Y坐标
      this.startY = event.targetTouches[0].clientY;
    },
    touchmove(event){
      //判断是否有滚动条 有则不启用
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop > 0){
        return ;
      }
      //slide为手指下拉的距离
      var slide = event.targetTouches[0].clientY - this.startY;
      if(slide > 0){
      //增加阻力 测试？
      this.distance = Math.pow(slide,0.8);
      //下拉到一定距离 示意松手
        if(this.distance > 50){
          this.state = 1;
        }
      //不够长则恢复 提示重新获取
        else{
          this.state = 0;
        }
      }
    },
    touchend(){
      //加载动画
      // this.duration = 300;
      if(this.distance > 50){
        this.distance = 50;
        //更新数据
        setTimeout(() => {
          this.handlerMessage(2);
        }, 500);
        this.state = 0;
        this.distance = 0;
      }
    }
  },
  mounted() {
    this.handlerMessage(15);
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
.news{
  width: 150px;
  margin: auto;
  color: aqua;
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
.inner-wrapper {
  height: 900px;
}
#vs-input--3 {
  width: 100%;
}
.reminder {
  color: aqua;
  width: 100px;
  margin: auto;
}
</style>
