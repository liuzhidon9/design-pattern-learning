# 单例模式

#### 定义：`保证一个类仅有一个实列，并提供一个访问它的全局访问点`

```
单例模式是一种常用的模式，有一些对象我们往往只需要一个，比如线程池、全局缓存、浏览器中的 window 对象等。在 JavaScript 开发中，单例模式的用途同样非常广泛。试想一下，当我们单击登录按钮的时候，页面中会出现一个登录浮窗，而这个登录浮窗是唯一的，无论单击多少次登录按钮，这个浮窗都只会被创建一次，那么这个登录浮窗就适合用单例模式来创建。
```

实现：`用一个变量来标志是否已经为某个类创建了实列，如果是，则在下一次获取该类的实列时直接返回之前创建的对象。`

### 隐蔽的单例模式

```js
// 隐蔽的单例模式
class Singleton {
  constructor(name) {
    this.instance = null;
    this.name = name;
  }
  static getInstance(name) {
    if (!this.instance) {
      this.instance = new Singleton(name);
    }
    return this.instance;
  }
  getName() {
    console.log(this.name);
  }
}

let a = Singleton.getInstance("Nicholas.Cage");
let b = Singleton.getInstance("Nicholas.ZhaoSi");

console.log("a === b", a === b); //true
```

`Singleton类的使用者必须知道这是一个单列模式类，跟以往的直接 new xxx不同，这里使用Singleton.getInstance来获取对象`

<hr>

### 透明的单例模式

```js
// 透明单例模式 ：引入代理类来组合成单例模式
// 创建一个全局唯一的div节点
class CreateDiv {
  constructor(html) {
    this.html = html;
    this.init();
  }

  init() {
    // let div = document.createElement('div')
    // div.innerHTML = this.html
    // document.body.appendChild(div)
    console.log(this.html);
  }
}
let proxyCreateDiv = (function () {
  let instance;
  return function (html) {
    if (!instance) {
      instance = new CreateDiv(html);
    }
    return instance;
  };
})();

let aa = new proxyCreateDiv("hello world");
let bb = new proxyCreateDiv("how are you");
console.log("aa===bb", aa === bb); //true
```

<hr>

### 通用的惰性单例

```js
// 通用的惰性单例
let createLoginLayer = function (text) {
  console.log(text);
  return text;
};
let getSingle = function (fn) {
  let result;
  return function () {
    return result || (result = fn.apply(this, arguments));
  };
};

let createSingleLoginLayer = getSingle(createLoginLayer);
let aaa = createSingleLoginLayer("xxx");
let bbb = createSingleLoginLayer("yyy");
console.log("aaa===bbb", aaa === bbb); //true
```
