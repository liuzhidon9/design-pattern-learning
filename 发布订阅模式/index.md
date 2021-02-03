# 发布订阅模式

#### 定义：`发布-订阅模式又叫观察者模式，它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都会得到通知。`

### 自定义事件

`用户订阅售楼处的信息`

```js
let salesOffices = {}; //定义售楼处
salesOffices.clientList = {}; //缓存列表，存放订阅者的回调函数

salesOffices.listen = function (key, fn) {
  if (!this.clientList[key]) {
    this.clientList[key] = [];
  }
  this.clientList[key].push(fn);
};

salesOffices.trigger = function () {
  let key = Array.prototype.shift.call(arguments); //取出消息类型
  let fns = this.clientList[key];
  if (!fns || fns.length === 0) {
    return false;
  }
  for (let i = 0; i <= fns.length - 1; i++) {
    fns[i].apply(this, arguments);
  }
};

salesOffices.listen("squareMeter110", function (price) {
  //小明订阅消息
  console.log("squareMeter110", price);
});
salesOffices.trigger("squareMeter110", 2000000);
```

### 发布订阅的通用模式

```js
let myevent = {
  clientList: {},
  triggerList: [],
  listen: function (key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
  },
  trigger: function () {
    let key = Array.prototype.shift.call(arguments); //取出消息类型
    let fns = this.clientList[key];
    if (!fns || fns.length === 0) {
      this.triggerList.push(key);
      return;
    }
    for (let i = 0; i <= fns.length - 1; i++) {
      fns[i].apply(this, arguments);
    }
  },
};


let installEvent = function (obj) {
  for (const key in myevent) {
    obj[key] = myevent[key];
  }
};

let salesOffices = {};
installEvent(salesOffices);
salesOffices.listen("squareMeter110", function (price) {
  //小明订阅消息
  console.log("squareMeter110", price);
});
salesOffices.trigger("squareMeter110", 2000000);
```
